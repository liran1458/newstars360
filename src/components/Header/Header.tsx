import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import logo from '../../assets/logo.png';
import { siteConfig } from '../../config/siteConfig';

import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !menuOpen) return;

      closeMenu();
      burgerRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuOpen) return;

      const target = event.target as Node;

      const clickedInsideMenu = menuRef.current?.contains(target);
      const clickedBurger = burgerRef.current?.contains(target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner section-wrapper">
        {/* לוגו — במובייל נמצא בצד שמאל */}
        <a
          className="header-logo"
          href="#home"
          onClick={closeMenu}
          aria-label="NEW STARS 360 - חזרה לראש העמוד"
        >
          <span className="header-logo-box">
            <img src={logo} alt="לוגו NEW STARS 360" />
          </span>
        </a>

        {/* שם העסק — ממורכז במובייל */}
        <a
          className="header-brand"
          href="#home"
          onClick={closeMenu}
          aria-label="חזרה לראש העמוד"
        >
          NEW STARS 360
        </a>

        {/* ניווט מחשב + תפריט נפתח במובייל */}
        <nav
          id="mobile-navigation"
          ref={menuRef}
          className={`header-nav ${menuOpen ? 'open' : ''}`}
          aria-label="ניווט ראשי"
        >
          <div className="mobile-menu-head">
            <span>תפריט</span>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="סגירת התפריט"
            >
              <FiX />
            </button>
          </div>

          <ul>
            {siteConfig.navLinks.map((link, index) => (
              <li
                key={link.id}
                style={
                  {
                    '--menu-index': index,
                  } as CSSProperties
                }
              >
                <a href={`#${link.id}`} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="mobile-menu-cta"
            href="#contact"
            onClick={closeMenu}
          >
            השארת פרטים
          </a>
        </nav>

        {/* כפתור מחשב */}
        <div className="header-actions">
          <a className="header-cta" href="#contact">
            השארת פרטים
          </a>
        </div>

        {/* המבורגר — במובייל נמצא בצד ימין */}
        <button
          ref={burgerRef}
          type="button"
          className="header-burger"
          aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`mobile-menu-backdrop ${
          menuOpen ? 'visible' : ''
        }`}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;