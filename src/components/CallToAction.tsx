import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { CopyIcon, FacebookIcon, WhatsAppIcon } from './AllSvg';

const CallToAction = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const cachedData = localStorage.getItem("instagram_posts");
  const followersCount = cachedData ? JSON.parse(cachedData)?.followersCount?.toLocaleString('en-IN') : 0;

  const validatePhoneNumber = (number: any) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid 10 digits phone number');
      return;
    }

    setIsSubmitting(true);
    setPhoneError('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhoneNumber('');

      // Redirect to the WhatsApp group
      setTimeout(() => {
        setIsSubmitted(false);
        setPhoneError('');
        window.open(`https://chat.whatsapp.com/${import.meta.env.VITE_WHATSAPP_GROUP_LINK}`, '_blank');
      }, 2000);
    }, 300);
  };

  const handleShare = (platform: string) => {
    const shareText = "Join our exclusive pre-launch community for premium footwear!";
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
                <FacebookIcon size={20} />
                Share
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="flex items-center gap-2 bg-white/10 text-white hover:bg-neutral-900 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <CopyIcon />
                Copy Link
              </button>
            </div>

            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-2xl font-bold text-white">{followersCount}</span>{' '}
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
                  Thank you! You will be redirected to join our WhatsApp group shortly.
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
                    // maxLength={10}
                    placeholder="XXXXXXXXXX"
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
                      <Loader2 className="animate-spin h-5 w-5 text-black" />
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