import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import MobileActionBar from '../components/MobileActionBar';

export const metadata = {
    title: 'Green India Pest Control | Expert Pest Solutions in Kadapa & Tirupati',
    description: 'Green India Pest Control offers safe, eco-friendly, and effective pest control services in Kadapa, Tirupati, Ananthapur, and Nellore.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-sans text-gray-900 bg-white min-h-screen flex flex-col relative overflow-x-hidden">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <FloatingActions />
                <MobileActionBar />
                <Footer />
            </body>
        </html>
    );
}
