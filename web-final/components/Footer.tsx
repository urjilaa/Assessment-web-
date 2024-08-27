import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 mt-12 border-t border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-row items-center space-x-2">
              <div className="px-3">
                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NDkxNzMyMjI&ixlib=rb-1.2.1&q=300&w=180" alt="Logo" className="w-52 h-40" />
            </div>
              <div className="text-gray-800 flex flex-col font-semibold">
                Get involved in improving tech education in Africa!
                <button className="mt-4 item bg-blue-600 text-white px-4 py-2 w-36 rounded-md hover:bg-blue-700">
                Support Us
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h4 className="text-gray-800 font-semibold py-3 mb-2">Links</h4>
              <ul className="text-gray-600 py-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/success-stories">Success Stories</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/get-involved">Get Involved</Link></li>
              </ul>
            </div>
            <div className="px-6">
              <h4 className="text-gray-800 font-semibold py-3 mb-2">Teams</h4>
              <ul className="text-gray-600 py-2">
                <li><Link href="/board-members">Board Members</Link></li>
                <li><Link href="/advisors">Advisors/Mentors</Link></li>
                <li><Link href="/executives">Executives</Link></li>
                <li><Link href="/staff">Staffs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 py-3 font-semibold mb-2">Blogs</h4>
              <ul className="text-gray-600 py-2">
                <li><Link href="/blogs/recent">Recent Blogs</Link></li>
                <li><Link href="/blogs/new">New Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <p className="text-gray-600">
            © 2020 Africa to Silicon Valley, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com"><img src="/path-to-icon/twitter.png" alt="Twitter" className="w-6 h-6" /></Link>
            <Link href="https://facebook.com"><img src="/path-to-icon/facebook.png" alt="Facebook" className="w-6 h-6" /></Link>
            <Link href="https://instagram.com"><img src="/path-to-icon/instagram.png" alt="Instagram" className="w-6 h-6" /></Link>
            <Link href="https://youtube.com"><img src="/path-to-icon/youtube.png" alt="YouTube" className="w-6 h-6" /></Link>
            <Link href="https://linkedin.com"><img src="/path-to-icon/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
