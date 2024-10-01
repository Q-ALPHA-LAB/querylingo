import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Tutorials</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 QueryLingo. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;