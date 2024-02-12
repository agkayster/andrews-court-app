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
		<div>
			<Link href='/'>Andrews Court</Link>
			<div>
				{links.map(({ id, title, url }) => (
					<Link key={id} href={url}>
						{title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
