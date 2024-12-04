import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 bg-[#FIF2F4]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-semibold text-[#0C0D0E] leading-tight">
            We are a Next-Generation Cybersecurity Firm
          </h1>
          <p className="mt-6 text-xl text-[#667085]">
            Trusted by many organizations
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-[#0C0D0E] text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {['20+', '4K+', '99%', '24/7'].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-semibold text-[#0C0D0E]">{stat}</div>
                <div className="mt-2 text-sm text-[#667085]">
                  {index === 0 && 'Global Clients'}
                  {index === 1 && 'Daily Transactions'}
                  {index === 2 && 'Success Rate'}
                  {index === 3 && 'Support'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;