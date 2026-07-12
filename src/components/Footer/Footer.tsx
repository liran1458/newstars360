import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner section-wrapper">
        <div className="footer-brand">
          <span className="footer-logo">NEW STARS 360</span>
          <p>בונים שחקנים. בונים דרך.</p>
        </div>
        <div className="footer-links">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="footer-copy">
        © 2026 NEW STARS 360. כל הזכויות שמורות.
      </div>
    </footer>
  );
};

export default Footer;
