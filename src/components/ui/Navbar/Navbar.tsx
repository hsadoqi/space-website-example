'use client'

import React, { FC, useState } from 'react';
import Link from 'next/link'
import Logo from '../Logo';
import clsx from 'clsx'

export const NavbarItem: FC<{item: string}> = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li className={clsx(
            'text-base font-medium p-2',
            {
                'ring ring-offset-1 ring-cyan-500 rounded-lg': isHovered,
                'ring-0': !isHovered,
            }
        )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href={`#${item.toLowerCase()}`}
                >
                {item}
            </Link>
        </li>
    )
}

const Navbar: FC<{items?: string[]}> = ({ items = [] }) => {
    return (
        <nav className="flex justify-between items-center shadow-md pr-12">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Logo />
                    <span className="sr-only">Hanaa Sadoqi</span>
                </Link>
            </div>
            <ul className="hidden lg:flex lg:justify-center lg:gap-x-4">
                {items.map(item => <NavbarItem key={item} item={item} />)}
            </ul>
            <div className="h-12 w-12 hamburger-menu">
                <h1>Hello</h1>
            </div>
        </nav>
    )
}

export default Navbar;