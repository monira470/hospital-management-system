import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    let formValid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      formValid = false;
      newErrors.email = 'Email is required';
    }

    if (!password) {
      formValid = false;
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formValid = false;
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (formValid) {
      // Submit form
      alert('Form submitted');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

