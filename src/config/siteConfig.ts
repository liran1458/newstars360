export type NavLink = {
  id: string;
  label: string;
};

export const siteConfig = {
  instagramUrl: 'https://www.instagram.com/orel_abada?igsh=MXZjMDNqaTV6ZzAzNA%3D%3D&utm_source=qr',
  tiktokUrl: 'https://www.tiktok.com/@orel_abada19',
  formspreeUrl: 'https://formspree.io/f/mvzeovjz',
  youtubeEmbedUrl: 'https://www.youtube.com/embed/rceSphEVkpQ?autoplay=1&mute=1&playsinline=1',
  placeholderImages: [
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85'
  ],
  navLinks: [
    { id: 'about', label: 'קצת עליי' },
    { id: 'trust', label: 'האמון שלנו' },
    { id: 'story', label: 'הסיפור שלנו' }
  ] as NavLink[]
};
