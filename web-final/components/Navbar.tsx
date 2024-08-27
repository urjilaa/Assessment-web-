import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold text-black">A2SV</h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-600 hover:text-black">Home
          </Link>
          <Link href="/teams" className="text-gray-600 hover:text-black">Teams
          </Link>
          <Link href="/success-stories" className="text-gray-600 hover:text-black">Success Stories
          </Link>
          <Link href="/about-us" className="text-gray-600 hover:text-black">About Us
          </Link>
          <Link href="/blogs" className="text-gray-600 hover:text-black">Blogs
          </Link>
          <Link href="/get-involved" className="text-gray-600 hover:text-black">Get Involved
          </Link>
        </div>

        {/* Login and Donate Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-gray-600 hover:text-black">Login
          </Link>
          <Link href="/donate">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
