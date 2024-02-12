import Image from 'next/image';
import hero from '../../public/indoor_image_1.jpeg';

export default function Home() {
	return (
		<main>
			<div className='cont h-screen relative -z-10'>
				<div className='item absolute -z-10 h-screen w-full'>
					<Image
						src={hero}
						fill
						alt='hero image'
						className='object-cover overflow-hidden'
					/>
				</div>
				<div class='w-full h-full flex flex-col gap-16 justify-center items-center absolute backdrop-brightness-50 -z-10'>
					<div class='text-white text-6xl w-full text-center'>
						Welcome to
					</div>
					<div class='text-8xl w-full text-center text-yellow-500'>
						Andrews Court
					</div>
				</div>
			</div>
			<div className='cont h-full mt-32'>
				<h1 className='featured flex flex-row justify-center items-center my-[1.25rem] mx-0 text-4xl md:text-6xl font-extrabold text-yellow-500'>
					Featured Properties
				</h1>
				<ul>
					<li>Property 1</li>
					<li>Property 2</li>
					<li>Property 3</li>
					<li>Property 4</li>
					<li>Property 5</li>
				</ul>
				<p className='props_view flex flex-row justify-center items-center'>
					View all properties
				</p>
			</div>
			<div className='cont h-full mt-32 bg-slate-100'>
				<div className='flex flex-col-reverse justify-center items-center gap-5 md:flex-row md:justify-start'>
					<div className='item w-80 py-5 md:w-64 flex-1 md:py-10'>
						<Image
							src={hero}
							alt='hero image'
							className='object-cover overflow-hidden'
						/>
					</div>
					<div className='pt-10 flex-1 md:pt-0'>
						<h1 className='space flex flex-row justify-center items-center text-4xl pb-10 font-bold md:text-6xl'>
							Flex Space
						</h1>
						<p className='text-center px-5 font-medium text-xl md:px-0'>
							Take a look at our latest commercial spaces in
							Battersea, Balham, Clapham, Fulham, Putney,
							Vauxhall, Wandsworth, and Wimbledon.
						</p>
						<button
							className='border-2 font-medium text-1xl mx-36 md:font-normal md:text-2xl 
            border-yellow-400 rounded-2xl p-5 mt-5 md:mx-52 md:p-3'>
							See Availability
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
