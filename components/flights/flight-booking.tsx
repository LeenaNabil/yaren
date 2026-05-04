"use client"

import { useState, useMemo } from 'react'
import { ArrowLeftRight, ArrowLeft, Plane, Calendar, Users, Clock, Zap, MessageCircle, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format, addDays, isSameDay, isAfter, isBefore } from 'date-fns'
import { ar } from 'date-fns/locale'

// نوع الرحلة
type TripType = 'one-way' | 'round-trip'

// اتجاه الرحلة
type Direction = 'amman-istanbul' | 'istanbul-amman'

// نوع المقصورة
type CabinClass = 'economy' | 'business'

// الأسعار الأساسية (يمكن تعديلها يدويا)
const basePrices = {
  'one-way': {
    'amman-istanbul': { economy: 850, business: 2200 },
    'istanbul-amman': { economy: 750, business: 2000 },
  },
  'round-trip': {
    economy: 1400,
    business: 3800,
  },
}

// خصم دقيقة 90
const LAST_MINUTE_DISCOUNT = 0.15 // 15% خصم

// الأيام المتاحة للطيران
const availableDays = [0, 2, 4] // الأحد، الثلاثاء، الخميس

// معلومات الرحلات
const flightInfo = {
  'amman-istanbul': {
    airline: 'Turkish Airlines',
    departure: '08:00',
    arrival: '11:30',
    duration: '3 ساعات 30 دقيقة',
  },
  'istanbul-amman': {
    airline: 'Turkish Airlines',
    departure: '14:00',
    arrival: '17:30',
    duration: '3 ساعات 30 دقيقة',
  },
}

