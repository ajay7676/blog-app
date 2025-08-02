import React from 'react';
import { Link } from 'react-router-dom';
import TagSearch from './TagSearch';
import { useBlog } from '../../../context/BlogContext';

const BlogSection = () => {
  const { posts } = useBlog();

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3 space-y-6">
        <div className="bg-gray-100 text-center p-6 rounded">
          <h2 className="font-semibold text-lg">Share Your Knowledge With Our Readers</h2>
          <Link 
            to="/create"
            className="mt-3 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-50 inline-block"
          >
            ✍️ Write On Notebook
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">
            <span className="text-teal-500">Recently</span> Posted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(0, 6).map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <div className="hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-300 rounded-t-lg"></div>
                  <div className="mt-2 p-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                    <h3 className="text-lg font-semibold mt-2 hover:text-teal-600">{post.title}</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <span>👤 {post.author}</span> &nbsp;|&nbsp;
                      <span>📅 {new Date(post.date).toLocaleDateString()}</span> &nbsp;|&nbsp;
                      <span>⏱ {post.readTime} Min. To Read</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-bold mb-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded">Categories</span>
          </h2>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">Lifestyle <span>09</span></li>
            <li className="flex justify-between">Travel <span>05</span></li>
            <li className="flex justify-between">Food <span>09</span></li>
            <li className="flex justify-between">Healthcare <span>10</span></li>
            <li className="flex justify-between">Technology <span>03</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded">Today's</span> Update
          </h2>
          <div className="grid grid-cols-2 gap-2 text-center text-sm">
            <div className="bg-gray-100 p-2 rounded">
              <div className="text-teal-600 font-bold text-xl">14</div>
              <div>New Posts</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div className="text-teal-600 font-bold text-xl">480</div>
              <div>Total Visitors</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div className="text-teal-600 font-bold text-xl">29</div>
              <div>New Subscribers</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div className="text-teal-600 font-bold text-xl">138</div>
              <div>Blog Read</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded">Instagram</span> Posts
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, idx) => (
              <div key={idx} className="w-full h-20 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
        <TagSearch />
      </div>
    </div>
  );
};

export default BlogSection;
