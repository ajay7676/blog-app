import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => setPosts(data.products));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-6">
          <span className="bg-teal-500 text-white px-2 py-1 rounded">Featured</span> This Month
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(0, 2).map((post) => (
              <Link key={post.id} to={`/post/${post.id}`} className="block">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Travel</span>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <div className="h-40 bg-gray-300 rounded my-2" />
              <div className="text-sm text-gray-500 flex gap-4">
                <span>👤 Jenny Kia</span>
                <span>📅 02 December 2022</span>
                <span>⏱ 3 Min. To Read</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{post.description.slice(0, 100)}...</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-semibold mb-6">
          <span className="bg-teal-500 text-white px-2 py-1 rounded">Popular</span> Posted
        </h2>

        <div className="space-y-6">
          {posts.slice(2).map((post) => (
            <div key={post.id} className=" pb-4">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Travel</span>
              <h4 className="text-md font-semibold mt-1">{post.title}</h4>
              <div className="text-sm text-gray-500 flex gap-4 mt-1">
                <span>👤 Jenny Kia</span>
                <span>📅 02 December 2022</span>
                <span>⏱ 3 Min. To Read</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{post.description.slice(0, 80)}...</p>
            </div>
          ))}

          <div className="flex gap-1 justify-start mt-2">
            <span className="w-4 h-1 rounded-full bg-teal-500"></span>
            <span className="w-2 h-1 rounded-full bg-gray-300"></span>
            <span className="w-2 h-1 rounded-full bg-gray-300"></span>
            <span className="w-2 h-1 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
