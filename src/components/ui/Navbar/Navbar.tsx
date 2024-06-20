'use client'

import React, { FC, useState } from 'react';
import { useScrollSpy } from '@/hooks';
import Link from 'next/link'
import Logo from '../Logo';
import clsx from 'clsx'

export const NavbarItem: FC<{item: string, isActive: boolean}> = ({ item, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className={clsx(
            'text-base font-medium p-2',
            {
                'ring ring-offset-1 ring-cyan-500 text-cyan-500 rounded-lg': isHovered || isActive,
                'ring-0': !isHovered && !isActive,
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
    const activeId = useScrollSpy(items, 100)
    return (
        <nav className="flex justify-between items-center shadow-md pr-12">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Logo />
                    <span className="sr-only">Hanaa Sadoqi</span>
                </Link>
            </div>
            <ul className="hidden lg:flex lg:justify-center lg:gap-x-4">
                {items.map(item => <NavbarItem key={item} item={item} isActive={activeId === item.toLowerCase()}/>)}
            </ul>
            <div className="h-12 w-12 hamburger-menu">
                <h1>Hello</h1>
            </div>
        </nav>
    )
}

export default Navbar;