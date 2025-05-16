import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import './styles/global.css';
import './styles/variables.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
         <Navbar />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
