
import React from 'react';
import { CUSTLogo } from './CUSTLogo';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <CUSTLogo className="h-12 w-12 text-cust-blue" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-cust-blue tracking-tight leading-tight">Confluence University</span>
              <span className="text-sm font-semibold text-slate-600 leading-tight">of Science & Technology, Osara</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-semibold text-slate-700 hover:text-cust-blue transition-colors">Home</a>
            <a href="#" className="font-semibold text-slate-700 hover:text-cust-blue transition-colors">About</a>
            <a href="#" className="font-semibold text-slate-700 hover:text-cust-blue transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
