export interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: string | null;
    date: string;
    tags: string[];
  }
  
  export const fetchBlogs = async (): Promise<Blog[]> => {
    const response = await fetch('https://a2sv-backend.onrender.com/api/blogs');
    console.log("check:", response)
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    const data = await response.json();
    
    // Transform the data to match the Blog interface
    const blogs: Blog[] = data.map((blog: any) => ({
      _id: blog._id,
      image: blog.image,
      title: blog.title,
      description: blog.description,
      author: blog.author ? blog.author.name : "Yididiya Kebede", 
      date: new Date(blog.createdAt).toLocaleDateString(), // Format the date
      tags: blog.tags,
    }));
  
    return blogs;
  };
  


// export interface Blog {
//     id: number;
//     author: string;
//     date: string;
//     title: string;
//     description: string;
//     tags: string[];
//   }
  
//   export const fetchBlogs = async (): Promise<Blog[]> => {
//     const response = await fetch('https://a2sv-backend.onrender.com/api/blogs');
//     console.log(response)
//     if (!response.ok) {
//       throw new Error('Failed to fetch blogs');
//     }
//     const data: Blog[] = await response.json();
//     return data;
//   };
  