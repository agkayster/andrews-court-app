import { Inter, Proza_Libre } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const proza = Proza_Libre({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Andrews Court',
	description: 'Property Company',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={proza.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
