import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AccessibilityToolbar } from '@/components/ui/accessibility-toolbar'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'يارين تورز | Yaren Tours - بوابتك لاكتشاف العالم',
  description: 'يارين تورز - المنصة الأكبر للرحلات المنظمة في البلاد. رحلات سياحية، طيران، فنادق، وباصات مع مرشدين عرب محترفين. احجز الآن!',
  keywords: ['سياحة', 'رحلات', 'طيران', 'فنادق', 'يارين تورز', 'رحلات منظمة', 'سفر'],
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'يارين تورز | Yaren Tours',
    description: 'بوابتك الدائمة لاكتشاف العالم بأعلى معايير الراحة والتنظيم',
    images: ['/images/logo.jpg'],
    locale: 'ar_SA',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.className} antialiased`}>
        <a href="#main-content" className="skip-link">تخطي إلى المحتوى الرئيسي</a>
        <AccessibilityToolbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
