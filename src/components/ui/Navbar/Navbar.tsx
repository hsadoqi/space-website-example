import React, { FC } from 'react';
import Link from 'next/link'

const NavbarItem: FC<{item: string}> = ({ item }) => {
    return (
        <Link
            href={`#${item.toLowerCase()}`}
            className="p-2"
            >
                {item}
            </Link>
    )
}

const Navbar: FC = () => {
    const items = [
        "About", 
        "Skills", 
        "Experience", 
        "Projects", 
        "Writing", 
        "Contact"
    ]

    return (
        <nav className="flex justify-center">
            {items.map(item => <NavbarItem item={item} />)}
        </nav>
    )
}

export default Navbar;