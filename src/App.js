import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import ProductTable from './Components/ProductTable/ProductTable';
import ComparePage from './Components/ComparePage/ComparePage';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductTable />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
