import React from 'react';
import { Box, TextField, Button, Typography, Container, CssBaseline, Avatar, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.get('email'),
        password: data.get('password'),
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then(res => res.json())
      .then((user) => {
        setUser({
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          profileImage: user.image,
          token: user.accessToken,
          refreshToken: user.refreshToken,
        });
        navigate("/dashboard");
      });
  };

  return (
    <Box
  sx={{
    minHeight: '90vh',
    minWidth: '100vw',
    backgroundImage: 'url("/backgroundImage.png"), linear-gradient(45deg, #FF6F61, #6FA3EF, #6EBB5B)', // Combining image and gradient
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundImage: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: 1.5,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: '16px',
                '&:hover': {
                  backgroundImage: 'linear-gradient(90deg, #5a67d8 0%, #6b46c1 100%)',
                },
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;