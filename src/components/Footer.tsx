import { Instagram, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon } from './AllSvg';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">

          {/* FOOTWEAR Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">JSM FOOTWEAR</h3>
            <p className="text-neutral-400 mb-6">
              Offering a wide range of footwear, with the perfect blend of style, comfort, and quality.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://wa.me/919033835654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* CONTACT US Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <a
                  href="https://maps.app.goo.gl/jx1xU4si3m3nqKzQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <MapPin size={20} className="text-neutral-400 mt-1 flex-shrink-0" />
                  <span>Jay Santoshi Maa Footwear<br />
                    3, Dharmendra Rd, Opp. Punjab and Sind Bank,
                    Rajkot, Gujarat 360001</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="tel:+919033835654"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone size={20} className="text-neutral-400 flex-shrink-0" />
                  <span>+91 9033835654</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/919033835654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={20} />
                  <span>WhatsApp: +91 9033835654</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {`${import.meta.env.VITE_INSTAGRAM_USERNAME.toUpperCase()}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;