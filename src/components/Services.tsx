import React from 'react';
import ServiceCard from './ServiceCard';
import { Shield, Code, Network, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Application Security',
      description: 'Comprehensive security testing and vulnerability management for your applications.',
      Icon: Code
    },
    {
      title: 'Security Architecture',
      description: 'Expert review and design of secure system architectures.',
      Icon: Shield
    },
    {
      title: 'AI Security',
      description: 'Advanced security solutions for AI/ML systems and LLM applications.',
      Icon: Brain
    },
    {
      title: 'Network Security',
      description: 'Robust protection for your network infrastructure and cloud systems.',
      Icon: Network
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Security Services That Deliver True Value
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Protecting your digital assets with cutting-edge security solutions
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;