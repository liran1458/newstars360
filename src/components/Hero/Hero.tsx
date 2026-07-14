import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';
import heroImage from '../../assets/heronewstars.png';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-grid section-wrapper">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <span className="eyebrow hero-eyebrow">אימונים אישיים. דרך אמיתית.</span>
        <h1>לא רק להתאמן.<br /><span>להפוך לשחקן.</span></h1>
        <p>ליווי אישי לשחקנים צעירים שרוצים לבנות יסודות, ביטחון, קבלת החלטות והרגלים של מקצוענים.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            השארת פרטים
          </a>
          <a className="button button-ghost" href="#about">להכיר את הדרך <FiArrowDown /></a>
        </div>
        <div className="hero-divider" aria-hidden="true" />
        <div className="hero-stats" aria-label="יתרונות האימון">
          <div><strong>360°</strong><span>מעטפת לשחקן</span></div>
          <div><strong>1:1</strong><span>יחס אישי</span></div>
          <div><strong>דרך</strong><span>לפני תוצאה</span></div>
        </div>
      </motion.div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 34 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .95, delay: .12, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-glow" />
        <img src={heroImage} alt="אוראל עבדה עם כדור" />
        <div className="hero-float-card"><span>NEW</span><strong>STARS 360</strong><small>Build the player</small></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="גלילה לתוכן הבא"><span>גלו עוד</span><FiArrowDown /></a>
  </section>
);

export default Hero;
