import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
            <h1 className="text-[#D4AF37] font-cinzel text-6xl mb-8">Home Placeholder</h1>
            <p className="font-montaga text-xl mb-8">This is a placeholder for the Home page.</p>
            <Link href="/" className="text-[#D4AF37] underline font-cinzel text-xl">
                Return to Main Site
            </Link>
        </div>
    );
}
