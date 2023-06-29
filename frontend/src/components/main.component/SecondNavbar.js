import React from 'react';

const SecondNavbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Home Link */}
            <a href="#" className="text-white font-semibold text-lg">Home</a>
          </div>
          <div className="flex items-center">
            {/* Customer Support Link */}
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Customer Support</a>
            {/* Search Input */}
            <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-md px-3 py-2 outline-none" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;