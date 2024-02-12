import React from 'react';
import Image from 'next/image';
import { images } from './images';

const Footer = () => {
	return (
		<div className='h-14 flex flex-col items-center justify-between md:flex-row p-10'>
			<div className='text-sm mb-4 md:mb-0'>
				©️andrewscourt. All rights reserved 2024.
			</div>
			<div className='flex flex-row gap-2.5'>
				{images.map(({ id, title }) => (
					<Image
						key={id}
						src={title}
						width={15}
						height={15}
						alt='ejike dev'
						className='opacity-60 cursor-pointer'
					/>
				))}
			</div>
		</div>
	);
};

export default Footer;
