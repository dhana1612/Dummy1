import React from 'react';
import { Leaf, Droplets, Sun } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Paradise Coconuts</h1>
            <p className="text-xl md:text-2xl mb-8">Sustainable farming for nature's perfect fruit</p>
            <a 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Our Coconuts?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">100% Organic</h3>
              <p className="text-gray-600">Grown naturally without any harmful chemicals or pesticides</p>
            </div>
            
            <div className="text-center p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sustainably Farmed</h3>
              <p className="text-gray-600">Using responsible farming practices that protect our environment</p>
            </div>
            
            <div className="text-center p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fresh & Natural</h3>
              <p className="text-gray-600">Harvested at peak ripeness for the best taste and quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550679560-1f6f7f739956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh Coconuts" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Fresh Coconuts</h3>
                <p className="text-gray-600">Hand-picked young coconuts perfect for drinking, packed with essential nutrients and natural electrolytes.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coconut Oil" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Coconut Oil</h3>
                <p className="text-gray-600">Pure, cold-pressed virgin coconut oil made from mature coconuts, perfect for cooking and skincare.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coconut Water" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Coconut Water</h3>
                <p className="text-gray-600">Refreshing and natural coconut water, bottled fresh from young green coconuts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Farm Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coconut Farm" 
              className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coconut Palms" 
              className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1622208489373-be8706a57e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coconut Processing" 
              className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1551383616-53e0d76b7938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Fresh Coconuts" 
              className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}