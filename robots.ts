/* eslint-disable indent */
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            // Указываем, что правила действуют для всех поисковиков (* означает "для всех")
            userAgent: '*',
            // Разрешаем индексировать весь сайт (главную страницу)
            allow: '/',
            // Запрещаем индексировать системные пути Next.js и возможные API
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://xn--42-9kclfb7a0agct0a.xn--p1ai/sitemap.xml',
    };
}