import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, features, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FIF2F4]">
        <Icon className="h-6 w-6 text-[#0C0D0E]" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#0C0D0E]">{title}</h3>
      <p className="mt-2 text-[#667085]">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-[#667085]">
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;