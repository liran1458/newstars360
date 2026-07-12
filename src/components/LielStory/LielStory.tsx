import SectionReveal from '../SectionReveal/SectionReveal';
import withLielImage from '../../assets/with-liel.jpg';
import './LielStory.css';

const LielStory = () => {
  return (
    <SectionReveal className="liel-story" id="story">
      <div className="liel-story-inner section-wrapper">
        <div className="liel-story-copy">
          <span className="liel-story-decor">״</span>

          <h2>הסיפור שלנו – הדרך של ליאל עבדה</h2>

          <p>
            ליאל עבדה, אחי הגדול, שחקן נבחרת ישראל.
          </p>

          <p>
            ראיתי מקרוב מה נדרש משחקן כדי להגיע לרמות הגבוהות:
            לא רק כישרון – אלא עבודה יומיומית, משמעת, סבלנות ואמונה בדרך.
          </p>

          <p>
            את הערכים, ההרגלים והדרך של ליאל – לקחתי ותרגמתי לשפה של ילדים.
            מותאם לגיל, לקצב ולשלב שבו הם נמצאים.
          </p>

          <p className="liel-story-highlight">
            זה לא להעתיק קריירה – זה ללמוד מהדרך.
          </p>
        </div>

        <div className="liel-story-image-frame">
          <img src={withLielImage} alt="ליאל עבדה במשחק נבחרת ישראל" />
        </div>
      </div>
    </SectionReveal>
  );
};

export default LielStory;