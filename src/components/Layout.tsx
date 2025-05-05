
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">{children}</main>
      <footer className="bg-white shadow-inner px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Atlas</h3>
            <p className="text-muted-foreground">
              Discover the world's most amazing destinations and plan your next adventure with ease.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Europe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Asia</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Africa</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Americas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Oceania</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tips & Tricks</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Budget Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-muted text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Atlas Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
