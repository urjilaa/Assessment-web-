// src/pages/SignIn.tsx
import React from 'react';

const SignIn: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Left side */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <img src="/avatar.png" alt="Avatar" className="w-48 mb-8" />
                <h1 className="text-4xl font-bold">Welcome Back</h1>
                <p className="mt-4 text-gray-600">Login to receive blogs and learn more about A2SV</p>
            </div>

            {/* Right side */}
            <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10">
                <div className="bg-white rounded-lg p-8 w-96">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                    <p className="text-gray-600 mb-6">Hey, enter your details to sign in to your account</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="Email address" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="Password" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
                <p className="mt-4 text-white">
                    Don't have an account? <a href="#" className="text-yellow-400">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
