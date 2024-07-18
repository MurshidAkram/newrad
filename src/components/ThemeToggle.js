import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { IconButton } from '@mui/material';
import { Brightness6, Brightness9 } from '@mui/icons-material';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <IconButton color="inherit" onClick={toggleTheme}>
            {theme === 'light' ? <Brightness6 /> : <Brightness9 />}
        </IconButton>
    );
};
