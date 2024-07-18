import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import mysitelogo from '../mysitelogo.png';

const StyledAppBar = styled(AppBar)(({ customTheme }) => ({
    backgroundColor: customTheme === 'light' ? '#e0bfe0' : '#222831',
    color: customTheme === 'light' ? '#000' : '#fff',
}));

const StyledButton = styled(Button)(({ customTheme }) => ({
    color: customTheme === 'light' ? '#0faab8' : '#0faab8',
    fontSize: '18px',
    fontFamily: 'arial',
    padding: '30px 30px',
    '&:hover': {
        backgroundColor: customTheme === 'light' ? '#f8fae3' : '#f8fae3',
    },
}));

const StyledLink = styled(NavLink)(({ customTheme }) => ({
    color: customTheme === 'light' ? '#000' : '#fff',
    textDecoration: 'none',
    fontSize: '40px',
    fontFamily: 'arial',
    marginRight: 'auto',
}));

const TimerBox = styled(Box)(({ customTheme }) => ({
    backgroundColor: customTheme === 'light' ? '#f0f0f0' : '#333',
    color: customTheme === 'light' ? '#333' : '#f0f0f0',
    padding: '10px 20px',
    borderRadius: '5px',
    marginRight: '20px',
}));

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledAppBar position="static" customTheme={theme}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                    <StyledLink to="/" customTheme={theme}>
                        <img src={mysitelogo} alt="Logo" style={{ height: '100px' }} />
                    </StyledLink>
                </Box>
                <TimerBox customTheme={theme}>
                    <Typography variant="h6">
                        {currentTime.toLocaleTimeString()}
                    </Typography>
                </TimerBox>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StyledButton customTheme={theme} component={NavLink} to="/" exact>
                        Home
                    </StyledButton>
                    <StyledButton customTheme={theme} component={NavLink} to="/about" exact>
                        About
                    </StyledButton>
                    <StyledButton customTheme={theme} component={NavLink} to="/contact" exact>
                        Contact Us
                    </StyledButton>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme === 'light' ? <NightsStayIcon /> : <WbSunnyIcon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default NavBar;

