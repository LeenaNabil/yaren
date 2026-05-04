"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hotel, MapPin, Star, MessageCircle, ChevronDown, Waves, Mountain, Building2, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// مناطق الفنادق
const hotelRegions = [
  {
    id: 'eilat',
    name: 'إيلات والبحر الميت',
    icon: Waves,
    description: 'الجانب المحلي',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    areas: ['إيلات', 'البحر الميت'],
    hotels: [
      { name: 'فندق هيلتون إيلات', stars: 5, price: 800, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
      { name: 'فندق دان بانوراما', stars: 4, price: 600, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80' },
      { name: 'منتجع البحر الميت', stars: 5, price: 900, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80' },
    ]
  },
  {
    id: 'jericho',
    name: 'أريحا والضفة',
    icon: Mountain,
    description: 'فنادق أريحا والبلاد',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    areas: ['أريحا', 'رام الله', 'بيت لحم'],
    hotels: [
      { name: 'فندق انتركونتيننتال أريحا', stars: 5, price: 450, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80' },
      { name: 'فندق أريحا ريزورت', stars: 4, price: 350, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80' },
    ]
  },
  {
    id: 'jordan',
    name: 'الأردن',
    icon: Building2,
    description: 'عمان | العقبة | البحر الميت',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80',
    areas: ['عمان', 'العقبة', 'البحر الميت - الأردني'],
    hotels: [
      { name: 'فيرمونت عمان', stars: 5, price: 700, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80' },
      { name: 'كمبنسكي العقبة', stars: 5, price: 650, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80' },
      { name: 'موفنبيك البحر الميت', stars: 5, price: 600, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80' },
      { name: 'ماريوت عمان', stars: 5, price: 550, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
    ]
  },
  {
    id: 'sinai',
    name: 'سيناء (مصر)',
    icon: Sun,
    description: 'شرم الشيخ | دهب | طابا',
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
    areas: ['شرم الشيخ', 'دهب', 'طابا'],
    hotels: [
      { name: 'ريتز كارلتون شرم الشيخ', stars: 5, price: 500, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80' },
      { name: 'فور سيزونز شرم الشيخ', stars: 5, price: 550, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80' },
      { name: 'هيلتون دهب', stars: 5, price: 400, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80' },
      { name: 'سوفيتيل طابا', stars: 5, price: 450, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80' },
    ]
  },
]

export default function HotelsPage() {
  const [selectedRegion, setSelectedRegion] = useState<typeof hotelRegions[0] | null>(null)
  const [selectedArea, setSelectedArea] = useState('')

  const generateWhatsAppMessage = (hotelName: string, price: number) => {
    const message = `مرحباً يارين تورز، أرغب في الاستفسار عن حجز فندق:\n\nالفندق: ${hotelName}\nالمنطقة: ${selectedRegion?.name || ''}\n${selectedArea ? `المدينة: ${selectedArea}\n` : ''}السعر التقريبي: ${price} شيكل/ليلة\n\nأرجو إفادتي بالتفاصيل والتواريخ المتاحة.`
    return encodeURIComponent(message)
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <Hotel className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حجز الفنادق</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              اختر من بين أفضل الفنادق في أشهر الوجهات السياحية
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Region Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {hotelRegions.map((region) => (
              <Card 
                key={region.id}
                className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedRegion?.id === region.id
                    ? 'ring-2 ring-[#f5a623] shadow-xl scale-105'
                    : 'hover:shadow-xl card-hover'
                }`}
                onClick={() => {
                  setSelectedRegion(region)
                  setSelectedArea('')
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#f5a623] flex items-center justify-center">
                    <region.icon className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">{region.name}</h3>
                  <p className="text-sm text-gray-600">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Region Hotels */}
          {selectedRegion && (
            <div className="animate-in slide-in-from-bottom-4">
              {/* Area Filter */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                  فنادق {selectedRegion.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedArea('')}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedArea === ''
                        ? 'bg-[#1e3a5f] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    الكل
                  </button>
                  {selectedRegion.areas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-6 py-2 rounded-full font-medium transition-all ${
                        selectedArea === area
                          ? 'bg-[#f5a623] text-[#1e3a5f]'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hotels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedRegion.hotels.map((hotel, index) => (
                  <Card key={index} className="overflow-hidden card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full">
                        {[...Array(hotel.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#f5a623] fill-current" />
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{selectedRegion.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-[#f5a623]">{hotel.price}</span>
                          <span className="text-sm text-gray-600 mr-1">شيكل/ليلة</span>
                        </div>
                        <a
                          href={`https://wa.me/972000000000?text=${generateWhatsAppMessage(hotel.name, hotel.price)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                            <MessageCircle className="w-4 h-4 ml-2" />
                            استفسار
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          {!selectedRegion && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Hotel className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">اختر منطقة للبدء</h3>
              <p className="text-gray-600">اضغط على أي منطقة أعلاه لعرض الفنادق المتاحة</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
