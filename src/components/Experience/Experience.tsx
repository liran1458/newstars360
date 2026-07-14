import { FiCheckCircle } from 'react-icons/fi';
import SectionReveal from '../SectionReveal/SectionReveal';
import './Experience.css';

const points = [
   ' תעודת מאמן כדורגל פעיל ',
  'ניסיון עבודה עם ילדים ונוער',
  'רקע באימונים אישיים',
  'עבודה על יסודות, ביטחון וקבלת החלטות'
];

const Experience = () => {
  return (
    <SectionReveal className="experience" id="experience">
      <div className="experience-inner section-wrapper">
        <div className="experience-copy">
          <span className="eyebrow">ניסיון מהשטח</span>
          <h2>הניסיון שלי</h2>
          <div className="experience-list">
            {points.map((point) => (
              <div key={point} className="experience-item">
                <FiCheckCircle className="experience-icon" size={22} />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p className="experience-summary">
            הניסיון שלי מגיע מהשטח, מהמגרש, מהאימונים, ומהעבודה היום־יומית עם
            שחקנים צעירים.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Experience;
