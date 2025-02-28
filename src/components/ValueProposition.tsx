import React from 'react';
import { ShoppingBag, Award, Truck, Calendar } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Be First to Shop',
    description: "Early access to our exclusive collections before they're available to the public.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: 'Exclusive Member Rewards',
    description: 'VIP perks including special discounts, birthday gifts, and personalized styling.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Express Delivery',
    description: 'Priority shipping with complimentary expedited delivery on all orders.',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Private Shopping Events',
    description: 'Invitations to exclusive launch parties and private shopping experiences.',
    icon: Calendar,
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Luxury Experience</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Join our exclusive community and enjoy premium benefits designed for the discerning customer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;