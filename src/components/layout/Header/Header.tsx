'use client';

import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

const Header: FC = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {      
            // Detect if user is scrolling up
            if (window.scrollY < lastScrollY || window.scrollY === 0) {
              setIsHeaderVisible(true);

              setTimeout(() => {
                setIsHeaderVisible(false);
              }, 2000)
            } else {
              setIsHeaderVisible(false);
            }
            setLastScrollY(window.scrollY);
          };
      
          // Add event listener to viewport
          window.addEventListener('scroll', handleScroll);
      
          // Clean up event listener on component unmount
          return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        // Show header when user hovers over area
        const handleMouseEnter = () => {
          setIsHeaderVisible(true);
        };
    
        // Hide header when user leaves area 
        // if they are not scrolled to the top of the page
        const handleMouseLeave = () => {
          if (window.scrollY > 0) {
            setIsHeaderVisible(false);
          }
        };
        
        const detectionArea = document.getElementById('header-detection-area');

        detectionArea?.addEventListener('mouseenter', handleMouseEnter);
        detectionArea?.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          detectionArea?.removeEventListener('mouseenter', handleMouseEnter);
          detectionArea?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div 
              id="header-detection-area"
              className="fixed top-0 left-0 w-full h-16 z-40 pointer-events-auto"
            ></div>
            <header
              className={clsx(
                'fixed top-0 left-0 w-full p-6 bg-white shadow transition-transform duration-500 z-50',
                {
                  'translate-y-0': isHeaderVisible,
                  '-translate-y-full': !isHeaderVisible,
                }
              )}
            >
                I am a header
            </header>
        </>
    )
}

export default Header;