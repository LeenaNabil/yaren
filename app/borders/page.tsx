"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MapPin, Clock, DollarSign, ExternalLink, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Border {
  id: number
  name: string
  nameEn: string
  location: string
  mainLink: string
  hoursLink: string
  description: string
  features: string[]
}

const borders: Border[] = [
  {
    id: 1,
    name: 'معبر نهر الأردن',
    nameEn: 'Jordan River Crossing',
    location: 'منطقة الغور',
    mainLink: 'https://www.iaa.gov.il/land-border-crossings/jordan-river/',
    hoursLink: 'https://www.iaa.gov.il/land-border-crossings/jordan-river/opening-hours-jorden-river/',
    description: 'المعبر الأساسي والأقدم الذي يربط بين فلسطين والأردن عبر نهر الأردن.',
    features: [
      'المعبر الأساسي والأقدم',
      'موقع استراتيجي في منطقة الغور',
      'خيارات دفع متعددة',
      'جهاز تحويل عملات في الموقع'
    ]
  },
  {
    id: 2,
    name: 'معبر طابا',
    nameEn: 'Menachem Begin Crossing (Taba)',
    location: 'الجنوب - منطقة النقب',
    mainLink: 'https://www.iaa.gov.il/land-border-crossings/menachem-begin/',
    hoursLink: 'https://www.iaa.gov.il/land-border-crossings/menachem-begin/opening-hours-begin/',
    description: 'معبر طابا الذي يربط بين إسرائيل ومصر عبر سيناء.',
    features: [
      'الربط مع مصر والسياحة المصرية',
      'موقع قريب من مدينة إيلات',
      'خيارات سفر متنوعة',
      'سهولة الوصول من الجنوب'
    ]
  },
  {
    id: 3,
    name: 'معبر إسحاق رابين (العقبة)',
    nameEn: 'Yitzhak Rabin Crossing (Eilat-Aqaba)',
    location: 'العقبة',
    mainLink: 'https://www.iaa.gov.il/land-border-crossings/yitzhak-rabin/',
    hoursLink: 'https://www.iaa.gov.il/land-border-crossings/yitzhak-rabin/opening-hours-rabin/',
    description: 'معبر العقبة الحديث الذي يربط بين إسرائيل والأردن في الجنوب.',
    features: [
      'معبر حديث بمرافق عصرية',
      'سهولة الوصول من مدينة إيلات',
      'خدمات سريعة وفعالة',
      'موقع قريب من البحر الأحمر'
    ]
  }
]

export default function BordersPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1200" height="400" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">المعابر الحدودية</h1>
              <p className="text-xl opacity-90">معلومات شاملة عن المعابر والتسهيلات المتاحة</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Important Info */}
          <Alert className="mb-8 border-[#f5a623] bg-[#FEF3E2]">
            <AlertCircle className="h-5 w-5 text-[#f5a623]" />
            <AlertDescription className="text-right text-gray-800">
              <strong>ملاحظة هامة:</strong> يرجى التأكد من ساعات العمل الخاصة بالمعابر خلال الأعياد الرسمية والمناسبات من خلال الروابط أدناه.
            </AlertDescription>
          </Alert>

          {/* Borders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {borders.map((border) => (
              <Card key={border.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{border.name}</h2>
                  <p className="text-sm opacity-90">{border.nameEn}</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f5a623] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a5f]">الموقع</p>
                      <p className="text-sm text-gray-600">{border.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">{border.description}</p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-[#1e3a5f]">المميزات:</p>
                    <ul className="space-y-1">
                      {border.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    <a href={border.mainLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
                        معلومات المعبر
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <a href={border.hoursLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-[#f5a623] hover:bg-[#e09000] text-white">
                        ساعات العمل
                        <Clock className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-[#f5a623]" />
              خيارات الدفع
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1e3a5f]">الدفع المسبق (اونلاين)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    يمكنكم دفع رسوم المعابر مسبقاً عبر الموقع الرسمي لتوفير الوقت على المعبر والتسريع في العملية.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-900 mb-2">المميزات:</p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>✓ توفير وقت كبير</li>
                      <li>✓ عملية آمنة وموثوقة</li>
                      <li>✓ تأكيد فوري للدفع</li>
                      <li>✓ عدم الحاجة لجلب نقود</li>
                    </ul>
                  </div>
                  <a href="https://borderpay.metropolinet.co.il/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#1e3a5f] hover:bg-[#16314a] text-white">
                      اذهب للدفع المسبق
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1e3a5f]">الدفع في الموقع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    يمكنكم الدفع نقداً أو بالبطاقة الائتمانية مباشرة عند وصولكم إلى المعبر الحدودي.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-900 mb-2">خيارات الدفع:</p>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>💵 دفع نقداً</li>
                      <li>💳 بطاقة ائتمانية</li>
                      <li>🏧 أجهزة صراف آلي متوفرة</li>
                      <li>💱 خدمة تحويل العملات</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 pt-4 border-t">
                    ملاحظة: قد تواجه طوابير في أوقات الذروة. الدفع المسبق يوفر الوقت والجهد.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          <Card className="bg-gradient-to-br from-[#f5a623]/10 to-[#f5a623]/5 border-[#f5a623]">
            <CardHeader>
              <CardTitle className="text-[#1e3a5f]">نصائح مهمة للسفر عبر المعابر</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3">قبل الوصول:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ تأكد من صلاحية جواز السفر</li>
                    <li>✓ احذر من ساعات الذروة</li>
                    <li>✓ تفقد ساعات العمل الحالية</li>
                    <li>✓ حضر وثائقك الضرورية</li>
                    <li>✓ تواصل مع المرشد السياحي</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3">في المعبر:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ اتبع تعليمات الموظفين</li>
                    <li>✓ جهز وثائقك مسبقاً</li>
                    <li>✓ لا تأخذ صوراً دون إذن</li>
                    <li>✓ احمل نسخة من إثبات الدفع</li>
                    <li>✓ توقع التفتيش الأمني</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">هل تحتاج للمساعدة؟</h2>
            <p className="text-lg text-gray-600 mb-8">فريقنا جاهز لمساعدتك في كل خطوة من رحلتك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/972000000000?text=السلام%20عليكم%20أحتاج%20مساعدة%20بشأن%20المعابر%20الحدودية" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg">
                  تواصل عبر واتساب
                </Button>
              </a>
              <a href="tel:+972000000000">
                <Button variant="outline" className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-lg">
                  اتصل بنا الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
