import Image from 'next/image';
import hero from '../../public/indoor_image_1.jpeg';

export default function Home() {
	return (
		<main className='cont flex flex-row'>
			<div className='item flex-1 flex flex-col'>
				<Image
					src={hero}
					alt='hero image'
					className='w-full h-screen md:h-full object-cover'
				/>
			</div>
		</main>
	);
}
