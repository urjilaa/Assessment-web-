import React from 'react';
import BlogsPage from './BlogsPage/page';
// import Link from 'next/link'

const App: React.FC = () => {
  return (
    <div>
      {/* <Link href={'/'}> */}
        <BlogsPage />
        {/* <h1>Main Page</h1> */}
      {/* </Link> */}
    </div>
  );
};

export default App;
