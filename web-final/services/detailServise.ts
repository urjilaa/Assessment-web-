const fetchBlogs = async () => {
  try {
    const response = await fetch('https://a2sv-backend.onrender.com/api/members');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export default fetchBlogs;


// // services/detailServices.ts
// export type SocialMedia = {
//   linkedin: string;
//   facebook: string;
//   instagram: string;
// };

// export type BlogAuthor = {
//   _id: string;
//   name: string;
//   bio: string;
//   department: string;
//   socialMedia: SocialMedia;
// };

// export type Blog = {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   authorId: string;
//   date: string;
//   tags: string[];
// };

// export const fetchBlogDetail = async (id: string): Promise<Blog> => {
//   const response = await fetch(`https://a2sv-backend.onrender.com/api/members/${id}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch blog details');
//   }
//   const data: Blog = await response.json();
//   return data;
// };

// export const fetchAuthor = async (): Promise<BlogAuthor[]> => {
//   const response = await fetch('https://a2sv-backend.onrender.com/api/authors');
//   if (!response.ok) {
//     throw new Error('Failed to fetch author data');
//   }
//   const data: BlogAuthor[] = await response.json();
//   return data;
// };


// // export type SocialMedia = {
// //     linkedin: string;
// //     facebook: string;
// //     instagram: string;
// //   };
  
// //   export type BlogAuthor = {
// //     _id: string;
// //     name: string;
// //     bio: string;
// //     department: string;
// //     socialMedia: SocialMedia;
// //   };
  
// //   export const fetchAuthor = async (): Promise<BlogAuthor[]> => {
// //     const response = await fetch('https://a2sv-backend.onrender.com/api/members');
// //     if (!response.ok) {
// //       throw new Error('Failed to fetch author data');
// //     }
// //     const data: BlogAuthor[] = await response.json();
// //     return data;
// //   };
  