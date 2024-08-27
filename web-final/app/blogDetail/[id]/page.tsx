'use client'
import React, { useState, useEffect } from 'react';

interface Job {
  socialMedia: {
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  _id: string;
  name: string;
  bio: string;
  department: string;
  __v: number;
  responsibilities: string[];
}

const App: React.FC<{ _id: string }> = ({ _id }) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`https://a2sv-backend.onrender.com/api/members/${_id}`);
        if (!res.ok) {
          const errorText = await res.text();
          console.error('Error response:', errorText);
          setError("An error occurred while fetching the job details.");
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (data && data.data) {
          data.data.responsibilities = data.data.responsibilities.split('\n');
          setJob(data.data);
        } else {
          setError("No job data found.");
          throw new Error("No job data found.");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!job) {
    return <p>No job data available</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">The Essential Guide to Competitive Programming</h1>
      <div className="mt-4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold">{job.name}</h2>
        <p className="text-lg">{job.bio}</p>
        <p className="text-lg">Department: {job.department}</p>
        <div className="mt-4">
          <p>Social Media:</p>
          <ul className="list-disc list-inside">
            {Object.entries(job.socialMedia).map(([key, value]) => (
              <li key={key}>
                <a href={value} className="text-blue-500 underline" target="_blank" rel="noreferrer">
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

// // app/blogDetail/[id]/page.tsx
// import Image from 'next/image';
// import Navbar from '@/components/Navbar';
// import { fetchBlogDetail, fetchAuthor } from '@/services/detailServise';
// import { BlogAuthor, Blog } from '@/types';

// interface Props {
//   params: {
//     id: string;
//   };
// }

// const BlogDetail = async ({ params: { id } }: Props) => {
//   try {
//     const blog: Blog = await fetchBlogDetail(id);
//     const authors: BlogAuthor[] = await fetchAuthor();

//     const author = authors.find((author) => author._id === blog.authorId) || null;

//     return (
//       <div className="bg-gray-50 min-h-screen">
//         <Navbar />
//         <main className="container mx-auto p-6">
//           <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
//           <p className="text-center text-gray-600 mb-6">{blog.date} | {blog.tags.join(', ')}</p>

//           <div className="relative w-full h-64 mb-6">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>

//           {author && (
//             <div className="flex items-center justify-center mb-6">
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src="/author.jpg" // Replace with the author's image if available
//                   alt="Author"
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="font-bold">{author.name}</p>
//                   <p className="text-gray-600">{author.department}</p>
//                   <p className="text-gray-600">{author.bio}</p>
//                   <div className="space-x-4 mt-2">
//                     {author.socialMedia.linkedin && (
//                       <a href={`https://${author.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
//                     )}
//                     {author.socialMedia.facebook && (
//                       <a href={`https://${author.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
//                     )}
//                     {author.socialMedia.instagram && (
//                       <a href={`https://${author.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="prose max-w-none mx-auto">
//             <p>{blog.description}</p>
//           </div>
//         </main>
//       </div>
//     );
//   } catch (error) {
//     console.error(error);
//     return <p>Error: Failed to fetch data</p>;
//   }
// };

// export default BlogDetail;
