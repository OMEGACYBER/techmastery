
import React from 'react';
import { Logo } from '../constants';

interface HeaderProps {
    onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
    return (
        <header className="py-4 px-8 bg-brand-secondary/50 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-secondary">
            <div className="container mx-auto flex justify-between items-center">
                <button onClick={onHomeClick} className="cursor-pointer">
                    <Logo />
                </button>
            </div>
        </header>
    );
};

export default Header;
