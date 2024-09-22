import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Sample UI</h1>
      <div className="text-lg mb-8">
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Login
      </Link>
    </div>
  );
};

export default Home;
