import { FiShield, FiCalendar, FiTrendingUp, FiUsers } from 'react-icons/fi';
import SectionReveal from '../SectionReveal/SectionReveal';
import './Trust.css';

const cards = [
  {
    icon: FiUsers,
    title: 'עבודה אישית עם כל שחקן',
    description: 'תשומת לב מלאה לצרכים, לסגנון ולמטרות של כל ילד.'
  },
  {
    icon: FiCalendar,
    title: 'תכנית שנתית מסודרת',
    description: 'שלב אחרי שלב לעבודה חכמה וידידותית לאורך זמן.'
  },
  {
    icon: FiTrendingUp,
    title: 'מעקב קבוע אחר התקדמות',
    description: 'עדכונים וסידור נקודות חוזקה וחולשה בכל שלב.'
  },
  {
    icon: FiShield,
    title: 'שילוב של מקצוענות וערכים',
    description: 'כדורגל עם אחריות, משמעת וכבוד למגרש ולחיים.'
  }
];

const Trust = () => {
  return (
    <SectionReveal className="trust" id="trust">
      <div className="trust-inner section-wrapper">
        <div className="trust-head">
          <h2>למה לסמוך עליי</h2>
          <p>כי אני לא מוכר חלומות,  אני בונה תהליכים.</p>
        </div>

        <div className="trust-grid">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="trust-card">
                <span className="trust-icon">
                  <Icon size={24} />
                </span>

                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>

        <p className="trust-footer">
          המטרה שלי היא לא להפוך ילד לשחקן ביום, אלא לבנות שחקן לשנים.
        </p>
      </div>
    </SectionReveal>
  );
}

export default Trust;
