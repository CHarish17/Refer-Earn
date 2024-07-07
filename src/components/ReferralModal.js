// src/components/ReferralModal.js
import React, { useState } from 'react';
import { Box, Modal, Typography, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/referral', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response);
      alert('Referral submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
      if (error.response) {
        setError('Error submitting referral: ' + (error.response.data.error || error.message));
      } else if (error.request) {
        setError('Error submitting referral: No response received from the server.');
      } else {
        setError('Error submitting referral: ' + error.message);
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Refer a Friend</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" name="referrerName" label="Your Name" value={formData.referrerName} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="referrerEmail" label="Your Email" value={formData.referrerEmail} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="refereeName" label="Friend's Name" value={formData.refereeName} onChange={handleChange} required />
          <TextField fullWidth margin="normal" name="refereeEmail" label="Friend's Email" value={formData.refereeEmail} onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
