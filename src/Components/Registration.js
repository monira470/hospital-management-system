import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    let formValid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!name) {
      formValid = false;
      newErrors.name = 'Name is required';
    }

    if (!email) {
      formValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formValid = false;
      newErrors.email = 'Enter a valid email address';
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
      alert('Registration successful');
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
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
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
          Register
        </Button>
      </form>
    </Box>
  );
};
