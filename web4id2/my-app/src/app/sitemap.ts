import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://kaykafe.com/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://kaykafe.com/menu',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://kaykafe.com/job',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kaykafe.com/member',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kaykafe.com/news',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

    ]
}
