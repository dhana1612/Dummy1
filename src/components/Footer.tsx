import React from 'react';
import { Facebook, Instagram, Twitter, Palmtree } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Palmtree className="h-8 w-8" />
              <span className="font-bold text-xl">Paradise Coconuts</span>
            </div>
            <p className="text-green-200">
              Sustainable coconut farming with love and care for nature.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-200">Home</a></li>
              <li><a href="/about" className="hover:text-green-200">About Us</a></li>
              <li><a href="/certificates" className="hover:text-green-200">Certificates</a></li>
              <li><a href="/contact" className="hover:text-green-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-green-200">
              <li>123 Coconut Grove</li>
              <li>Tropical Paradise, TP 12345</li>
              <li>(123) 456-7890</li>
              <li>info@paradisecoconuts.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Paradise Coconuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}