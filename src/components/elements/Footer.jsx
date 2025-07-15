import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-teal-600">Note<span className="text-black">Book.</span></h2>
          <p className="text-sm mt-2">Did you come here for something in particular or just general Riker</p>
        </div>

        {/* Blogs */}
        <div>
          <h3 className="font-semibold mb-2">Blogs</h3>
          <ul className="text-sm space-y-1">
            <li>Travel</li>
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Fashion</li>
            <li>Business</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe For Newsletter</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none"
            />
            <button className="bg-teal-500 text-white px-4 rounded-r-md">Subscribe</button>
          </div>
          <h3 className="font-semibold mb-2">Follow On:</h3>
          <div className="flex space-x-3 text-lg">
            <FaTwitter className="hover:text-teal-500" />
            <FaFacebookF className="hover:text-teal-500" />
            <FaInstagram className="hover:text-teal-500" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t pt-4">
        Designed by Themefisher & Developed by Gethugothemes
      </div>
    </footer>
  );
};

export default Footer;
