import SectionReveal from '../SectionReveal/SectionReveal';
import aboutImage from '../../assets/above.jpg';
import './About.css';

const About = () => (
  <SectionReveal className="about" id="about">
    <div className="about-inner section-wrapper">
      <div className="about-image-wrap">
        <div className="about-image-frame">
          <img src={aboutImage} alt="אוראל עבדה באימון כדורגל" />
        </div>
        <div className="about-chip">
          <strong>דרך חיים</strong>
          <span>לא רק תחביב</span>
        </div>
      </div>

      <div className="about-copy">
        <span className="eyebrow">קצת עליי</span>
        <h2>
          כדורגל הוא לא מה שאני עושה.
          <br />
          הוא מי שאני.
        </h2>
        <p>
          שמי אוראל עבדה. מאמן כדורגל, מנטור לשחקנים צעירים, ואדם שחי את עולם
          הכדורגל מבפנים.
        </p>
        <p>
          גדלתי בבית שבו כדורגל הוא לא תחביב – אלא דרך חיים. כבר בגיל צעיר הבנתי
          שההבדל בין שחקן טוב לשחקן מצליח הוא לא רק כישרון, אלא דרך, התמדה ואופי.
        </p>
      </div>
    </div>
  </SectionReveal>
);

export default About;
