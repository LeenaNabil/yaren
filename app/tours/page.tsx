"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Calendar, MapPin, Users, Clock, Star, ArrowLeft, Search, SlidersHorizontal, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const allTours = [
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
    badge: 'الأكثر مبيعاً',
    category: 'تركيا'
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
    badge: 'عرض خاص',
    category: 'جورجيا'
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
    badge: null,
    category: 'مصر'
  },
  {
    id: 4,
    title: 'دبي الفاخرة',
    destination: 'الإمارات',
    duration: '5 أيام',
    groupSize: '20-30 شخص',
    date: '1/8/2026',
    price: 4200,
    currency: 'شيكل',
    rating: 4.9,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    features: ['فندق 5 نجوم', 'سفاري صحراوية', 'تسوق'],
    badge: 'جديد',
    category: 'الإمارات'
  },
  {
    id: 5,
    title: 'أذربيجان الساحرة',
    destination: 'أذربيجان',
    duration: '5 أيام',
    groupSize: '15-25 شخص',
    date: '20/7/2026',
    price: 2500,
    currency: 'شيكل',
    rating: 4.6,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1603803738555-8f9cbbd32dc6?w=800&q=80',
    features: ['فندق 4 نجوم', 'مرشد عربي', 'وجبات يومية'],
    badge: null,
    category: 'أذربيجان'
  },
  {
    id: 6,
    title: 'الأردن التاريخية',
    destination: 'الأردن',
    duration: '3 أيام',
    groupSize: '30-45 شخص',
    date: '5/6/2026',
    price: 900,
    currency: 'شيكل',
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80',
    features: ['البتراء', 'وادي رم', 'البحر الميت'],
    badge: 'الأقرب',
    category: 'الأردن'
  },
]

const categories = ['الكل', 'تركيا', 'جورجيا', 'مصر', 'الإمارات', 'أذربيجان', 'الأردن']
const priceRanges = ['الكل', 'أقل من 1500', '1500-3000', 'أكثر من 3000']

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [selectedPrice, setSelectedPrice] = useState('الكل')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTours = allTours.filter(tour => {
    const matchesSearch = tour.title.includes(searchQuery) || tour.destination.includes(searchQuery)
    const matchesCategory = selectedCategory === 'الكل' || tour.category === selectedCategory
    
    let matchesPrice = true
    if (selectedPrice === 'أقل من 1500') {
      matchesPrice = tour.price < 1500
    } else if (selectedPrice === '1500-3000') {
      matchesPrice = tour.price >= 1500 && tour.price <= 3000
    } else if (selectedPrice === 'أكثر من 3000') {
      matchesPrice = tour.price > 3000
    }

    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <Map className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الرحلات المنظمة</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              اكتشف مجموعتنا الواسعة من الرحلات المنظمة بإرشاد عربي محترف
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="ابحث عن رحلة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-[#f5a623]"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="py-6 px-6 border-2"
              >
                <SlidersHorizontal className="w-5 h-5 ml-2" />
                الفلاتر
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <Card className="p-6 animate-in slide-in-from-top-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">الوجهة</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCategory === cat
                              ? 'bg-[#1e3a5f] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">السعر (شيكل)</label>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setSelectedPrice(range)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedPrice === range
                              ? 'bg-[#f5a623] text-[#1e3a5f]'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            عرض {filteredTours.length} رحلة
          </p>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
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

          {/* No Results */}
          {filteredTours.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">لا توجد نتائج</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
