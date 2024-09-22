import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Snackbar, Alert } from '@mui/material';

let intial={

  title: '',
  description: '',
  category: '',
  price: '',
  discountPercentage: '',
  rating: '',
  stock: '',
  brand: '',
  weight: '',
  warrantyInformation: '',
  shippingInformation: '',
  availabilityStatus: '',
  returnPolicy: '',
  minimumOrderQuantity: '',
}

const AddProduct = () => {
  const [product, setProduct] = useState(intial);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...product,
      reviews: [
        {
          rating: 2,
          comment: 'Very unhappy with my purchase!',
          date: '2024-05-23T08:56:21.618Z',
          reviewerName: 'John Doe',
          reviewerEmail: 'john.doe@x.dummyjson.com',
        },
      ],
    };

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        setSuccess(true);

        // Get existing products from local storage
        const existingProducts = JSON.parse(localStorage.getItem('newProducts')) || [];
        existingProducts.push(data); // Add the new product to the array
        localStorage.setItem('newProducts', JSON.stringify(existingProducts)); // Update local storage
        setProduct(intial)
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        setError(true);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          required
          value={product.title}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          required
          value={product.description}
          onChange={handleChange}
        />
        <TextField
          label="Category"
          name="category"
          fullWidth
          margin="normal"
          required
          value={product.category}
          onChange={handleChange}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.price}
          onChange={handleChange}
        />
        <TextField
          label="Discount Percentage"
          name="discountPercentage"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.discountPercentage}
          onChange={handleChange}
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.rating}
          onChange={handleChange}
        />
        <TextField
          label="Stock"
          name="stock"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.stock}
          onChange={handleChange}
        />
        <TextField
          label="Brand"
          name="brand"
          fullWidth
          margin="normal"
          required
          value={product.brand}
          onChange={handleChange}
        />
        <TextField
          label="Weight"
          name="weight"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.weight}
          onChange={handleChange}
        />
        <TextField
          label="Warranty Information"
          name="warrantyInformation"
          fullWidth
          margin="normal"
          required
          value={product.warrantyInformation}
          onChange={handleChange}
        />
        <TextField
          label="Shipping Information"
          name="shippingInformation"
          fullWidth
          margin="normal"
          required
          value={product.shippingInformation}
          onChange={handleChange}
        />
        <TextField
          label="Availability Status"
          name="availabilityStatus"
          fullWidth
          margin="normal"
          required
          value={product.availabilityStatus}
          onChange={handleChange}
        />
        <TextField
          label="Return Policy"
          name="returnPolicy"
          fullWidth
          margin="normal"
          required
          value={product.returnPolicy}
          onChange={handleChange}
        />
        <TextField
          label="Minimum Order Quantity"
          name="minimumOrderQuantity"
          type="number"
          fullWidth
          margin="normal"
          required
          value={product.minimumOrderQuantity}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Add Product
        </Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Product added successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
          Failed to add product.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProduct;