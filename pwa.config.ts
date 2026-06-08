import type { Config } from './types';

export default {
  id: '/',
  name: 'SWAGYO',
  shortName: 'Swagyo',
  description: 'www.swagyo.com',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'SWAGYO NEWS',
      shortName: 'News',
      description: 'The best news updates with tech & information',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'SWAGYO SHOP',
      shortName: 'Shop',
      description: 'The Best Shopping 🛒 with offers & deals',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: false, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '********-****-****-****-************', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.swagyo.com',
} satisfies Config;
