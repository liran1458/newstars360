import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import heroImage from '../../assets/heronewstars.png';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-grid section-wrapper">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="eyebrow hero-eyebrow">
          אימונים אישיים. דרך אמיתית.
        </span>

        <h1>
          לא רק להתאמן.
          <br />
          <span>להפוך לשחקן.</span>
        </h1>

        <p>
          ליווי אישי לשחקנים צעירים שרוצים לבנות יסודות, ביטחון,
          קבלת החלטות והרגלים של מקצוענים.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            השארת פרטים
          </a>

          <a className="button button-ghost" href="#video">
            להכיר את הדרך
            <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94, y: 34 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.95,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-visual-stage">
          <div
            className="hero-orbit hero-orbit-one"
            aria-hidden="true"
          />

          <div
            className="hero-orbit hero-orbit-two"
            aria-hidden="true"
          />

          <div className="hero-glow" aria-hidden="true" />

          <img
            src={heroImage}
            alt="אוראל עבדה מאמן כדורגל אישי עומד עם כדור"
          />

          <div className="hero-float-card" aria-hidden="true">
            <span>NEW</span>
            <strong>STARS 360</strong>
          </div>
        </div>

        <div className="hero-stats" aria-label="יתרונות האימון">
          <div>
            <strong>360°</strong>
            <span>מעטפת לשחקן</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>יחס אישי</span>
          </div>

          <div>
            <strong>דרך</strong>
            <span>לפני תוצאה</span>
          </div>
        </div>
      </motion.div>
    </div>

    <a
      className="scroll-cue"
      href="#video"
      aria-label="גלילה לתוכן הבא"
    >
      <span>גלו עוד</span>
      <FiArrowDown aria-hidden="true" />
    </a>
  </section>
);

export default Hero;