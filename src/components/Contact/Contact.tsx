import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import SectionReveal from '../SectionReveal/SectionReveal';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      setError('');

      const response = await fetch(siteConfig.formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      navigate('/thank-you');
    } catch {
      setError('משהו השתבש בשליחת הפרטים. נסו שוב בעוד רגע.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionReveal className="contact" id="contact">
      <div className="section-wrapper">
        <div className="contact-card">
          <div className="contact-head">
            <h2>רוצים להתחיל תהליך?</h2>

            <p>
              השאירו פרטים ואחזור אליכם לשיחת היכרות קצרה.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">שם מלא</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              minLength={2}
              maxLength={40}
              pattern=".*\S.*"
              title="יש להזין שם מלא של לפחות 2 תווים"
            />

            <label htmlFor="phone">טלפון</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="numeric"
              minLength={10}
              maxLength={10}
              pattern="05[0-9]{8}"
              title="יש להזין מספר טלפון נייד תקין, לדוגמה 0501234567"
              onInput={(event) => {
                event.currentTarget.value =
                  event.currentTarget.value.replace(/\D/g, '');
              }}
            />

            <input
              type="hidden"
              name="_subject"
              value="ליד חדש מאתר NEW STARS 360"
            />

            {error && (
              <p className="contact-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="button button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'שולח פרטים...' : 'שליחת פרטים'}
            </button>

            <p className="contact-note">
              בלחיצה על שליחת פרטים אני מאשר שיחזרו אליי בנוגע לאימונים.
            </p>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Contact;