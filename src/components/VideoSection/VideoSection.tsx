import { useEffect, useMemo, useRef, useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';
import './VideoSection.css';

const VideoSection = () => {
  const videoShellRef = useRef<HTMLDivElement>(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const hasVideo = !siteConfig.youtubeEmbedUrl.includes('VIDEO_ID');

  const videoUrl = useMemo(() => {
    if (!hasVideo) return '';

    const url = new URL(siteConfig.youtubeEmbedUrl);

    url.searchParams.set('autoplay', '1');
    url.searchParams.set('mute', '1');
    url.searchParams.set('playsinline', '1');

    url.searchParams.set('controls', '1');
    url.searchParams.set('disablekb', '0');
    url.searchParams.set('fs', '1');

    url.searchParams.set('cc_load_policy', '0');
    url.searchParams.set('iv_load_policy', '3');
    url.searchParams.set('rel', '0');
    url.searchParams.set('modestbranding', '1');

    url.searchParams.set('enablejsapi', '1');

    if (typeof window !== 'undefined') {
      url.searchParams.set('origin', window.location.origin);
    }

    return url.toString();
  }, [hasVideo]);

  useEffect(() => {
    const videoShell = videoShellRef.current;

    if (!videoShell || !hasVideo || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldLoadVideo(true);
        observer.disconnect();
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -5% 0px',
      },
    );

    observer.observe(videoShell);

    return () => observer.disconnect();
  }, [hasVideo, shouldLoadVideo]);

  const loadVideoManually = () => {
    if (!hasVideo) return;

    setShouldLoadVideo(true);
  };

  return (
    <section className="video-section" id="video">
      <div className="video-inner section-wrapper">
        <div className="video-copy">
          <span className="eyebrow">בואו נכיר</span>

          <h2>קצת עליי</h2>

          <p>
            בסרטון קצר אוראל מספר על הגישה שלו לאימון, על הדרך שהוא
            בונה עם כל שחקן ועל החשיבות של התמדה, ביטחון ועבודה נכונה
            לאורך זמן.
          </p>
        </div>

        <div
          ref={videoShellRef}
          className="shorts-shell"
        >
          {hasVideo && shouldLoadVideo ? (
            <>
              {!isVideoLoaded && (
                <div
                  className="video-loading"
                  aria-live="polite"
                >
                  טוען סרטון...
                </div>
              )}

              <iframe
                key={videoUrl}
                className="youtube-player"
                src={videoUrl}
                title="סרטון תדמית של אוראל עבדה"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
                onLoad={() => setIsVideoLoaded(true)}
              />
            </>
          ) : (
            <button
              type="button"
              className="video-placeholder"
              onClick={loadVideoManually}
              disabled={!hasVideo}
              aria-label={
                hasVideo
                  ? 'הפעלת הסרטון'
                  : 'עדיין לא הוגדר סרטון'
              }
            >
              <img
                src={siteConfig.placeholderImages[0]}
                alt=""
                aria-hidden="true"
              />

              <span
                className="video-overlay"
                aria-hidden="true"
              />

              <span
                className="play-button"
                aria-hidden="true"
              >
                <FiPlay />
              </span>

              <span className="video-label">
                {hasVideo
                  ? 'הסרטון יתחיל כשתגיעו אליו'
                  : 'כאן יופיע סרטון התדמית'}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;