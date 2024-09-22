import React, { useState } from 'react';

const AddProduct = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const productData = {
    title: 'Dell Laptop',
    description: 'Dell I7, 1TB Office Laptop',
    category: 'laptops',
    price: 1200.99,
    discountPercentage: 2.17,
    rating: 4.94,
    stock: 5,
    brand: 'Dell',
    weight: 5,
    warrantyInformation: '1 month warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'Low Stock',
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
        reviewerEmail: 'john.doe@x.dummyjson.com',
      },
    ],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 24,
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();
      if (response.ok) {
        // Store the newly added product in local storage
        localStorage.setItem('newProduct', JSON.stringify(data));
        setSuccessMessage('Product added successfully!');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-96 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <button
        onClick={handleAddProduct}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add Product
      </button>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
};

export default AddProduct;
