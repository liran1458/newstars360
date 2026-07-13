import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <div className="thank-you-icon">✓</div>

        <h1>הפרטים התקבלו!</h1>

        <p>
          תודה שפניתם אלינו.
          <br />
          נחזור אליכם בהקדם.
        </p>

        <button
          type="button"
          className="button button-primary"
          onClick={() => navigate('/')}
        >
          חזרה לאתר
        </button>
      </div>
    </main>
  );
};

export default ThankYou;