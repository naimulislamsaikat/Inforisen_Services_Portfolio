import './Footer.css';
import {
  FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter,
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiZap } from 'react-icons/fi';

const quickLinks = ['Home', 'About Us', 'Services', 'Blog', 'Contact Us', 'API', 'Terms of Service', 'Privacy Policy', 'Refund Policy'];
const servicePages = ['Facebook SMM Panel', 'Instagram SMM Panel', 'YouTube SMM Panel', 'TikTok SMM Panel', 'Telegram SMM Panel', 'X Twitter SMM Panel'];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* Triangle decorations */}
      <div className="footer__triangles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`footer__triangle footer__triangle--${i + 1}`} />
        ))}
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <FiZap size={18} color="white" />
                </div>
                <span>Inforisen</span>
              </div>
              <p className="footer__brand-desc">
                Inforisen is Bangladesh's most trusted SMM panel. Serving creators,
                businesses, and agencies. We provide high-quality social media
                growth services for every platform, with full support for local
                payments like bKash, Nagad, and Rocket.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className="footer__social" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" className="footer__social" aria-label="TikTok"><FaTiktok /></a>
                <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Pages */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services Pages</h4>
              <ul className="footer__links">
                {servicePages.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact Info</h4>
              <ul className="footer__contact-list">
                <li>
                  <FiMail className="footer__contact-icon" />
                  <a href="mailto:naimulislam.dev@gmail.com">naimulislam.dev@gmail.com</a>
                </li>
                <li>
                  <FiPhone className="footer__contact-icon" />
                  <a href="tel:+8801308320991">+880 130 8320 991</a>
                </li>
                <li>
                  <FiMapPin className="footer__contact-icon" />
                  <span>Serving all of Bangladesh<br />24/7 Dedicated Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Inforisen Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.</p>
        </div>
      </div>
    </footer>
  );
}
