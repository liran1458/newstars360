import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner section-wrapper">
        <div className="footer-links" aria-label="רשתות חברתיות">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={siteConfig.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>

        <p className="footer-copy">
          © 2026 NEW STARS 360. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
