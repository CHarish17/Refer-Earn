// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavBar />
      <HeroSection onReferNow={handleReferNow} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
