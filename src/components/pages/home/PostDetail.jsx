import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-teal-500 underline mb-4 block">← Back</Link>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="h-64 bg-gray-300 rounded mb-4"></div>
      <p className="text-gray-600 text-sm mb-2">Category: {post.category}</p>
      <p className="text-gray-800">{post.description}</p>
    </div>
  );
};

export default PostDetail;
