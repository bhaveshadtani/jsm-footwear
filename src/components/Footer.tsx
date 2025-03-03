import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">FOOTWEAR</h3>
            <p className="text-neutral-400 mb-6">
              Redefining luxury footwear with innovative designs and uncompromising quality.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
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
                <Facebook size={18} />
              </a>
              <a 
                href="https://wa.me/919033835654" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

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
                  href="mailto:info@footwear.com" 
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail size={20} className="text-neutral-400 flex-shrink-0" />
                  <span>info@footwear.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://wa.me/919033835654" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <MessageCircle size={20} className="text-neutral-400 flex-shrink-0" />
                  <span>WhatsApp: +91 9033835654</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Footwear. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;