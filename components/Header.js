import React from 'react';

function Header() {
  return (
    <div>
      <nav className="py-12 flex justify-between">
        <div className="flex flex-row justify-center">
          <img width="30" height="30" src="/logo.png" alt="logo" />

          <h1 className="px-2 text-xl text-center my-auto uppercase font-bold text-shadow-white">
            Hotflux
          </h1>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <div className="flex flex-row justify-center my-auto space-x-4">
            <a href="/" className="px-2">
              Product
            </a>
            <a href="/" className="px-2">
              Features
            </a>
            <a href="/" className="px-2">
              About
            </a>
            <a href="/" className="px-2">
              Contact
            </a>
          </div>
          <div className="flex flex-row justify-center items-center my-auto space-x-4">
            <a href="/" className="px-2">
              Login
            </a>
            <div className="w-0.5 h-6 bg-gray-700 opacity-50" />
            <a href="/" className="px-6 py-2 bg-brand-white10 rounded-full">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