export function FlightBooking() {
  const [step, setStep] = useState(1)
  const [tripType, setTripType] = useState<TripType | null>(null)
  const [direction, setDirection] = useState<Direction | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [returnDate, setReturnDate] = useState<Date | null>(null)
  const [passengers, setPassengers] = useState(1)
  const [cabinClass, setCabinClass] = useState<CabinClass>('economy')
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectingReturn, setSelectingReturn] = useState(false)

  // حساب إذا كان التاريخ ضمن دقيقة 90
  const isLastMinute = useMemo(() => {
    if (!selectedDate) return false
    const today = new Date()
    const tomorrow = addDays(today, 1)
    return isSameDay(selectedDate, today) || isSameDay(selectedDate, tomorrow)
  }, [selectedDate])

  // حساب السعر الديناميكي
  const calculatedPrice = useMemo(() => {
    if (!tripType) return 0
    
    let basePrice = 0
    
    if (tripType === 'one-way' && direction) {
      basePrice = basePrices['one-way'][direction][cabinClass]
    } else if (tripType === 'round-trip') {
      basePrice = basePrices['round-trip'][cabinClass]
    }

    let finalPrice = basePrice * passengers

    // تطبيق خصم دقيقة 90
    if (isLastMinute) {
      finalPrice = finalPrice * (1 - LAST_MINUTE_DISCOUNT)
    }

    return Math.round(finalPrice)
  }, [tripType, direction, passengers, cabinClass, isLastMinute])

  // توليد أيام الشهر
  const generateCalendarDays = () => {
    const today = new Date()
    const days: Date[] = []
    
    for (let i = 0; i < 60; i++) {
      const date = addDays(today, i)
      days.push(date)
    }
    
    return days
  }

  const calendarDays = generateCalendarDays()

  // التحقق من توفر اليوم
  const isAvailableDay = (date: Date) => {
    return availableDays.includes(date.getDay())
  }

  // معالجة اختيار نوع الرحلة
  const handleTripTypeSelect = (type: TripType) => {
    setTripType(type)
    if (type === 'round-trip') {
      setDirection(null)
      setStep(2.5) // تخطي خطوة الاتجاه
    } else {
      setStep(2)
    }
  }

  // معالجة اختيار الاتجاه
  const handleDirectionSelect = (dir: Direction) => {
    setDirection(dir)
    setStep(3)
    setShowCalendar(true)
  }

  // معالجة اختيار التاريخ
  const handleDateSelect = (date: Date) => {
    if (!isAvailableDay(date)) return

    if (tripType === 'round-trip' && !selectingReturn) {
      setSelectedDate(date)
      setSelectingReturn(true)
    } else if (tripType === 'round-trip' && selectingReturn) {
      if (isAfter(date, selectedDate!)) {
        setReturnDate(date)
        setSelectingReturn(false)
      }
    } else {
      setSelectedDate(date)
    }
  }

  // إنشاء رسالة الواتساب
  const generateWhatsAppMessage = () => {
    const tripTypeText = tripType === 'one-way' ? 'اتجاه واحد' : 'ذهاب وإياب'
    const directionText = direction === 'amman-istanbul' 
      ? 'من عمان إلى إسطنبول' 
      : direction === 'istanbul-amman' 
        ? 'من إسطنبول إلى عمان'
        : 'عمان - إسطنبول (ذهاب وإياب)'
    const cabinText = cabinClass === 'economy' ? 'درجة اقتصادية' : 'درجة رجال الأعمال'
    
    let message = `مرحباً يارين تورز، أرغب في حجز تذكرة طيران:\n\n`
    message += `نوع الرحلة: ${tripTypeText}\n`
    message += `المسار: ${directionText}\n`
    message += `تاريخ السفر: ${selectedDate ? format(selectedDate, 'EEEE d MMMM yyyy', { locale: ar }) : ''}\n`
    if (returnDate) {
      message += `تاريخ العودة: ${format(returnDate, 'EEEE d MMMM yyyy', { locale: ar })}\n`
    }
    message += `عدد المسافرين: ${passengers}\n`
    message += `درجة السفر: ${cabinText}\n`
    message += `السعر الإجمالي المتوقع: ${calculatedPrice} شيكل\n`
    if (isLastMinute) {
      message += `\n⚡ عرض دقيقة 90 مُطبق!`
    }
    message += `\n\nيرجى تأكيد الحجز معي.`

    return encodeURIComponent(message)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* شريط السعر الديناميكي */}
        <div className="sticky top-24 z-40 mb-8">
          <Card className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Plane className="w-8 h-8 text-[#f5a623]" />
                  <div>
                    <p className="text-sm text-gray-300">السعر الإجمالي</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">{calculatedPrice.toLocaleString()}</span>
                      <span className="text-lg">شيكل</span>
                    </div>
                  </div>
                </div>
                {isLastMinute && (
                  <div className="flex items-center gap-2 bg-[#f5a623] text-[#1e3a5f] px-4 py-2 rounded-full animate-pulse">
                    <Zap className="w-5 h-5" />
                    <span className="font-bold text-sm">عرض دقيقة 90!</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الخطوة 1: نوع الرحلة */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>نوع الرحلة</span>
              {tripType && (
                <span className="mr-auto text-sm font-normal text-[#f5a623]">
                  {tripType === 'one-way' ? 'اتجاه واحد' : 'ذهاب وإياب'}
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleTripTypeSelect('one-way')}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4 ${
                  tripType === 'one-way'
                    ? 'border-[#f5a623] bg-[#f5a623]/10'
                    : 'border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  tripType === 'one-way' ? 'bg-[#f5a623]' : 'bg-gray-100'
                }`}>
                  <ArrowLeft className={`w-8 h-8 ${tripType === 'one-way' ? 'text-[#1e3a5f]' : 'text-gray-500'}`} />
                </div>
                <span className="text-xl font-bold text-[#1e3a5f]">اتجاه واحد</span>
              </button>

              <button
                onClick={() => handleTripTypeSelect('round-trip')}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4 ${
                  tripType === 'round-trip'
                    ? 'border-[#f5a623] bg-[#f5a623]/10'
                    : 'border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  tripType === 'round-trip' ? 'bg-[#f5a623]' : 'bg-gray-100'
                }`}>
                  <ArrowLeftRight className={`w-8 h-8 ${tripType === 'round-trip' ? 'text-[#1e3a5f]' : 'text-gray-500'}`} />
                </div>
                <span className="text-xl font-bold text-[#1e3a5f]">ذهاب وإياب</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* الخطوة 2: اتجاه الرحلة (فقط للاتجاه الواحد) */}
        {tripType === 'one-way' && step >= 2 && (
          <Card className="mb-8 overflow-hidden animate-in slide-in-from-bottom-4">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-sm font-bold">2</span>
                <span>مسار الرحلة</span>
                {direction && (
                  <span className="mr-auto text-sm font-normal text-[#f5a623]">
                    {direction === 'amman-istanbul' ? 'من عمان إلى إسطنبول' : 'من إسطنبول إلى عمان'}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleDirectionSelect('amman-istanbul')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    direction === 'amman-istanbul'
                      ? 'border-[#f5a623] bg-[#f5a623]/10'
                      : 'border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e3a5f]">عمان</p>
                      <p className="text-sm text-gray-500">AMM</p>
                    </div>
                    <Plane className="w-6 h-6 text-[#f5a623] rotate-180" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e3a5f]">إسطنبول</p>
                      <p className="text-sm text-gray-500">IST</p>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-[#f5a623] font-bold">
                    {basePrices['one-way']['amman-istanbul'].economy} شيكل
                  </p>
                </button>

                <button
                  onClick={() => handleDirectionSelect('istanbul-amman')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    direction === 'istanbul-amman'
                      ? 'border-[#f5a623] bg-[#f5a623]/10'
                      : 'border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e3a5f]">إسطنبول</p>
                      <p className="text-sm text-gray-500">IST</p>
                    </div>
                    <Plane className="w-6 h-6 text-[#f5a623] rotate-180" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e3a5f]">عمان</p>
                      <p className="text-sm text-gray-500">AMM</p>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-[#f5a623] font-bold">
                    {basePrices['one-way']['istanbul-amman'].economy} شيكل
                  </p>
                </button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* الخطوة 3: التقويم والتفاصيل */}
        {((tripType === 'one-way' && direction) || tripType === 'round-trip') && (
          <Card className="mb-8 overflow-hidden animate-in slide-in-from-bottom-4">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-sm font-bold">
                  {tripType === 'one-way' ? '3' : '2'}
                </span>
                <span>اختر التاريخ</span>
                {selectedDate && (
                  <span className="mr-auto text-sm font-normal text-[#f5a623]">
                    {format(selectedDate, 'EEEE d MMMM', { locale: ar })}
                    {returnDate && ` - ${format(returnDate, 'EEEE d MMMM', { locale: ar })}`}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* ملاحظة الأيام المتاحة */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 rounded-lg text-blue-800">
                <Info className="w-5 h-5" />
                <span className="text-sm">الأيام المتاحة للطيران: الأحد، الثلاثاء، والخميس فقط</span>
              </div>

              {tripType === 'round-trip' && (
                <div className="mb-4 text-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectingReturn ? 'bg-[#f5a623] text-[#1e3a5f]' : 'bg-[#1e3a5f] text-white'
                  }`}>
                    {selectingReturn ? 'اختر تاريخ العودة' : 'اختر تاريخ الذهاب'}
                  </span>
                </div>
              )}

              {/* التقويم */}
              <div className="grid grid-cols-7 gap-2 mb-8">
                {['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {calendarDays.slice(0, 35).map((date, index) => {
                  const isAvailable = isAvailableDay(date)
                  const isSelected = selectedDate && isSameDay(date, selectedDate)
                  const isReturn = returnDate && isSameDay(date, returnDate)
                  const isInRange = selectedDate && returnDate && 
                    isAfter(date, selectedDate) && isBefore(date, returnDate)
                  const isToday = isSameDay(date, new Date())
                  const isTomorrow = isSameDay(date, addDays(new Date(), 1))
                  const showLastMinute = isAvailable && (isToday || isTomorrow)

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      disabled={!isAvailable}
                      className={`relative p-3 rounded-lg text-center transition-all duration-300 ${
                        isSelected || isReturn
                          ? 'bg-[#f5a623] text-[#1e3a5f] font-bold'
                          : isInRange
                            ? 'bg-[#f5a623]/20'
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

              {/* عدد المسافرين ودرجة السفر */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* عدد المسافرين */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline ml-1" />
                    عدد المسافرين
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1e3a5f] hover:text-white transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-[#1e3a5f] w-12 text-center">{passengers}</span>
                    <button
                      onClick={() => setPassengers(Math.min(10, passengers + 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1e3a5f] hover:text-white transition-colors flex items-center justify-center text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* درجة السفر */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    درجة السفر
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCabinClass('economy')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        cabinClass === 'economy'
                          ? 'border-[#f5a623] bg-[#f5a623]/10 text-[#1e3a5f]'
                          : 'border-gray-200 hover:border-[#1e3a5f]'
                      }`}
                    >
                      <span className="font-medium">اقتصادية</span>
                    </button>
                    <button
                      onClick={() => setCabinClass('business')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        cabinClass === 'business'
                          ? 'border-[#f5a623] bg-[#f5a623]/10 text-[#1e3a5f]'
                          : 'border-gray-200 hover:border-[#1e3a5f]'
                      }`}
                    >
                      <span className="font-medium">رجال الأعمال</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ملخص ومعلومات الرحلة */}
        {selectedDate && (
          <Card className="mb-8 overflow-hidden animate-in slide-in-from-bottom-4">
            <CardHeader className="bg-[#1e3a5f] text-white">
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#f5a623]" />
                <span>تفاصيل الرحلة</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* رحلة الذهاب */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1e3a5f]">
                        {direction === 'istanbul-amman' ? 'إسطنبول' : 'عمان'} 
                        {' → '}
                        {direction === 'istanbul-amman' ? 'عمان' : 'إسطنبول'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {format(selectedDate, 'EEEE d MMMM yyyy', { locale: ar })}
                      </p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#1e3a5f]">
                      {flightInfo[direction || 'amman-istanbul'].departure} - {flightInfo[direction || 'amman-istanbul'].arrival}
                    </p>
                    <p className="text-sm text-gray-600">
                      {flightInfo[direction || 'amman-istanbul'].duration}
                    </p>
                  </div>
                </div>

                {/* رحلة العودة */}
                {returnDate && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center">
                        <Plane className="w-6 h-6 text-[#1e3a5f] rotate-180" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1e3a5f]">إسطنبول → عمان</p>
                        <p className="text-sm text-gray-600">
                          {format(returnDate, 'EEEE d MMMM yyyy', { locale: ar })}
                        </p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[#1e3a5f]">
                        {flightInfo['istanbul-amman'].departure} - {flightInfo['istanbul-amman'].arrival}
                      </p>
                      <p className="text-sm text-gray-600">
                        {flightInfo['istanbul-amman'].duration}
                      </p>
                    </div>
                  </div>
                )}

                {/* شركة الطيران */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="text-gray-600">شركة الطيران</span>
                  <span className="font-bold text-[#1e3a5f]">Turkish Airlines</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* زر الحجز */}
        {selectedDate && (tripType === 'one-way' || (tripType === 'round-trip' && returnDate)) && (
          <div className="text-center animate-in slide-in-from-bottom-4">
            <a
              href={`https://wa.me/972000000000?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-7 h-7 ml-3" />
                احجز الآن عبر واتساب
              </Button>
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              سيتم إرسال تفاصيل الحجز مباشرة إلى فريقنا عبر واتساب
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
