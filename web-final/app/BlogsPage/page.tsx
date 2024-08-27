"use client"; // Add this directive at the very top of the file

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { fetchBlogs } from "@/services/blogServise";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Blog {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  avatarUrl: string;
  contentUrl?: string;
  borderColor: string;
}

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data));
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='bg-white'>
        <div className='py-6'>
            <Navbar />
        </div>
      <div className="flex px-3 justify-center items-center mb-6 bg-white">
        <input
          type="text"
          className="p-2 px-3 border justify-center border-gray-300 rounded-md w-1/3"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          + New Blog
        </button>
      </div>
        <h1 className="text-2xl font-bold mb-4 ml-14">Blogs</h1>
      
      <div className="container mx-auto p-4 bg-white">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard
                author={blog.author}
                date={blog.date}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
                avatarUrl={blog.avatarUrl}
                contentUrl={blog.contentUrl}
                borderColor={blog.borderColor}
                _id={""}
              />
            </Link>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 mx-1 border rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
