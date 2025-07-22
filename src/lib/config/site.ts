import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/maskable@512.png',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Ranveer Singh',
    status: '🌸',
  },
  description: 'Some description',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Change this',
  themeColor: '#3D4451',
  title: 'Ranveer',
}
