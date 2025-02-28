import { useState } from 'react';
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

const Navbar = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xl cursor-default" onClick={() => window.scrollTo(0, 0)}>FOOTWEAR</h1>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
          <button
            onClick={() => setShowLocationModal(true)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="Locations"
          >
            <MapPin size={16} />
          </button>
        </div>
      </div>

      {/* Location Modal - Full Screen */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto">
          <div className="min-h-screen w-full p-4 md:p-8 animate-fade-in flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Our Locations</h3>
              <button 
                onClick={() => setShowLocationModal(false)}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close location modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="bg-white text-black rounded-2xl w-full p-6 md:p-8 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Milan Flagship Store</h4>
                  <p className="text-neutral-600 mb-4">
                    123 Fashion Avenue<br />
                    Milan, Italy 20121
                  </p>
                  <div className="mb-4">
                    <p className="font-medium">Opening Hours:</p>
                    <p className="text-neutral-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 12:00 PM - 6:00 PM
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="font-medium">Contact:</p>
                    <p className="text-neutral-600">
                      <a href="tel:+390212345678" className="hover:text-black">Phone: +39 02 1234 5678</a><br />
                      <a href="mailto:milan@footwear.com" className="hover:text-black">Email: milan@footwear.com</a>
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Milan,Italy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">New York Boutique</h4>
                  <p className="text-neutral-600 mb-4">
                    456 Fifth Avenue<br />
                    New York, NY 10018
                  </p>
                  <div className="mb-4">
                    <p className="font-medium">Opening Hours:</p>
                    <p className="text-neutral-600">
                      Monday - Saturday: 9:00 AM - 9:00 PM<br />
                      Sunday: 11:00 AM - 7:00 PM
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="font-medium">Contact:</p>
                    <p className="text-neutral-600">
                      <a href="tel:+12129876543" className="hover:text-black">Phone: +1 212 987 6543</a><br />
                      <a href="mailto:newyork@footwear.com" className="hover:text-black">Email: newyork@footwear.com</a>
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=New+York,NY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-semibold mb-4">Coming Soon</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-neutral-100 p-4 rounded-lg">
                    <h5 className="font-medium">Paris</h5>
                    <p className="text-sm text-neutral-600">Opening Fall 2025</p>
                  </div>
                  <div className="bg-neutral-100 p-4 rounded-lg">
                    <h5 className="font-medium">Tokyo</h5>
                    <p className="text-sm text-neutral-600">Opening Winter 2025</p>
                  </div>
                  <div className="bg-neutral-100 p-4 rounded-lg">
                    <h5 className="font-medium">Dubai</h5>
                    <p className="text-sm text-neutral-600">Opening Spring 2026</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowLocationModal(false)}
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;