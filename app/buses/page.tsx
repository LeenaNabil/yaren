"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Bus, Calendar, Users, MapPin, MessageCircle, ChevronDown, Info, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format, addDays } from 'date-fns'
import { ar } from 'date-fns/locale'

// وجهات الباصات
const busDestinations = [
  {
    id: 1,
    destination: 'شرم الشيخ',
    type: 'ذهاب وإياب',
    pricePerPerson: 330,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
    availableDays: [0, 2], // الأحد، الثلاثاء
    description: 'باص مكيف ومريح مع خدمة VIP',
    title: 'باص من بيتك لشرم الشيخ',
    route: 'المحطات: الناصرة، كفركنا، طمرة، سخنين، عرابة، شفاعمرو، حيفا، تل أبيب، إيلات، طابا، شرم الشيخ'
  },
  {
    id: 2,
    destination: 'طابا',
    type: 'ذهاب وإياب',
    pricePerPerson: 280,
    image: 'https://images.unsplash.com/photo-1596467745186-e6aa6f7eb017?w=800&q=80',
    availableDays: [0, 4], // الأحد، الخميس
    description: 'رحلة مريحة مع توقفات للاستراحة'
  },
  {
    id: 3,
    destination: 'العقبة',
    type: 'ذهاب وإياب',
    pricePerPerson: 200,
    image: 'https://images.unsplash.com/photo-1580745089072-64c60a8d511c?w=800&q=80',
    availableDays: [0, 2, 4], // الأحد، الثلاثاء، الخميس
    description: 'وصول سريع ومريح للعقبة'
  },
]

// المدن المتاحة للانطلاق
const cities = ['الناصرة', 'كفركنا', 'طمرة', 'سخنين', 'عرابة', 'شفاعمرو', 'حيفا']

