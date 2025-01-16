import React from 'react';
import { Palmtree, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Palmtree className="h-8 w-8" />
            <span className="font-bold text-xl">Paradise Coconuts</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`hover:text-green-200 transition ${isActive('/') ? 'text-green-200' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-green-200 transition ${isActive('/about') ? 'text-green-200' : ''}`}>
              About Us
            </Link>
            <Link to="/certificates" className={`hover:text-green-200 transition ${isActive('/certificates') ? 'text-green-200' : ''}`}>
              Certificates
            </Link>
            <Link to="/contact" className={`hover:text-green-200 transition ${isActive('/contact') ? 'text-green-200' : ''}`}>
              Contact
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-green-200">
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@paradisecoconuts.com" className="flex items-center space-x-1 hover:text-green-200">
              <Mail className="h-4 w-4" />
              <span>info@paradisecoconuts.com</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}