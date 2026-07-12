import { FiPlay } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';
import SectionReveal from '../SectionReveal/SectionReveal';
import './VideoSection.css';

const VideoSection = () => {
  const hasVideo = !siteConfig.youtubeEmbedUrl.includes('VIDEO_ID');

  return (
    <SectionReveal className="video-section" id="video">
      <div className="video-inner section-wrapper">
        <div className="video-copy">
          <span className="eyebrow">להכיר את הדרך</span>
          <h2>כמה מילים מאוראל</h2>
          <p>
            בסרטון קצר אוראל מספר על הגישה שלו לאימון, על הדרך שהוא בונה עם כל
            שחקן ועל החשיבות של התמדה, ביטחון ועבודה נכונה לאורך זמן.
          </p>
        </div>

        <div className="shorts-shell">
          {hasVideo ? (
            <iframe
              src={siteConfig.youtubeEmbedUrl}
              title="סרטון תדמית של אוראל עבדה"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="video-placeholder"
              role="img"
              aria-label="מקום לסרטון תדמית של אוראל עבדה"
            >
              <img
                src={siteConfig.placeholderImages[0]}
                alt="סרטון תדמית של אוראל עבדה - תמונת המחשה זמנית"
              />
              <span className="video-overlay" />
              <span className="play-button">
                <FiPlay />
              </span>
              <span className="video-label">כאן יופיע סרטון התדמית</span>
            </div>
          )}
        </div>
      </div>
    </SectionReveal>
  );
};

export default VideoSection;
