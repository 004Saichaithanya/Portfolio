import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_rx6c6nj',        // Replace with your actual EmailJS service ID
      'template_b0l2f0f',       // Replace with your template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'tEWwXZj6qCogWrUfE'            // Replace with your EmailJS user/public key
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      toast.error('Failed to send: ' + error.text);
    });
  };

  return (
    <Box id="Contact" sx={{ mt: { xs: 6, md: 10 }, px: { xs: 1, md: 8 }, py: { xs: 3, md: 6 } }}>
      <Typography variant="h4" sx={{
        color: '#64ffda',
        mb: 3,
        textAlign: 'center',
        fontFamily: 'Fira Code',
        letterSpacing: 2,
      }}>
        Contact Me
      </Typography>
      <Paper elevation={7} sx={{
        background: "linear-gradient(135deg,#112240 60%,#233554 100%)",
        borderRadius: 4,
        boxShadow: "0 4px 32px 0 rgba(100,255,218,.10)",
        p: { xs: 2, md: 4 },
        maxWidth: 600,
        margin: "0 auto"
      }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              input: { color: '#ccd6f6', fontFamily: 'Fira Code' },
              '& label': { color: '#64ffda' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#233554' },
                '&:hover fieldset': { borderColor: '#64ffda' },
                '&.Mui-focused fieldset': { borderColor: '#64ffda' }
              }
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              input: { color: '#ccd6f6', fontFamily: 'Fira Code' },
              '& label': { color: '#64ffda' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#233554' },
                '&:hover fieldset': { borderColor: '#64ffda' },
                '&.Mui-focused fieldset': { borderColor: '#64ffda' }
              }
            }}
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
            required
            sx={{
              textarea: { color: '#ccd6f6', fontFamily: 'Fira Code' },
              '& label': { color: '#64ffda' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#233554' },
                '&:hover fieldset': { borderColor: '#64ffda' },
                '&.Mui-focused fieldset': { borderColor: '#64ffda' }
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              alignSelf: 'flex-start',
              backgroundColor: '#64ffda',
              color: '#0a192f',
              fontFamily: 'Fira Code',
              fontWeight: 700,
              letterSpacing: 1,
              px: 3,
              boxShadow: '0 2px 8px #64ffda30',
              textTransform: "uppercase",
              borderRadius: 2,
              transition: "all .18s",
              "&:hover": {
                backgroundColor: "#112240",
                color: "#64ffda",
                boxShadow: '0 0 12px #64ffda80'
              }
            }}
          >
            Send
          </Button>
        </Box>
      </Paper>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Box>
  );
}
