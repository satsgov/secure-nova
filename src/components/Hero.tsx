import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt="Cybersecurity Background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">We are a Next-Generation</span>
            <span className="block text-blue-500">Cybersecurity Firm</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Trusted by over 2500+ organizations since 1984
          </p>
          <div className="mt-10">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;