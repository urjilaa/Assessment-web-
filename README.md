## Blog Page
This project is a React-based web application that displays detailed information about a blog, including the author's name, biography, department, and social media links. The blog data is fetched from a remote API, and the page is designed to be responsive and user-friendly.

## Clone the repository:

bash
Copy code
git clone https://github.com/your-username/blog-page.git
cd blog-page
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be running at http://localhost:3000.

Usage
To use the blog page, you need to provide the _id of the blog you want to display. You can pass this _id as a prop to the App component.
## signin page
![Screenshot (119)](https://github.com/user-attachments/assets/ec4c06fa-482e-461d-a54d-f3df8b79433a)
## signup page 
![Screenshot (118)](https://github.com/user-attachments/assets/6ec91718-e869-4010-9545-7f565a3b9d91)
## Detail page 
![Screenshot (124)](https://github.com/user-attachments/assets/ec2290e3-4a11-4c7c-a304-34360f9eb9cd)

tsx
Copy code
<App _id="YOUR_BLOG_ID" />
Replace YOUR_BLOG_ID with the actual ID of the blog from the backend.


Dependencies
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
TypeScript: A statically typed superset of JavaScript.
