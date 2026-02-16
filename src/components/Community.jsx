import { Instagram } from 'lucide-react';

const Community = () => {
    return (
        <div className="bg-black py-24 border-b border-white/10 text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect with the Community</h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                    At the heart of Execate Dance Crew lies a passionate community driven by rhythm, creativity, and unity. From rehearsals to grand stages, we grow together, support one another, and celebrate every milestone as one family. Join a space where talent meets teamwork, friendships turn into lifelong bonds, and every beat brings us closer.
                </p>
                <a
                    href="https://instagram.com/vjti_execatedancecrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-300 hover:text-brand-red transition-all duration-300 group"
                >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg font-medium tracking-wide">@vjti_execatedancecrew</span>
                </a>
            </div>
        </div>
    );
};

export default Community;
