import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [customWelcomeMessage, setCustomWelcomeMessage] = useState('');
    const [timeMessage, setTimeMessage] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        const newTimeMessage = hours < 12 ? 'Good Morning!' : hours < 15 ? 'Good Afternoon!' : hours < 18 ? 'Good Evening!' : 'Good Night!';
        setTimeMessage(newTimeMessage);
    }, []);

    const handleInputChange = (e) => {
        setCustomWelcomeMessage(e.target.value);
    };

    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: theme === 'light' ? '#e663e6' : '#e663e6',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h1" gutterBottom>
                    {customWelcomeMessage || "Welcome"}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {timeMessage}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Welcome to Our Gem and Jewellery Marketplace
                </Typography>
                <TextField
                    label="Change Welcome Text!"
                    variant="outlined"
                    value={customWelcomeMessage}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    sx={{
                        backgroundColor: theme === 'light' ? '#fff' : '#333',
                        marginBottom: 4,
                    }}
                />
            </Container>
        </Box>
    );
};

export default Home;
