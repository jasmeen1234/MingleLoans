import React from "react";
import AddProduct from "./AddProduct";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">
        Welcome to the Dashboard!
      </h1>
      <AddProduct/>
    </div>
  );
};

export default Dashboard;
