
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Container, Paper } from '@mui/material';

const LatestProduct = ({ show }) => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (show) {
      const storedProducts = localStorage.getItem('newProducts');
      if (storedProducts) {
        const products = JSON.parse(storedProducts);
        
        // Ensure it's an array and contains unique elements
        const uniqueProducts = Array.isArray(products)
          ? products.map(product => ({
              ...product,
              weight: product.weight || 0,
              warrantyInformation: product.warrantyInformation || 'N/A',
              shippingInformation: product.shippingInformation || 'Standard Shipping',
              availabilityStatus: product.stock > 0 ? 'Available' : 'Out of Stock',
              returnPolicy: product.returnPolicy || '30 Days Return',
              minimumOrderQuantity: product.minimumOrderQuantity || 1,
            })).filter((item, index, self) =>
              index === self.findIndex((t) => (t.id === item.id))
            )
          : [];

        setLatestProducts(uniqueProducts); // Set as an array of unique products
        console.log(uniqueProducts); // Check the processed data
      } else {
        setLatestProducts([]); // Reset if no products found
      }
    }
  }, [show]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 110 },
    { field: 'discountPercentage', headerName: 'Discount (%)', type: 'number', width: 150 },
    { field: 'rating', headerName: 'Rating', type: 'number', width: 110 },
    { field: 'stock', headerName: 'Stock', type: 'number', width: 110 },
    { field: 'brand', headerName: 'Brand', width: 150 },
    { field: 'weight', headerName: 'Weight (kg)', type: 'number', width: 150 },
    { field: 'warrantyInformation', headerName: 'Warranty Info', width: 200 },
    { field: 'shippingInformation', headerName: 'Shipping Info', width: 200 },
    { field: 'availabilityStatus', headerName: 'Availability', width: 150 },
    { field: 'returnPolicy', headerName: 'Return Policy', width: 200 },
    { field: 'minimumOrderQuantity', headerName: 'Min Order Qty', type: 'number', width: 150 },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest Added Products
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={latestProducts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default LatestProduct;
