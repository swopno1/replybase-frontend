import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = ['', '/privacy', '/terms'];

  const routes = mainRoutes.map((route) => ({
    url: `https://replybase.co.uk${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}