import React, { createContext, useContext, useReducer, useEffect } from 'react';

const BlogContext = createContext();

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_POSTS':
      return { ...state, posts: action.payload, loading: false, error: null };
    case 'ADD_POST':
      return { 
        ...state, 
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null 
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
        error: null
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Initialize with some sample data
  useEffect(() => {
    const samplePosts = [
      {
        id: '1',
        title: 'Getting Started with React Hooks',
        content: 'React Hooks revolutionized how we write React components by allowing us to use state and lifecycle features in functional components...',
        excerpt: 'Learn how React Hooks can simplify your component logic and make your code more reusable.',
        author: 'Jessica Kali',
        date: '2024-01-15T10:30:00Z',
        category: 'Technology',
        tags: ['React', 'JavaScript', 'Frontend'],
        readTime: 5,
        image: '/api/placeholder/400/250'
      },
      {
        id: '2',
        title: 'Sustainable Travel Tips for 2024',
        content: 'Traveling sustainably has become more important than ever. Here are practical tips to reduce your environmental impact while exploring the world...',
        excerpt: 'Discover how to travel responsibly and minimize your carbon footprint while still having amazing adventures.',
        author: 'Michael Chen',
        date: '2024-01-12T14:20:00Z',
        category: 'Travel',
        tags: ['Travel', 'Environment', 'Sustainability'],
        readTime: 7,
        image: '/api/placeholder/400/250'
      },
      {
        id: '3',
        title: 'Healthy Meal Prep Ideas',
        content: 'Meal prepping can save time and help maintain a healthy diet. Here are some delicious and nutritious recipes that are perfect for batch cooking...',
        excerpt: 'Simple and nutritious meal prep recipes that will save you time and keep you healthy.',
        author: 'Sarah Johnson',
        date: '2024-01-10T09:15:00Z',
        category: 'Food',
        tags: ['Health', 'Cooking', 'Meal Prep'],
        readTime: 6,
        image: '/api/placeholder/400/250'
      }
    ];
    
    dispatch({ type: 'SET_POSTS', payload: samplePosts });
  }, []);

  // CRUD Operations
  const createPost = (postData) => {
    const newPost = {
      ...postData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      author: postData.author || 'Anonymous',
      readTime: Math.ceil(postData.content.split(' ').length / 200) || 5,
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
    return newPost.id;
  };

  const updatePost = (id, updates) => {
    const post = state.posts.find(p => p.id === id);
    if (post) {
      const updatedPost = { ...post, ...updates };
      dispatch({ type: 'UPDATE_POST', payload: updatedPost });
      return true;
    }
    return false;
  };

  const deletePost = (id) => {
    dispatch({ type: 'DELETE_POST', payload: id });
  };

  const getPost = (id) => {
    return state.posts.find(post => post.id === id);
  };

  const getPostsByCategory = (category) => {
    return state.posts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  };

  const searchPosts = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return state.posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  const value = {
    ...state,
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPostsByCategory,
    searchPosts,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};