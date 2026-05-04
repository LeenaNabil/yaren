"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, Star, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const featuredTours = [
  {
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
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    features: ['طيران مباشر', 'فندق 5 نجوم', 'مرشد عربي'],
    badge: 'الأكثر مبيعاً'
  },
  {
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
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
    features: ['إقامة فاخرة', 'جولات يومية', 'وجبات شاملة'],
    badge: 'عرض خاص'
  },
  {
    id: 3,
    title: 'شرم الشيخ',
    destination: 'مصر',
    duration: '4 أيام',
    groupSize: '25-40 شخص',
    date: '10/7/2026',
    price: 1500,
    currency: 'شيكل',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
    features: ['شاطئ خاص', 'غوص وسنوركل', 'all inclusive'],
    badge: null
  },
  {
    id: 4,
    title: 'دبي الفاخرة',
    destination: 'الإمارات',
    duration: '5 أيام',
    groupSize: '20-30 شخص',
    date: '1 أغسطس 2026',
    price: 4200,
    currency: 'شيكل',
    rating: 4.9,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    features: ['فندق 5 نجوم', 'سفاري صحراوية', 'تسوق'],
    badge: 'جديد'
  },
]

export function FeaturedTours() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-wider">
            اكتشف وجهاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-4 mb-6 text-balance">
            الرحلات المميزة والقادمة
          </h2>
          <p className="text-gray-600 leading-relaxed">
            اختر من بين مجموعة واسعة من الرحلات المنظمة بإرشاد عربي محترف، 
            مع ضمان أفضل الأسعار وأعلى جودة الخدمات
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <Card 
              key={tour.id}
              className="group overflow-hidden border-0 shadow-lg card-hover bg-white"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badge */}
                {tour.badge && (
                  <span className="absolute top-4 right-4 bg-[#f5a623] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
                    {tour.badge}
                  </span>
                )}

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-[#1e3a5f]">{tour.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-600 mr-1">{tour.currency}</span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-[#f5a623] fill-current" />
                  <span className="text-sm font-medium text-[#1e3a5f]">{tour.rating}</span>
                  <span className="text-xs text-gray-500">({tour.reviews})</span>
                </div>
              </div>

              <CardContent className="p-5">
                {/* Location */}
                <div className="flex items-center gap-1 text-[#f5a623] text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{tour.destination}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 group-hover:text-[#f5a623] transition-colors">
                  {tour.title}
                </h3>

                {/* Info */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{tour.date}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/tours/${tour.id}`}>
                  <Button 
                    className="w-full bg-[#1e3a5f] hover:bg-[#2d5a87] text-white group/btn"
                  >
                    عرض التفاصيل
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover/btn:-translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/tours">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8"
            >
              عرض جميع الرحلات
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
