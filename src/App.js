import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Surah from './Pages/Surah';
import Catalogue from './Pages/Catalogue';
import AdhkarPage from './Pages/adhkar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:id" element={<Surah />} />
          <Route path="/adhkar" element={<AdhkarPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
