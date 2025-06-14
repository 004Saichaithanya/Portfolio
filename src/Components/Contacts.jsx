import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:004polojusaichaithanya@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;

    window.location.href = mailtoLink;
    toast.success('Mail client opened!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ color: '#64ffda', mb: 2 }}>Contact Me</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          sx={{ input: { color: '#ccd6f6' } }}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          sx={{ input: { color: '#ccd6f6' } }}
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={formData.message}
          onChange={handleChange}
          sx={{ textarea: { color: '#ccd6f6' } }}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'start' }}>
          Send
        </Button>
      </Box>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </Box>
  );
}
