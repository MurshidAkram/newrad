import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required';
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email is not valid';
        tempErrors.message = formData.message ? '' : 'Message is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccess('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '', subject: '' });
        }
    };

    return (
        <Container>
            <Typography variant="h2">Contact Us</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
                    {success && <Typography variant="body1" sx={{ marginTop: 2 }} color="success">{success}</Typography>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ borderLeft: '1px solid #ccc', paddingLeft: 3 }}>
                        <Typography variant="h4" gutterBottom>Contact Details</Typography>
                        <Typography variant="body1" style={{ fontSize: '1.3rem' }}>
                            <strong>Email:</strong> akramjiffry@gmail.com<br />
                            <strong>Phone:</strong> ++94 77 807 0245<br />
                            <strong>Address:</strong> 32 A, Bathiya Mawatha, Dehiwala
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactForm;
