'use client';
import React from 'react';
import Link from 'next/link';

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'About Us',
		url: '/about',
	},
	{
		id: 3,
		title: 'Portfolio',
		url: '/portfolio',
	},
	{
		id: 4,
		title: 'Services',
		url: '/services',
	},
	{
		id: 5,
		title: 'Blog',
		url: '/blog',
	},
	{
		id: 6,
		title: 'Contact Us',
		url: '/contact',
	},
];

const Navbar = () => {
	return (
		<div className='relative'>
			<div className='h-28 flex justify-between items-center px-10 fixed w-screen bg-white opacity-75 md:px-20'>
				<Link href='/' className='font-bold text-1xl md:text-2xl'>
					Andrews Court
				</Link>
				<div className='links flex flex-col items-center gap-10 md:flex-row'>
					{links.map(({ id, title, url }) => (
						<Link key={id} href={url}>
							{title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
