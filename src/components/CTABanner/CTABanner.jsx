import './CTABanner.css';
import { FiArrowRight } from 'react-icons/fi';

export default function CTABanner() {
  return (
    <section className="cta-banner" id="cta">
      <div className="container">
        <div className="cta-banner__card">

          {/* World map watermark */}
          <div className="cta-banner__map" aria-hidden="true">
            <svg viewBox="0 0 900 380" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {/* North America */}
              <path d="M60 80 L100 60 L150 55 L185 70 L200 100 L210 130 L195 160 L175 175 L145 185 L120 195 L100 210 L80 230 L65 220 L55 195 L50 165 L40 140 L45 110 Z" fill="#F97316" />
              {/* Greenland */}
              <path d="M210 30 L240 20 L270 25 L275 50 L265 65 L245 70 L225 60 L210 45 Z" fill="#F97316" />
              {/* South America */}
              <path d="M150 240 L175 230 L200 240 L215 265 L220 295 L210 325 L195 345 L175 355 L158 345 L145 320 L140 290 L140 265 Z" fill="#F97316" />
              {/* Europe */}
              <path d="M380 60 L410 50 L445 55 L465 70 L460 90 L445 100 L425 105 L405 98 L385 88 L375 75 Z" fill="#F97316" />
              {/* Africa */}
              <path d="M385 115 L420 105 L455 110 L475 135 L480 165 L475 195 L465 225 L450 255 L430 270 L408 270 L388 255 L375 230 L370 200 L372 170 L375 140 Z" fill="#F97316" />
              {/* Asia */}
              <path d="M465 45 L510 30 L570 25 L630 30 L680 45 L710 65 L720 90 L710 120 L690 140 L660 155 L630 165 L595 170 L560 168 L525 158 L495 142 L470 120 L458 95 L460 68 Z" fill="#F97316" />
              {/* Southeast Asia */}
              <path d="M620 155 L650 148 L680 155 L695 175 L690 195 L672 205 L650 202 L630 192 L618 175 Z" fill="#F97316" />
              {/* Australia */}
              <path d="M650 235 L695 225 L740 228 L768 245 L775 270 L765 298 L748 315 L720 322 L692 318 L668 302 L652 278 L645 255 Z" fill="#F97316" />
              {/* Japan */}
              <path d="M722 85 L735 78 L748 85 L750 98 L740 108 L727 105 L718 95 Z" fill="#F97316" />
              {/* UK */}
              <path d="M368 65 L378 58 L388 62 L390 72 L382 78 L372 74 Z" fill="#F97316" />
            </svg>
          </div>

          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Ready to Grow Your Social<br />
              Media in <span>Bangladesh?</span>
            </h2>
            <p className="cta-banner__desc">
              Join over 68,000 users who are already using SMM to grow faster on
              Facebook, Instagram, YouTube, TikTok, and more. Getting started is
              free and takes less than 60 seconds.
            </p>
            <div className="cta-banner__btns">
              <a href="#services" className="cta-banner__btn-outline">
                See All Services
              </a>
              <a href="#signup" className="cta-banner__btn-primary">
                Create Free Account <FiArrowRight />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
