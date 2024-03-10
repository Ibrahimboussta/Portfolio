'use client';

import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {
    return (
        <>
            <Navbar fluid rounded className='p-4 w-full border-b-2 fixed z-50 bg-[#f1f0f0]'>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ibra_Dev</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <ScrollLink to="home" smooth={true} offset={-70} duration={500} className='text-lg cursor-pointer'>
                        Home
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} offset={-70} duration={500} className='text-gray text-lg cursor-pointer'>About</ScrollLink>
                    <ScrollLink to="projects" smooth={true} offset={-70} duration={500} className='text-gray text-lg cursor-pointer'>Projects</ScrollLink>
                    <ScrollLink to="contact" smooth={true} offset={-70} duration={500} className='text-gray text-lg cursor-pointer'>Contact</ScrollLink>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
