import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';

const ReportPage = ({ onViewExistingProducts, handleViewLatestProducts }) => {
  const [latestProductsCount, setLatestProductsCount] = useState(0);
  const [existingProductsCount, setExistingProductsCount] = useState(0);

  useEffect(() => {
    // Fetch all new products added to localStorage
    const newProducts = JSON.parse(localStorage.getItem('newProducts')) || [];
    setLatestProductsCount(newProducts.length); // Count the number of products

    // Fetch existing products from API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const totalExistingCount = data.total; // Total count from API
        const localStorageCount = newProducts.length; // Count from local storage
        console.log(totalExistingCount)
        setExistingProductsCount(totalExistingCount + localStorageCount); // Combine counts
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product Report
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Card for Latest Products Count */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Latest Products Count
              </Typography>
              <Typography variant="h6" color="primary">
                {latestProductsCount}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={handleViewLatestProducts}
              >
                View Latest Products
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Existing Products Count */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Existing Products Count
              </Typography>
              <Typography variant="h6" color="secondary">
                {existingProductsCount}
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ mt: 2 }}
                onClick={onViewExistingProducts}  // Trigger the handler passed from DashboardPage
              >
                View Existing Products
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportPage;