import { useEffect, useRef, useState } from 'react';
import { Instagram, MapPin, XIcon } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon } from './AllSvg';

const Navbar = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const locationModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (locationModalRef.current && !locationModalRef.current.contains(event.target as Node)) {
        setShowLocationModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md py-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl cursor-default" onClick={() => window.scrollTo(0, 0)}>JSM FOOTWEAR</h1>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
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
              <FacebookIcon size={16} />
            </a>
            <a
              href="https://wa.me/919033835654"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={16} />
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

      </nav>

      {showLocationModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={locationModalRef} className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 md:p-8 relative animate-fade-in overflow-auto max-h-[90vh]">
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
            >
              <XIcon />
            </button>
            <h3 className="text-2xl font-bold mb-6">Our Locations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Jay Santoshi Maa Footwear</h4>
                <p className="text-neutral-600 mb-4">
                  Jay Santoshi Maa Footwear<br />
                  3, Dharmendra Rd, Opp. Punjab and Sind Bank,
                  Rajkot, Gujarat 360001
                </p>
                <div className="mb-4">
                  <p className="font-medium">Opening Hours:</p>
                  <p className="text-neutral-600">
                    Monday - Sunday: 10:00 AM - 9:00 PM<br />
                  </p>
                </div>
                <div className="mb-6">
                  <p className="font-medium">Contact:</p>
                  <p className="text-neutral-600">
                    Phone: +91 9033835654
                  </p>
                </div>
                <div className="mb-4">
                  <iframe
                    title="Jay Santoshi Maa Footwear"
                    className="w-full h-64 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.404827088319!2d70.8042608!3d22.298197299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb24d29ea0a3%3A0x34654fa252a0d72!2sJay%20Santoshi%20Maa%20Footwear!5e1!3m2!1sen!2sin!4v1740984933615!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                <a
                  href="https://maps.app.goo.gl/jx1xU4si3m3nqKzQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <MapPin size={16} />
                  Get Direction
                </a>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Jay Santoshi Maa Footwear</h4>
                <p className="text-neutral-600 mb-4">
                  Jay Santoshi Maa Footwear<br />
                  3, Dharmendra Rd, Opp. Punjab and Sind Bank,
                  Rajkot, Gujarat 360001
                </p>
                <div className="mb-4">
                  <p className="font-medium">Opening Hours:</p>
                  <p className="text-neutral-600">
                    Monday - Sunday: 10:00 AM - 9:00 PM<br />
                  </p>
                </div>
                <div className="mb-6">
                  <p className="font-medium">Contact:</p>
                  <p className="text-neutral-600">
                    Phone: +91 9033835654
                  </p>
                </div>
                <div className="mb-4">
                  <iframe
                    title="Jay Santoshi Maa Footwear"
                    className="w-full h-64 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.404827088319!2d70.8042608!3d22.298197299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb24d29ea0a3%3A0x34654fa252a0d72!2sJay%20Santoshi%20Maa%20Footwear!5e1!3m2!1sen!2sin!4v1740984933615!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <a
                  href="https://maps.app.goo.gl/jx1xU4si3m3nqKzQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <MapPin size={16} />
                  Get Direction
                </a>
              </div>
            </div>

            {/* <div className="mt-8 pt-6 border-t border-neutral-200">
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
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;