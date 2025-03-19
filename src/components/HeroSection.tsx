import { ArrowRight, Loader2, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const showPreviewModalRef = useRef<HTMLDivElement>(null);
  const showNotificationModalRef = useRef<HTMLDivElement>(null);

  const validatePhoneNumber = (number: any) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Please enter a valid 10 digits phone number');
      return;
    }

    setIsSubmitting(true);
    setPhoneNumberError('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhoneNumber('');

      // Redirect to the WhatsApp group
      setTimeout(() => {
        setShowNotificationModal(false);
        setIsSubmitted(false);
        setPhoneNumberError('');
        window.open(`https://chat.whatsapp.com/${import.meta.env.VITE_WHATSAPP_GROUP_LINK}`, '_blank');
      }, 2000);
    }, 300);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (showPreviewModalRef.current && !showPreviewModalRef.current.contains(event.target as Node)) {
        setShowPreviewModal(false);
      }
      if (showNotificationModalRef.current && !showNotificationModalRef.current.contains(event.target as Node)) {
        setShowNotificationModal(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Premium men's shoes"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            <span className="block transform transition-transform duration-700 hover:scale-105">
              Step Into the Future of Footwear
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in-delayed">
            A curated collection of premium shoes launching soon
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed-more">
            <button
              onClick={() => setShowNotificationModal(true)}
              className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get Notified
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setShowPreviewModal(true)}
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              Explore Preview
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Get Notified Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={showNotificationModalRef} className="bg-white text-black rounded-2xl max-w-md w-full p-6 md:p-8 relative animate-fade-in overflow-auto scrollbar-thin">
            <button
              onClick={() => {
                setShowNotificationModal(false);
                setIsSubmitted(false);
                setPhoneNumberError('');
              }}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
              aria-label="Close notification modal"
            >
              <XIcon />
            </button>

            <h3 className="text-2xl font-bold mb-4">Join Our WhatsApp Group</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-800 font-medium">
                  Thank you! You will be redirected to join our WhatsApp group shortly.
                </p>
              </div>
            ) : (
              <>
                <p className="text-neutral-600 mb-6">
                  Join our WhatsApp group to stay updated with the latest news and offers.
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-neutral-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="XXXXXXXXXX"
                      required
                      className={`w-full px-4 py-3 border ${phoneNumberError ? 'border-red-500' : 'border-neutral-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500`}
                    />
                    {phoneNumberError && (
                      <p className="mt-1 text-sm text-red-600">{phoneNumberError}</p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-neutral-600">
                      I agree to receive WhatsApp notifications about group updates and exclusive offers.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !!phoneNumberError}
                    className={`w-full bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting || !!phoneNumberError ? 'opacity-70 cursor-not-allowed' : 'hover:bg-neutral-800'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-5 w-5 text-white" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Join Group
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Explore Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={showPreviewModalRef} className="bg-white text-black rounded-2xl max-w-4xl w-full p-6 md:p-8 relative animate-fade-in overflow-auto scrollbar-thin max-h-[90vh]">
            <button
              onClick={() => setShowPreviewModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
              aria-label="Close preview modal"
            >
              <XIcon />
            </button>

            <h3 className="text-2xl font-bold mb-6">Collection Preview</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Premium shoe preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">The Elegance Collection</h4>
                <p className="text-neutral-600 mb-4">
                  Our flagship collection combines timeless design with modern craftsmanship. Each pair is handcrafted using premium materials sourced from the finest tanneries in Italy.
                </p>
                <div className="mb-6">
                  <h5 className="font-medium mb-2">Highlights:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                    <li>Full-grain Italian leather</li>
                    <li>Hand-stitched details</li>
                    <li>Custom-designed comfort insoles</li>
                    <li>Exclusive colorways</li>
                    <li>Limited production run</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-neutral-500">Starting from</span>
                    <p className="text-2xl font-bold">$299</p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="text-lg font-semibold mb-4">More from this collection</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Additional shoe preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;