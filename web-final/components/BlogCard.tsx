import React from 'react';
import Link from 'next/link'

interface BlogCardProps {
  _id:string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  avatarUrl: string;
  contentUrl?: string;
  borderColor: string; // Added to handle the border color for the card
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  author,
  date,
  title,
  description,
  tags,
  avatarUrl,
  contentUrl,
  borderColor
}) => {
  return (
    <div>
    {/* // <Link href={`/blog/${id}`}> */}
      <div
        className={`flex items-start p-4 shadow-sm rounded-md mb-6 border-gray-700`}
        style={{ borderColor }} // Apply the border color dynamically
      >
        <img src={avatarUrl} alt={author} className="w-14 h-14 rounded-full object-cover mr-4" />
        <div className="flex-1">
          <div className="flex justify-start items-start">
            <h3 className="text-lg font-bold">{author}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
            <h1>SOFTWARE ENGINEER</h1>
          <h4 className="text-xl font-bold mt-2">{title}</h4>
          <p className="text-gray-700 mt-1">{description}</p>
          <div className="flex space-x-2 mt-3">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          {contentUrl && (
            <div className="mt-4">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NDkxNzMyMjI&ixlib=rb-1.2.1&q=300&w=180" alt="Content" className="w-full h-40 bg-gray-200 object-cover rounded" />
            </div>
          )}
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NDkxNzMyMjI&ixlib=rb-1.2.1&q=300&w=180"
            alt="Description of image"
            style={{ width: '300px', height: '200px' }}
            />
        </div>
      </div>
    </div>
    // <Link/>
  );
};

export default BlogCard;

