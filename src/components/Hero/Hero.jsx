import { FaStar, FaRocket } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          {/* Rating */}
          <div className="hero__rating">
            {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="hero__star" />)}
            <span className="hero__rating-text">Excellent 4.8 out of 5</span>
          </div>

          <h1 className="hero__title">
            Best SMM Panel<br />
            in Bangladesh –{' '}
            <span className="hero__title-highlight">Fast, Safe</span>
            & Growth in Social Media.
          </h1>

          <p className="hero__desc">
            SMM is Bangladesh's most reliable & cheap SMM panel for real social media
            growth. We built this platform for Bangladeshi businesses, creators, and agencies.
            You get fast delivery, safe methods, and followers that actually stay. No fake bots.
            No account risks, just real results. Most panels chase big numbers. We focus on
            building those numbers. You get retention guarantees, delivery control, and
            long-term credibility.
          </p>

          <div className="hero__ctas">
            <a href="#services" className="btn-primary hero__cta-primary">
              <FaRocket /> View Services
            </a>
            <a href="#signup" className="hero__cta-secondary">
              Create an Account
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual">
          <div className="hero__visual-glow" />
          <div className="hero__visual-container">
            <img
              src="/hero-smm.png"
              alt="Best SMM Panel Bangladesh"
              className="hero__illustration-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
