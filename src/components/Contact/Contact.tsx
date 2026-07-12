import { siteConfig } from '../../config/siteConfig';
import SectionReveal from '../SectionReveal/SectionReveal';
import './Contact.css';

const Contact = () => {
  return (
  <SectionReveal className="contact" id="contact">
    <div className="section-wrapper">
      <div className="contact-card">
        <div className="contact-head">
          <h2>רוצים להתחיל תהליך?</h2>
          <p>השאירו פרטים ואחזור אליכם לשיחת היכרות קצרה.</p>
        </div>

        <form
          action={siteConfig.formspreeUrl}
          method="POST"
          className="contact-form"
        >
          <label htmlFor="fullName">שם מלא</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
          />

          <label htmlFor="phone">טלפון</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
          />

          <label htmlFor="email">אימייל (לא חובה)</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />

          <input
            type="hidden"
            name="_subject"
            value="ליד חדש מאתר NEW STARS 360"
          />

          <button type="submit" className="button button-primary">
            שליחת פרטים
          </button>

          <p className="contact-note">
            בלחיצה על שליחת פרטים אני מאשר שיחזרו אליי בנוגע לאימונים.
          </p>
        </form>
      </div>
    </div>
  </SectionReveal>
);}
export default Contact;
