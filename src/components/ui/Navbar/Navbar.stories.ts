import type { Meta, StoryObj } from '@storybook/react';
import Navbar, { NavbarItem } from './Navbar';

// Meta configuration for Navbar
const metaNavbar: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        items: ["About", "Skills", "Experience", "Projects", "Writing", "Contact"],
    },
};

export default metaNavbar;

// Define type for Navbar stories
type NavbarStory = StoryObj<typeof metaNavbar>;

// Default story for Navbar
export const Default: NavbarStory = {};

// Story for Navbar with no items
export const Empty: NavbarStory = {
    args: {
        items: [],
    },
};

// Story for Navbar with one item
export const OneItem: NavbarStory = {
    args: {
        items: ["About"],
    },
};
