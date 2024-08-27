// types/index.ts
export type SocialMedia = {
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  
  export type BlogAuthor = {
    _id: string;
    name: string;
    bio: string;
    department: string;
    socialMedia: SocialMedia;
  };
  
  export type Blog = {
    _id: string;
    image: string;
    title: string;
    description: string;
    authorId: string;
    date: string;
    tags: string[];
  };
  