'use client';

import React, { FC, useEffect, useState } from 'react';
import { Navbar } from '../../ui';
import clsx from 'clsx';

const items = [
  "About", 
  "Skills", 
  "Experience", 
  "Projects", 
  "Writing", 
  "Contact"
];

const Header: FC = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY || window.scrollY === 0) {
                setIsHeaderVisible(true);
            } else if(!isHovering) {
                setIsHeaderVisible(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isHovering]);

    useEffect(() => {
      const handleMouseEnter = () => {
        setIsHovering(true);
        setIsHeaderVisible(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        if( window.scrollY > 0) {
          setIsHeaderVisible(false);
        }
      };

      const detectionArea = document.getElementById('header-detection-area');
      const header = document.getElementById('header');

      detectionArea?.addEventListener('mouseenter', handleMouseEnter);
      detectionArea?.addEventListener('mouseleave', handleMouseLeave);
      header?.addEventListener('mouseenter', handleMouseEnter);
      header?.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        detectionArea?.removeEventListener('mouseenter', handleMouseEnter);
        detectionArea?.removeEventListener('mouseleave', handleMouseLeave);
        header?.removeEventListener('mouseenter', handleMouseEnter);
        header?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return (
        <>
            <div
                id="header-detection-area"
                className="fixed top-0 left-0 w-full h-16 z-40 pointer-events-auto"
            ></div>
            <header
                id="header"
                className={clsx(
                    'fixed top-0 left-0 w-full bg-white shadow transition-transform duration-500 z-50',
                    {
                        'translate-y-0': isHeaderVisible,
                        '-translate-y-full': !isHeaderVisible,
                    }
                )}
            >
                <Navbar items={items} />
            </header>
        </>
    );
};

export default Header;

