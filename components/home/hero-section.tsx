"use client"

import { useState, useEffect } from 'react'
import { Plane, Map, Bus, Hotel, ChevronLeft, Star, Pause, Play } from 'lucide-react'
import Link from 'next/link'

const services = [
  { 
    icon: Plane, 
    title: 'حجز طيران', 
    description: 'أفضل الأسعار للرحلات الجوية',
    href: '/flights',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    icon: Map, 
    title: 'رحلات منظمة', 
    description: 'رحلات متكاملة بإرشاد عربي',
    href: '/tours',
    color: 'from-emerald-500 to-emerald-600'
  },
  { 
    icon: Bus, 
    title: 'حجز باصات', 
    description: 'توصيل مريح وآمن',
    href: '/buses',
    color: 'from-amber-500 to-amber-600'
  },
  { 
    icon: Hotel, 
    title: 'فنادق', 
    description: 'أفضل الفنادق بأسعار منافسة',
    href: '/hotels',
    color: 'from-rose-500 to-rose-600'
  },
]

const stats = [
  { value: '10,000+', label: 'مسافر سعيد' },
  { value: '500+', label: 'رحلة منظمة' },
  { value: '50+', label: 'وجهة سياحية' },
  { value: '24/7', label: 'دعم متواصل' },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const slides = [
    {
      title: 'اكتشف العالم معنا',
      subtitle: 'رحلات لا تُنسى بإرشاد عربي',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80'
    },
    {
      title: 'أفضل العروض',
      subtitle: 'أسعار منافسة وجودة عالية',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80'
    },
    {
      title: 'خدمة متميزة',
      subtitle: 'فريق محترف لخدمتكم',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80'
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [slides.length, isPaused])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/90" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Star className="w-5 h-5 text-[#f5a623]" />
            <span className="text-sm">المنصة الأكبر للرحلات المنظمة في البلاد</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            {slides[currentSlide].subtitle}
          </p>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#f5a623]' 
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`الانتقال للشريحة ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="mb-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={isPaused ? 'تشغيل الشرائح التلقائية' : 'إيقاف الشرائح التلقائية'}
          >
            {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center transition-all duration-300 hover:bg-white hover:text-[#1e3a5f] hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100">{service.description}</p>
              <ChevronLeft className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:left-3" />
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold text-[#f5a623] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
