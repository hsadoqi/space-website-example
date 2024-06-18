'use client';

import React, { FC, useState, useEffect } from 'react';

const Footer: FC = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const bottomPosition = document.body.scrollHeight;
      
            // Check if user has scrolled to the bottom
            if (scrollPosition >= bottomPosition - 50) { 
              setIsAtBottom(true);
            } else {
              setIsAtBottom(false);
            }
            setLastScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }), [lastScrollY]

    return (
        <footer className={`w-full p-4 border-2 border-gray-200 shadow md:flex md:items-center md:justify-between transition-opacity duration-500 ${isAtBottom ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {`© 2024 Hanaa Sadoqi's Portfolio`}
            </span>
      </footer>
    )
};

export default Footer;