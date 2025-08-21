
import React from 'react';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-brand-primary bg-opacity-80 flex flex-col justify-center items-center z-50 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-brand-light">{text}</p>
    </div>
  );
};

export default Loader;