export default function BusesPage() {
  const [selectedDestination, setSelectedDestination] = useState<typeof busDestinations[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [passengers, setPassengers] = useState(1)
  const [city, setCity] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // حساب السعر الإجمالي
  const totalPrice = useMemo(() => {
    if (!selectedDestination) return 0
    return selectedDestination.pricePerPerson * passengers
  }, [selectedDestination, passengers])

  // توليد أيام الشهر الكامل
  const generateCalendarDays = () => {
    const days: Date[] = []
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    
    // إضافة أيام من الشهر السابق لملء البداية
    const startDay = startOfMonth.getDay()
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(startOfMonth)
      date.setDate(date.getDate() - (i + 1))
      days.push(date)
    }
    
    // إضافة أيام الشهر الحالي
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
    }
    
    // إضافة أيام من الشهر التالي لملء النهاية
    const remainingDays = 42 - days.length // 6 أسابيع × 7 أيام
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(endOfMonth)
      date.setDate(date.getDate() + i)
      days.push(date)
    }
    
    return days
  }

  const calendarDays = generateCalendarDays()

  // وظائف التنقل بين الأشهر
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // التحقق من توفر اليوم
  const isAvailableDay = (date: Date) => {
    if (!selectedDestination) return false
    
    // التحقق من أن اليوم في الشهر الحالي
    const isCurrentMonth = date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear()
    
    // التحقق من أن اليوم ليس في الماضي
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const isNotPast = date >= today
    
    return isCurrentMonth && isNotPast && selectedDestination.availableDays.includes(date.getDay())
  }

  // إنشاء رسالة الواتساب
  const generateWhatsAppMessage = () => {
    if (!selectedDestination || !selectedDate || !city) return ''

    const message = `مرحباً يارين تورز، أرغب في تأكيد حجز توصيل باص:\n\nالوجهة: ${selectedDestination.destination} (${selectedDestination.type})\nالتاريخ المختار: ${format(selectedDate, 'EEEE d MMMM yyyy', { locale: ar })}\nعدد الأشخاص: ${passengers} أشخاص\nالمدينة: ${city}\nالسعر الإجمالي المتوقع: ${totalPrice} شيكل\n\nيرجى تأكيد الحجز معي.`
    
    return encodeURIComponent(message)
  }

  const handleSelectDestination = (destination: typeof busDestinations[0]) => {
    setSelectedDestination(destination)
    setShowForm(true)
    setSelectedDate(null)
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <Bus className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حجز الباصات</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              خدمة توصيل مريحة وآمنة لأشهر الوجهات السياحية
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {busDestinations.map((destination) => (
              <Card 
                key={destination.id}
                className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedDestination?.id === destination.id
                    ? 'ring-2 ring-[#f5a623] shadow-xl'
                    : 'hover:shadow-xl card-hover'
                }`}
                onClick={() => handleSelectDestination(destination)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.destination}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{destination.title || destination.destination}</h3>
                    <p className="text-sm text-gray-200">{destination.type}</p>
                    {destination.route && (
                      <p className="text-xs text-gray-300 mt-1">{destination.route}</p>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bus className="w-5 h-5" />
                      <span className="text-sm">{destination.description}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-[#1e3a5f]">{destination.pricePerPerson}</span>
                      <span className="text-sm text-gray-600 mr-1">شيكل/شخص</span>
                    </div>
                    <Button 
                      className="bg-[#f5a623] hover:bg-[#ffb84d] text-[#1e3a5f]"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSelectDestination(destination)
                      }}
                    >
                      احجز الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          {showForm && selectedDestination && (
            <Card className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4">
              <CardHeader className="bg-[#1e3a5f] text-white">
                <CardTitle className="flex items-center gap-3">
                  <Bus className="w-6 h-6 text-[#f5a623]" />
                  حجز {selectedDestination.title || `باص إلى ${selectedDestination.destination}`}
                </CardTitle>
                {selectedDestination.route && (
                  <p className="text-sm text-gray-300 mt-2">{selectedDestination.route}</p>
                )}
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Date Selection - تقويم كبير وواضح */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="w-4 h-4 inline ml-1" />
                    اختر التاريخ
                  </label>
                  
                  {/* ملاحظة الأيام المتاحة */}
                  <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 rounded-lg text-blue-800">
                    <Info className="w-5 h-5" />
                    <span className="text-sm">
                      الأيام المتاحة: {selectedDestination.availableDays.includes(0) && 'الأحد'}
                      {selectedDestination.availableDays.includes(2) && '، الثلاثاء'}
                      {selectedDestination.availableDays.includes(4) && '، الخميس'}
                    </span>
                  </div>

                  {/* التقويم الكبير */}
                  <div className="grid grid-cols-7 gap-2 mb-8">
                    {['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                    {calendarDays.slice(0, 42).map((date, index) => {
                      const isAvailable = isAvailableDay(date)
                      const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                      const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                      const isTomorrow = format(date, 'yyyy-MM-dd') === format(addDays(new Date(), 1), 'yyyy-MM-dd')
                      const showLastMinute = isAvailable && (isToday || isTomorrow)

                      return (
                        <button
                          key={index}
                          onClick={() => isAvailable && setSelectedDate(date)}
                          disabled={!isAvailable}
                          className={`relative p-3 rounded-lg text-center transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#f5a623] text-[#1e3a5f] font-bold shadow-lg'
                              : isAvailable
                                ? 'bg-white border-2 border-gray-200 hover:border-[#f5a623] hover:shadow-md cursor-pointer'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <span className="text-lg">{date.getDate()}</span>
                          {showLastMinute && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* أزرار التنقل بين الأشهر */}
                  <div className="flex justify-between items-center mb-4">
                    <button 
                      onClick={goToPreviousMonth}
                      className="text-[#1e3a5f] hover:text-[#f5a623] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()}
                    >
                      ← الشهر السابق
                    </button>
                    <span className="font-bold text-[#1e3a5f]">
                      {format(currentMonth, 'MMMM yyyy', { locale: ar })}
                    </span>
                    <button 
                      onClick={goToNextMonth}
                      className="text-[#1e3a5f] hover:text-[#f5a623] transition-colors"
                    >
                      الشهر التالي →
                    </button>
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Users className="w-4 h-4 inline ml-1" />
                    عدد الأشخاص
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1e3a5f] hover:text-white transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="text-3xl font-bold text-[#1e3a5f] w-16 text-center">{passengers}</span>
                    <button
                      onClick={() => setPassengers(Math.min(50, passengers + 1))}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1e3a5f] hover:text-white transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* City Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 inline ml-1" />
                    مدينة الانطلاق
                  </label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-[#f5a623] appearance-none bg-white text-lg"
                    >
                      <option value="">اختر المدينة</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">السعر للشخص</span>
                    <span className="font-bold text-[#1e3a5f]">{selectedDestination.pricePerPerson} شيكل</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">عدد الأشخاص</span>
                    <span className="font-bold text-[#1e3a5f]">{passengers}</span>
                  </div>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1e3a5f]">السعر الإجمالي</span>
                    <span className="text-2xl font-bold text-[#f5a623]">{totalPrice} شيكل</span>
                  </div>
                </div>

                {/* Submit Button */}
                <a
                  href={selectedDate && city ? `https://wa.me/972000000000?text=${generateWhatsAppMessage()}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${(!selectedDate || !city) ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg"
                    disabled={!selectedDate || !city}
                  >
                    <MessageCircle className="w-6 h-6 ml-2" />
                    تأكيد الحجز عبر واتساب
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
