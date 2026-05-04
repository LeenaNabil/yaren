"use client"

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { InteractiveMap } from '@/components/tours/interactive-map'
import { Calendar, MapPin, Users, Clock, Star, Check, MessageCircle, Phone, ArrowRight, Plane, Hotel, Utensils, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// بيانات الرحلات
const toursData: Record<string, {
  id: number
  title: string
  destination: string
  duration: string
  groupSize: string
  date: string
  price: number
  currency: string
  rating: number
  reviews: number
  images: string[]
  description: string
  guide: { name?: string; experience?: string; image?: string }
  itinerary: { day: number; title: string; description: string }[]
  includes: string[]
  excludes: string[]
  interactiveMap?: {
    mapImage: string
    hotspots: {
      id: string
      name: string
      description: string
      image: string
      x: number
      y: number
      details?: string
    }[]
  }
}> = {
  '1': {
    id: 1,
    title: 'رحلة إسطنبول الساحرة',
    destination: 'تركيا',
    duration: '7 أيام',
    groupSize: '20-30 شخص',
    date: '15/6/2026',
    price: 3500,
    currency: 'شيكل',
    rating: 4.9,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80',
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    description: 'استمتع برحلة استثنائية إلى إسطنبول، المدينة التي تجمع بين سحر الشرق وجمال الغرب. ستكتشف معالم تاريخية عريقة، أسواق نابضة بالحياة، ومأكولات تركية أصيلة. رحلة منظمة بالكامل مع مرشد عربي محترف.',
    guide: {
      name: 'أحمد الخطيب',
      experience: '10 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
    },
    itinerary: [
      { day: 1, title: 'الوصول إلى إسطنبول', description: 'استقبال في المطار والتوجه للفندق. جولة مسائية في منطقة تقسيم.' },
      { day: 2, title: 'جولة السلطان أحمد', description: 'زيارة آيا صوفيا، المسجد الأزرق، قصر توبكابي، والبازار الكبير.' },
      { day: 3, title: 'مضيق البوسفور', description: 'رحلة بحرية ساحرة في مضيق البوسفور مع زيارة قلعة روملي.' },
      { day: 4, title: 'برج الفتاة وأسكودار', description: 'زيارة الجانب الآسيوي من إسطنبول وبرج الفتاة الشهير.' },
      { day: 5, title: 'يوم التسوق', description: 'زيارة أشهر مراكز التسوق في إسطنبول ومنطقة نيشانتاشي.' },
      { day: 6, title: 'جزر الأميرات', description: 'رحلة يوم كامل إلى جزر الأميرات الخلابة.' },
      { day: 7, title: 'العودة', description: 'وقت حر صباحاً ثم التوجه للمطار للعودة.' },
    ],
    includes: [
      'تذاكر الطيران ذهاب وإياب',
      'إقامة 6 ليالي في فندق 5 نجوم',
      'وجبة إفطار يومية',
      'جميع التنقلات بباص سياحي مكيف',
      'مرشد سياحي عربي محترف',
      'رسوم دخول جميع المعالم',
      'رحلة البوسفور البحرية',
      'رحلة جزر الأميرات',
    ],
    excludes: [
      'وجبات الغداء والعشاء',
      'المصاريف الشخصية',
      'التأمين الصحي للسفر',
      'الأنشطة الاختيارية',
    ],
    interactiveMap: {
      mapImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80', // استبدل برابط خريطتك
      hotspots: [
        {
          id: 'ayasophia',
          name: 'آيا صوفيا',
          description: 'تحفة معمارية من العصر البيزنطي، تجمع بين الحضارات والعبادات المختلفة. شاهد القبة العظيمة والفسيفساء القديمة.',
          image: 'https://images.unsplash.com/photo-1541091762094-d3bde0ec6b94?w=400&q=80',
          x: 45,
          y: 35,
          details: 'الدخول مشمول في البرنامج. الزيارة تستغرق حوالي ساعة ونصف.'
        },
        {
          id: 'bluemosque',
          name: 'المسجد الأزرق',
          description: 'أيقونة إسطنبول بتصميمه الفريد والمفروشات الزرقاء الساحرة. موقع خلاب خاصة عند الغروب.',
          image: 'https://images.unsplash.com/photo-1564516077-247f0f6a3e3f?w=400&q=80',
          x: 48,
          y: 38,
          details: 'الدخول مجاني. أفضل وقت للزيارة في الصباح الباكر.'
        },
        {
          id: 'bosphorus',
          name: 'مضيق البوسفور',
          description: 'جولة بحرية ساحرة تطل على القصور العثمانية والجسور المعلقة. أفضل طريقة للاستمتاع بطبيعة إسطنبول.',
          image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80',
          x: 50,
          y: 50,
          details: 'رحلة بحرية مدتها ساعتان. التذاكر مشمولة في البرنامج.'
        },
        {
          id: 'galatatower',
          name: 'برج غلاطة',
          description: 'ناطحة سحاب تاريخية توفر إطلالة بانورامية على المدينة. مقهى في الأعلى لتناول القهوة العربية.',
          image: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&q=80',
          x: 42,
          y: 32,
          details: 'الدخول برسم إضافي. الإطلالة من الأعلى رائعة خاصة عند الغروب.'
        },
        {
          id: 'grandbasaar',
          name: 'البازار الكبير',
          description: 'سوق تاريخي شهير بـ 5000+ متجر. يبيع كل شيء من الحرف اليدوية إلى الحرير والتوابل.',
          image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=400&q=80',
          x: 47,
          y: 40,
          details: 'يوم كامل للتسوق. تجنب الزحام في أوقات الذروة.'
        },
        {
          id: 'princessislands',
          name: 'جزر الأميرات',
          description: 'مجموعة جزر خلابة قرب إسطنبول. شواطئ رملية نظيفة وأماكن هادئة بعيداً عن صخب المدينة.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
          x: 55,
          y: 55,
          details: 'رحلة يوم كامل. العودة للفندق قبل الغروب.'
        }
      ]
    }
  },
  '2': {
    id: 2,
    title: 'جورجيا الخضراء',
    destination: 'جورجيا',
    duration: '6 أيام',
    groupSize: '15-25 شخص',
    date: '22/6/2026',
    price: 2800,
    currency: 'شيكل',
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80',
      'https://images.unsplash.com/photo-1586423702681-4ed6c1fd8a27?w=800&q=80',
      'https://images.unsplash.com/photo-1609764384735-d4c3e07f9ee3?w=800&q=80',
    ],
    description: 'اكتشف جمال جورجيا الطبيعي الخلاب. من جبال القوقاز الشامخة إلى كروم العنب الممتدة، رحلة تجمع بين الطبيعة والتاريخ والمأكولات الشهية.',
    guide: {
      name: 'محمد سعيد',
      experience: '8 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
    },
    itinerary: [
      { day: 1, title: 'الوصول لتبليسي', description: 'استقبال في المطار وجولة مسائية في المدينة القديمة.' },
      { day: 2, title: 'جولة تبليسي', description: 'زيارة قلعة ناريكالا، حمامات الكبريت، وجسر السلام.' },
      { day: 3, title: 'كازبيجي', description: 'رحلة إلى جبال القوقاز وكنيسة جيرجيتي الشهيرة.' },
      { day: 4, title: 'كاخيتي', description: 'زيارة منطقة النبيذ وتذوق النبيذ الجورجي الأصيل.' },
      { day: 5, title: 'متسخيتا وغوري', description: 'زيارة العاصمة القديمة ومتحف ستالين.' },
      { day: 6, title: 'العودة', description: 'وقت حر للتسوق ثم التوجه للمطار.' },
    ],
    includes: [
      'تذاكر الطيران ذهاب وإياب',
      'إقامة 5 ليالي في فندق 4 نجوم',
      'وجبة إفطار وعشاء يومياً',
      'جميع التنقلات',
      'مرشد سياحي عربي',
      'رسوم دخول المعالم',
    ],
    excludes: [
      'وجبات الغداء',
      'المصاريف الشخصية',
      'التأمين الصحي',
    ]
  }
}

