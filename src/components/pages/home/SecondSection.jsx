import React, { useEffect, useState } from 'react';
import { FaUser, FaClock, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const SecondSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=3')
      .then(res => res.json())
      .then(data => setPosts(data.products));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold">
          <span className="text-teal-500">Recently</span> Posted
        </h2>
        <div className="mt-6 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="flex gap-4">
              <div className="w-32 h-24 bg-gray-300 rounded" />
              <div>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded">Travel</span>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <div className="text-sm text-gray-500 flex gap-4 mt-1">
                  <span><FaUser className="inline" /> Jenny Kia</span>
                  <span>02 December 2022</span>
                  <span><FaClock className="inline" /> 3 Min. To Read</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold">
            <span className="bg-teal-500 text-white px-2 py-1 rounded">Top</span> Authors
          </h2>
          <div className="mt-4 space-y-6">
            {['Jenny Kia', 'Andreas Rasel', 'Jenny Kia'].map((name, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-xs text-gray-500">Fashion Designer, Blogger, Activist</p>
                  <div className="flex gap-2 text-teal-600 mt-1">
                    <FaTwitter /><FaFacebook /><FaInstagram />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-600 text-white p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Want To Travel Sikkim By Car?</h3>
          <p className="text-sm mb-3">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
          <button className="bg-white text-teal-600 px-4 py-1 rounded">Visit Us</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
