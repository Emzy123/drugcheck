
import React from 'react';
import { CUSTLogo } from './CUSTLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <CUSTLogo className="h-16 w-16 text-white" />
            <div>
              <p className="font-bold text-white text-lg">Confluence University of Science and Technology, Osara</p>
              <p className="text-sm">Knowledge for the Advancement of Mankind</p>
            </div>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} CUST Osara. All rights reserved.</p>
            <p>This tool is for informational purposes and is not a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
