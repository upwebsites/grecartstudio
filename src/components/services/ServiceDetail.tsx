import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  benefits,
  imageUrl,
  reverse = false
}) => {
  return (
    <div className="py-16 border-b border-neutral-200 last:border-b-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className={reverse ? 'order-1 lg:order-2' : 'order-1'}>
          <h3 className="text-3xl font-semibold text-primary-800 mb-6">{title}</h3>
          <p className="text-neutral-600 mb-8">{description}</p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 p-1 rounded-full bg-accent-100 text-accent-600">
                  <Check size={16} />
                </div>
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
          
          <Link to="/contatti" className="btn btn-primary">
            Richiedi un preventivo
          </Link>
        </div>
        
        <div className={reverse ? 'order-2 lg:order-1' : 'order-2'}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto rounded-lg shadow-custom"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;