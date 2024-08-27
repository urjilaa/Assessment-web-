import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="md:w-1/2 flex justify-center items-center bg-white">
        <div className="p-8 text-center md:text-left">
          <img
            src="/path-to-your-logo.png"
            alt="A2SV Logo"
            className="mx-auto md:mx-0 h-12 mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to A2SV</h1>
          <p className="text-gray-600">
            Register for free to receive blogs and learn more about A2SV
          </p>
        </div>
      </div>

      <div className="md:w-1/2 bg-blue-600 flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign up</h2>
          <p className="text-gray-500 mb-8">Hey, Enter your details to sign up</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="full-name">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
