import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544980919-e17b693c7b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Meet John Paradise</h2>
            <p className="text-gray-600 mb-4">
              For three generations, our family has been cultivating coconuts with passion and dedication. 
              It all started in 1970 when my grandfather planted the first coconut tree on our land.
            </p>
            <p className="text-gray-600 mb-4">
              Today, Paradise Coconuts spans over 100 acres of pristine tropical landscape, 
              where we maintain the same commitment to quality and sustainability that my grandfather instilled in us.
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="John Paradise" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">John Paradise</p>
                <p className="text-gray-600">Owner & Chief Farmer</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coconut Farm" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on the quality of our products</p>
            </div>
            
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600">Supporting local communities through sustainable farming</p>
            </div>
            
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Environmental Care</h3>
              <p className="text-gray-600">Protecting and preserving our natural resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}