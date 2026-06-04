import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/offshore-fishing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/inshore-fishing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/best-of-nosara', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/booking', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
