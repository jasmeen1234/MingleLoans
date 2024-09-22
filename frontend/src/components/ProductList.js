import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Container, Paper, Button } from '@mui/material';

const ProductList = ({ onEditProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=200');
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  const handleProductUpdate = (updatedProduct) => {
    // Update the local product list after an edit
    setProducts((prevProducts) => 
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 110 },
    {
      field: 'thumbnail',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => (
        <img src={params.value} alt={params.row.title} style={{ width: 50 }} />
      ),
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 120,
      renderCell: (params) => (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onEditProduct(params.row.id, handleProductUpdate)} // Pass update handler
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product List
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductList;
