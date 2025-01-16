import React from 'react';
import { CheckCircle, Shield, Award } from 'lucide-react';

export default function Certificates() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Certificates</h1>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Organic Certification</h3>
            <p className="text-gray-600 mb-4">
              Certified organic by the USDA National Organic Program
            </p>
            <p className="text-sm text-gray-500">Certificate #: ORG-2023-001</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fair Trade Certified</h3>
            <p className="text-gray-600 mb-4">
              Meeting international Fair Trade standards
            </p>
            <p className="text-sm text-gray-500">Certificate #: FT-2023-458</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <Award className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600 mb-4">
              ISO 22000:2018 Food Safety Management
            </p>
            <p className="text-sm text-gray-500">Certificate #: ISO-2023-789</p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Quality</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            At Paradise Coconuts, we maintain the highest standards of quality and safety. 
            Our certifications demonstrate our commitment to organic farming, fair trade practices, 
            and sustainable agriculture. We regularly undergo rigorous audits and inspections to 
            ensure compliance with international standards.
          </p>
        </div>
      </div>
    </div>
  );
}