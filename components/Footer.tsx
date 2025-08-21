
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 px-8 mt-12 border-t border-brand-secondary">
            <div className="container mx-auto text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
                <p className="text-sm mt-1">Transforming Complexity into Clarity.</p>
            </div>
        </footer>
    );
};

export default Footer;
