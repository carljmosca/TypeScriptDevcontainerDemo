// src/pages/HomePage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the About Page!</h2>
      <p className="text-gray-700">About our awesome application.</p>
    </div>
  );
};

export default AboutPage;