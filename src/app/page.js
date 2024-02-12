import Image from 'next/image';
import hero from '../../public/indoor_image_1.jpeg';

export default function Home() {
	return (
		<main className='cont h-screen relative -z-10'>
			<div className='item absolute -z-10 h-screen w-full'>
				<Image
					src={hero}
					fill
					alt='hero image'
					className='object-cover overflow-hidden'
				/>
			</div>
			<div class='w-full h-full flex justify-center items-center absolute backdrop-brightness-50 -z-10'>
				<span class='text-white text-8xl w-full text-center'>
					Welcome to Andrews Court
				</span>
			</div>
		</main>
	);
}
