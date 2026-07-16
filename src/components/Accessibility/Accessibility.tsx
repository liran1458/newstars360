import { useEffect, useState } from 'react';
import { FiMinus, FiPlus, FiRefreshCw, FiX } from 'react-icons/fi';
import { MdAccessibilityNew } from 'react-icons/md';
import './Accessibility.css';

const Accessibility = () => {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accessibility-font-scale', `${fontScale / 100}`);
    root.classList.toggle('a11y-contrast', contrast);
    root.classList.toggle('a11y-grayscale', grayscale);
    root.classList.toggle('a11y-underline-links', underlineLinks);
  }, [fontScale, contrast, grayscale, underlineLinks]);

  const reset = () => {
    setFontScale(100);
    setContrast(false);
    setGrayscale(false);
    setUnderlineLinks(false);
  };

  return (
    <>
      <button
        type="button"
        className="accessibility-trigger"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        aria-controls="accessibility-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <MdAccessibilityNew aria-hidden="true" />
      </button>

      <aside id="accessibility-panel" className={`accessibility-panel ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="אפשרויות נגישות">
        <div className="accessibility-head">
          <div>
            <strong>נגישות</strong>
            <span>התאמת תצוגת האתר</span>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="סגירת תפריט נגישות"><FiX /></button>
        </div>

        <div className="accessibility-options">
          <div className="accessibility-font-row">
            <span>גודל טקסט</span>
            <div>
              <button type="button" onClick={() => setFontScale((v) => Math.max(90, v - 10))} aria-label="הקטנת טקסט"><FiMinus /></button>
              <output aria-live="polite">{fontScale}%</output>
              <button type="button" onClick={() => setFontScale((v) => Math.min(130, v + 10))} aria-label="הגדלת טקסט"><FiPlus /></button>
            </div>
          </div>

          <button type="button" className={contrast ? 'active' : ''} aria-pressed={contrast} onClick={() => setContrast((v) => !v)}>ניגודיות גבוהה</button>
          <button type="button" className={grayscale ? 'active' : ''} aria-pressed={grayscale} onClick={() => setGrayscale((v) => !v)}>גווני אפור</button>
          <button type="button" className={underlineLinks ? 'active' : ''} aria-pressed={underlineLinks} onClick={() => setUnderlineLinks((v) => !v)}>הדגשת קישורים</button>
          <button type="button" className="accessibility-reset" onClick={reset}><FiRefreshCw /> איפוס התאמות</button>
        </div>

        <p className="accessibility-note">האתר נבנה עם ניווט מקלדת, מבנה סמנטי, טקסטים חלופיים והתאמה להעדפת הפחתת תנועה.</p>
      </aside>
    </>
  );
};

export default Accessibility;
