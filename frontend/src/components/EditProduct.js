import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Snackbar, Alert, Slide } from '@mui/material';
import PropTypes from 'prop-types';

const EditProduct = ({ productId, onClose, onProductUpdate }) => {
  const [product, setProduct] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found in API, trying local storage');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product from API:', err);
        const localProduct = JSON.parse(localStorage.getItem(`product-${productId}`));
        if (localProduct) {
          setProduct(localProduct);
        } else {
          setError(true);
        }
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productToUpdate = { ...product };
    const productId = productToUpdate.id;
    delete productToUpdate.id;

    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productToUpdate),
      });

      if (!response.ok) {
        throw new Error('Failed to update product in API, updating in local storage');
      }

      const updatedProduct = await response.json();
      setSuccess(true);
      onProductUpdate(updatedProduct);
      onClose();
    } catch (err) {
      console.error('Error updating product in API:', err);
      const localProduct = JSON.parse(localStorage.getItem(`product-${productId}`));
      if (localProduct) {
        const updatedProduct = { ...localProduct, ...productToUpdate };
        localStorage.setItem(`product-${productId}`, JSON.stringify(updatedProduct));

        setSuccess(true);
        onProductUpdate(updatedProduct);
        onClose();
      } else {
        setError(true);
      }
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          required
          value={product.title || ''}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          required
          value={product.description || ''}
          onChange={handleChange}
        />
        <TextField
          label="Category"
          name="category"
          fullWidth
          margin="normal"
          required
          value={product.category || ''}
          onChange={handleChange}
        />
        <TextField
          label="Price"
          name="price"
          fullWidth
          margin="normal"
          required
          type="number"
          value={product.price || ''}
          onChange={handleChange}
        />
        <TextField
          label="Stock"
          name="stock"
          fullWidth
          margin="normal"
          required
          type="number"
          value={product.stock || ''}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Update Product
        </Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 3, ml: 2 }} onClick={onClose}>
          Cancel
        </Button>
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          <Typography variant="h6">Product Updated Successfully!</Typography>
          <Typography variant="body2">The product details have been successfully updated.</Typography>
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          Failed to update product.
        </Alert>
      </Snackbar>
    </Container>
  );
};

EditProduct.propTypes = {
  productId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onProductUpdate: PropTypes.func.isRequired,
};

export default EditProduct;
