import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhoneNumber = (phone: string) => {
    // Basic phone validation - at least 10 digits
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/[\s()-]/g, ''));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value && !validatePhoneNumber(value)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhoneNumber('');

      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleShare = (platform: string) => {
    const shareText = "Join our exclusive pre-launch community for luxury footwear!";
    const shareUrl = window.location.href;

    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, so we'll copy to clipboard
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
        alert('Link copied to clipboard! Open Instagram to share.');
        return;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share & Win Early Access
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Join our exclusive pre-launch community. Share with friends and
              get a chance to win early access to our collection before the
              official launch.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Facebook size={20} />
                Share
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Instagram size={20} />
                Post
              </button>
            </div>

            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-2xl font-bold text-white">15.3K</span>{' '}
              people already joined
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">
              Join Our VIP WhatsApp Group
            </h3>
            <p className="text-neutral-300 mb-6">
              Get exclusive updates, early access to drops, and special offers
              directly to your phone. No spam, just the good stuff.
            </p>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-medium">
                  Thank you! You've been added to our VIP group.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className={`w-full px-4 py-3 bg-white/5 border ${phoneError ? 'border-red-500' : 'border-white/10'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white`}
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 text-sm text-neutral-400"
                  >
                    I agree to receive WhatsApp messages and understand I can
                    unsubscribe anytime.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !!phoneError}
                  className={`w-full bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting || !!phoneError
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-neutral-200'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      Join VIP Group
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;