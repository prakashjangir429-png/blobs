import { MetadataRoute } from 'next';

const baseUrl = 'https://www.digitonix.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/services',
    '/technologies',
    '/hireus',
    '/portfolio',
    '/careers'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}