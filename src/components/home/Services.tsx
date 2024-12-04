import React from 'react';
import { Shield, Code, Network, Brain } from 'lucide-react';
import Container from '../layout/Container';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Application Security',
      description: 'Comprehensive security testing and vulnerability management.',
      Icon: Code,
      features: [
        'Source Code Review',
        'API Security Testing',
        'Vulnerability Management',
        'Pentesting Services'
      ]
    },
    {
      title: 'Security Architecture',
      description: 'Expert review and design of secure system architectures.',
      Icon: Shield,
      features: [
        'Architecture Review',
        'Security Design',
        'Compliance Assessment',
        'Best Practices Implementation'
      ]
    },
    {
      title: 'AI Security',
      description: 'Advanced security solutions for AI/ML systems.',
      Icon: Brain,
      features: [
        'LLM Security',
        'AI Model Security',
        'Threat Modeling',
        'Data Privacy Compliance'
      ]
    },
    {
      title: 'Network Security',
      description: 'Robust protection for your infrastructure.',
      Icon: Network,
      features: [
        'Firewall Configuration',
        'IDS/IPS Systems',
        'DDoS Protection',
        'Cloud Security'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#0C0D0E]">
            Security Services That Deliver True Value
          </h2>
          <p className="mt-4 text-lg text-[#667085] max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets
            and infrastructure
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;