// Default tour for unknown IDs
const defaultTour = {
  id: 0,
  title: 'رحلة سياحية',
  destination: 'وجهة سياحية',
  duration: '5 أيام',
  groupSize: '20-30 شخص',
  date: 'قريباً',
  price: 2000,
  currency: 'شيكل',
  rating: 4.5,
  reviews: 50,
  images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80'],
  description: 'رحلة منظمة بالكامل مع مرشد عربي محترف.',
  guide: { name: 'المرشد', experience: '5 سنوات خبرة', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  itinerary: [{ day: 1, title: 'بداية الرحلة', description: 'الوصول والاستقبال' }],
  includes: ['الطيران', 'الفندق', 'المواصلات', 'المرشد'],
  excludes: ['المصاريف الشخصية']
}

export default function TourDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const tour = toursData[id] || defaultTour

  const guideName = tour.guide?.name?.trim() || 'نخبة من أمهر المرشدين'
  const guideExperience = tour.guide?.experience?.trim() || 'مرشدون معتمدون بخبرة عالية'
  const guideImage = tour.guide?.image?.trim() || '/images/logo.jpg'
  const guideAlt = tour.guide?.name?.trim() ? tour.guide.name : 'شعار يارين تورز'

  const generateWhatsAppMessage = () => {
    const message = `مرحباً يارين تورز، أرغب في الاستفسار عن رحلة:\n\n${tour.title}\nالوجهة: ${tour.destination}\nالتاريخ: ${tour.date}\nالسعر: ${tour.price} ${tour.currency}\n\nأرجو التواصل معي لتأكيد الحجز.`
    return encodeURIComponent(message)
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-20 min-h-screen bg-gray-50">
        {/* Hero Image Gallery */}
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src={tour.images[0]}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Back Button */}
          <Link 
            href="/tours"
            className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للرحلات
          </Link>

          {/* Tour Info Overlay */}
          <div className="absolute bottom-0 right-0 left-0 p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 text-[#f5a623] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{tour.destination}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tour.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#f5a623]" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#f5a623]" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#f5a623]" />
                  <span>{tour.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#f5a623] fill-current" />
                  <span>{tour.rating} ({tour.reviews} تقييم)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-[#1e3a5f]">
                    <Camera className="w-6 h-6 text-[#f5a623]" />
                    عن الرحلة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
                </CardContent>
              </Card>

              {/* Image Gallery */}
              {tour.images.length > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1e3a5f]">معرض الصور</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {tour.images.slice(1).map((image, index) => (
                        <div key={index} className="relative h-40 rounded-xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`${tour.title} - صورة ${index + 2}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Itinerary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-[#1e3a5f]">
                    <Calendar className="w-6 h-6 text-[#f5a623]" />
                    برنامج الرحلة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-200 mt-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <h4 className="text-lg font-bold text-[#1e3a5f] mb-2">{day.title}</h4>
                          <p className="text-gray-600">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              {tour.interactiveMap && (
                <InteractiveMap
                  title={`استكشف ${tour.destination}`}
                  mapImage={tour.interactiveMap.mapImage}
                  hotspots={tour.interactiveMap.hotspots}
                  mapAlt={`خريطة تفاعلية لـ ${tour.destination}`}
                />
              )}

              {/* Includes & Excludes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      ما يشمله السعر
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center">✕</span>
                      غير مشمول
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tour.excludes.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700">
                          <span className="w-5 h-5 flex items-center justify-center text-red-500">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <Card className="sticky top-28 overflow-hidden">
                <div className="bg-[#1e3a5f] text-white p-6 text-center">
                  <p className="text-sm opacity-80 mb-2">السعر للشخص الواحد</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold">{tour.price.toLocaleString()}</span>
                    <span className="text-xl">{tour.currency}</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  {/* Guide Info */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#f5a623]/10">
                      <Image
                        src={guideImage}
                        alt={guideAlt}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#1e3a5f]">{guideName}</p>
                      <p className="text-sm text-gray-600">المرشد السياحي</p>
                      <p className="text-xs text-[#f5a623]">{guideExperience}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <a
                    href={`https://wa.me/972000000000?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg">
                      <MessageCircle className="w-6 h-6 ml-2" />
                      احجز عبر واتساب
                    </Button>
                  </a>

                  <a href="tel:+972000000000" className="block">
                    <Button variant="outline" className="w-full border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white py-6 text-lg">
                      <Phone className="w-6 h-6 ml-2" />
                      اتصل للاستفسار
                    </Button>
                  </a>

                  {/* eSIM Promo */}
                  <Card className="overflow-hidden bg-[#f8fafc]">
                    <CardHeader>
                      <CardTitle className="text-[#1e3a5f]">انترنت دولي مع eSIMo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        حمل التطبيق الآن وتمتع بإنترنت عالمي مع رمز خصم 10%:
                        <span className="font-semibold"> YAREN</span>
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>✨ خدمة eSIMo من "يارين تورز" تضمن لك اتصال دائم بدون تبديل شرائح.</p>
                        <p>🌍 تغطية في أكثر من 200 وجهة.</p>
                        <p>💰 باقات تبدأ من $3.9 لـ1 جيجا.</p>
                        <p>📞 مكالمات دولية بسعر $0.01 للدقيقة.</p>
                        <p>🧑‍💻 دعم فني 24/7 داخل التطبيق.</p>
                        <p>🎁 كاش باك 5% لكل عملية شراء.</p>
                        <p>⚡ تفعيل سريع بدون سيم فيزي.</p>
                      </div>
                      <a href="https://esimo.sng.link/Dfwtk/8vfdl?pcn=yaren&_smtype=3" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#1e3a5f] text-white hover:bg-[#16314a]">نزّل التطبيق الآن</Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <Plane className="w-6 h-6 mx-auto text-[#f5a623] mb-1" />
                      <p className="text-xs text-gray-600">طيران مباشر</p>
                    </div>
                    <div className="text-center">
                      <Hotel className="w-6 h-6 mx-auto text-[#f5a623] mb-1" />
                      <p className="text-xs text-gray-600">فندق 5 نجوم</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-6 h-6 mx-auto text-[#f5a623] mb-1" />
                      <p className="text-xs text-gray-600">مرشد عربي</p>
                    </div>
                    <div className="text-center">
                      <Utensils className="w-6 h-6 mx-auto text-[#f5a623] mb-1" />
                      <p className="text-xs text-gray-600">وجبات شاملة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
