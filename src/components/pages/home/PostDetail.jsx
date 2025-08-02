import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../../../context/BlogContext';
import ConfirmDialog from '../../ui/ConfirmDialog';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, deletePost } = useBlog();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const post = getPost(id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Link to="/" className="text-teal-500 underline mb-4 block">← Back</Link>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Post Not Found</h1>
          <p className="text-gray-600">The post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    deletePost(id);
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link to="/" className="text-teal-500 underline mb-4 inline-block">← Back to Home</Link>
        
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs mr-3">
                {post.category}
              </span>
              <span>👤 {post.author}</span>
              <span className="mx-2">|</span>
              <span>📅 {formatDate(post.date)}</span>
              <span className="mx-2">|</span>
              <span>⏱ {post.readTime} min read</span>
            </div>
          </div>
          
          <div className="flex gap-2 ml-4">
            <Link
              to={`/edit/${id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              ✏️ Edit
            </Link>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="mb-6">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Post Content */}
      <div className="prose max-w-none">
        <div className="text-lg text-gray-700 mb-6 italic border-l-4 border-teal-500 pl-4">
          {post.excerpt}
        </div>
        
        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};

export default PostDetail;
