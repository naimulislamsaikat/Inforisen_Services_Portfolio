import { useState } from 'react';
import './index.css';
import IntroLoader from './components/IntroLoader/IntroLoader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StatsBar from './components/StatsBar/StatsBar';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import PaymentMethods from './components/PaymentMethods/PaymentMethods';
import GrowthTimeline from './components/GrowthTimeline/GrowthTimeline';
import Advantages from './components/Advantages/Advantages';
import FAQ from './components/FAQ/FAQ';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <IntroLoader onComplete={() => setIntroFinished(true)} />
      <div className={`app-wrapper ${introFinished ? 'app-wrapper--ready' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <HowItWorks />
          <PaymentMethods />
          <GrowthTimeline />
          <Advantages />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  );
}
