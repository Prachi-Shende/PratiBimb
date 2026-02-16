import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import Performers from '../components/Performers';
import FeatureSection from '../components/FeatureSection';
import Community from '../components/Community';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import { RevealOnScroll } from '../components/RevealOnScroll';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <div id="home">
                <Hero />
            </div>
            <RevealOnScroll>
                <InfoBar />
            </RevealOnScroll>
            <div id="events">
                <RevealOnScroll>
                    <Performers />
                </RevealOnScroll>
            </div>

            <RevealOnScroll>
                <FeatureSection
                    title="Performances"
                    description={
                        <>
                            From college stages to the prestigious <strong>Jio World Drive</strong>,
                            <strong> Execate Dance Crew (EDC)</strong> has built a legacy of passion and versatility.
                            Blending classical grace, hip-hop energy, Bollywood flair, and contemporary flow,
                            we carry forward the creativity, unity, and pride of <strong>VJTI</strong>.

                            <br /><br />

                            <strong>EDC</strong> has proudly performed live at <strong>Jio World Drive </strong>
                            and has consistently emerged as <strong>winners and finalists</strong> at multiple
                            inter-college dance battles. As regular performers at VJTI’s flagship fest,
                            <strong>Pratibimb</strong>, the crew has become a defining presence on stage.
                            Known for their <strong>innovative fusions</strong> and
                            <strong> high-energy performances</strong>, EDC continues to captivate audiences
                            with creativity, precision, and powerful stage presence.
                        </>
                    }
                    ctaText="Explore Now"
                    image="/assets/perf.png"
                    reverse={false}
                />
            </RevealOnScroll>


            <RevealOnScroll>
                <FeatureSection
                    title="Our Highlights"
                    description={
                        <ul className="space-y-3 list-disc pl-5">
                            <li>
                                <strong>Live Performance at Jio World Drive</strong> – Showcasing electrifying stage presence at one of Mumbai’s most prestigious venues.
                            </li>
                            <li>
                                <strong>Winners – Pratibimb Group Dance</strong> – Dominating VJTI’s flagship fest with power and precision.
                            </li>
                            <li>
                                <strong>Winners – Antaranga Utsav (Solo Classical)</strong> – Celebrating grace, technique, and artistic excellence.
                            </li>
                            <li>
                                <strong>2nd Place – SPCE Group Dance</strong> – A testament to teamwork and choreography mastery.
                            </li>
                            <li>
                                <strong>2nd Place – VIT “Feat in the Beat” (Duet)</strong> – Showcasing chemistry and dynamic performance.
                            </li>
                            <li>
                                <strong>3rd Place – Rangmanch (Rotaract Club)</strong> – Recognized for versatility and impactful stage presence.
                            </li>
                        </ul>
                    }
                    ctaText="Sign Up"
                    image="/assets/perf2.png"
                    reverse={false}
                />
            </RevealOnScroll>


            <RevealOnScroll>
                <Community />
            </RevealOnScroll>

            <div id="about">
                <Gallery />
            </div>

            <div id="contact">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
