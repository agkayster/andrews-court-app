'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { HiAdjustmentsVertical } from 'react-icons/hi2';

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
	const [isDropdown, setIsDropDown] = useState(false);

	const handleMobileBurger = () => setIsDropDown(!isDropdown);

	return (
		<>
			<div
				className={`${
					isDropdown
						? 'h-[23rem] flex flex-col justify-start px-10 pt-20 transition-all ease-in-out duration-1000'
						: 'flex flex-col h-28 px-10 pt-10'
				} fixed w-screen bg-white 
      md:px-20 md:h-28 md:flex-row md:justify-between md:items-center md:pt-0 md:transition-none`}>
				<div className='flex flex-row justify-between items-center'>
					<Link href='/' className='font-bold text-1xl md:text-2xl'>
						Andrews Court
					</Link>
					{isDropdown ? (
						<div className='md:hidden'>
							<HiAdjustmentsHorizontal
								onClick={handleMobileBurger}
							/>
						</div>
					) : (
						<div className='md:hidden'>
							<HiAdjustmentsVertical
								onClick={handleMobileBurger}
							/>
						</div>
					)}
				</div>
				<div
					className={`links flex flex-col items-start gap-5 pt-4 ${
						isDropdown
							? 'absolute top-24 transition-all ease-in-out duration-1000'
							: 'absolute -top-72'
					}
        md:flex-row md:gap-10 md:items-center md:pt-0 md:border-none md:relative md:top-0 md:transition-none`}>
					{links.map(({ id, title, url }) => (
						<Link key={id} href={url}>
							{title}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
