// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Home Page!</h2>
      <p className="text-gray-700">This is the main landing page of our awesome application.</p>
    </div>
  );
};

export default HomePage;