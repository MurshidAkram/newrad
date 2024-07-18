import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    '&.active': {
        color: '#e663e6',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: '0 50px',
    padding: '25px 50px',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&.active': {
        color: '#e663e6'
    }
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: '60px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    borderRadius: theme.shape.borderRadius,
    marginTop: '120px', 
}));

const NavContainer = styled('nav')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
}));

const AboutLayout = () => {
    return (
        <StyledContainer>
            <Typography variant="h3" gutterBottom>About Us</Typography>
            <NavContainer>
                <StyledNavLink to="history">
                    <StyledButton variant="contained">Our History</StyledButton>
                </StyledNavLink>
                <StyledNavLink to="team">
                    <StyledButton variant="contained">Our Team</StyledButton>
                </StyledNavLink>
                <StyledNavLink to="values">
                    <StyledButton variant="contained">Our Values</StyledButton>
                </StyledNavLink>
            </NavContainer>
            <Outlet />
        </StyledContainer>
    );
};

export default AboutLayout;
