import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import History from './components/History';
import Team from './components/Team';
import Values from './components/Values';
import AboutLayout from './components/AboutLayout';

const App = () => {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ebb9eb',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#222831',
        paper: '#ebb9eb',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
      },
    },
  });

  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route path="history" element={<History />} />
            <Route path="team" element={<Team />} />
            <Route path="values" element={<Values />} />
          </Route>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
