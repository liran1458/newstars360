# NEW STARS 360

דף נחיתה React + Vite + TypeScript בעברית וב־RTL.

## הרצה

```bash
npm install
npm run dev
```

## הגדרות שצריך להחליף

כל הקישורים מרוכזים בקובץ:

```text
src/config/siteConfig.ts
```

יש להחליף שם:

- מספר וקישור WhatsApp
- קישור Instagram
- קישור TikTok
- Formspree Form ID
- YouTube Shorts VIDEO_ID

### הוספת Shorts

מקישור כגון:

```text
https://www.youtube.com/shorts/ABC123
```

לוקחים את `ABC123` ומחליפים בקובץ ההגדרות:

```text
https://www.youtube-nocookie.com/embed/ABC123
```

## תמונות

התמונות המקומיות נמצאות ב־`src/assets`.
אפשר להחליף אותן תוך שמירה על אותם שמות קבצים.
תמונות ההמחשה המרוחקות נמצאות במערך `placeholderImages` בקובץ ההגדרות.

## Build

```bash
npm run build
```
