import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: 3 columns like reference (Address, Mail us, Call us) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-gray-800">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold">Address</h3>
            </div>
            <div className="pl-13">
              <p className="font-semibold">Baking Tag</p>
              <p className="text-gray-300">59A, Samthariya Nagar, 4th Street,</p>
              <p className="text-gray-300">Ambattur, Chennai - 600053</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                <Mail className="h-5 w-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold">Mail us</h3>
            </div>
            <div className="pl-13">
              <a href="mailto:ayathicakes@gmail.com" className="text-pink-400 hover:text-pink-300">
                ayathicakes@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                <Phone className="h-5 w-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold">Call us</h3>
            </div>
            <div className="pl-13">
              <a href="tel:8248477869" className="text-pink-400 hover:text-pink-300">
                +91 82484 77869
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-gray-400 gap-4 text-left">
          <p>All Rights Reserved @ Baking Tag</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ayath_icakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p>
            Website Design by <span className="text-pink-400">PG Softwares</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;