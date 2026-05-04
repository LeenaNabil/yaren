"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone, MessageCircle, Plane, Bus, Hotel, Map, Users, HelpCircle, Mail, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'الرئيسية', href: '/', icon: null },
  { name: 'الطيران', href: '/flights', icon: Plane },
  { name: 'الرحلات المنظمة', href: '/tours', icon: Map },
  { name: 'حجز الباصات', href: '/buses', icon: Bus },
  { name: 'الفنادق', href: '/hotels', icon: Hotel },
  { name: 'المعابر', href: '/borders', icon: Map },
  { name: 'من نحن', href: '/about', icon: Users },
  { name: 'الأسئلة الشائعة', href: '/faq', icon: HelpCircle },
  { name: 'اتصل بنا', href: '/contact', icon: Mail },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-3 lg:px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="يارين تورز"
              width={120}
              height={50}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4">
            <div className="flex items-center gap-0.5 xl:gap-1 flex-nowrap">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-2 xl:px-3 py-1.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-1.5 text-[#1e3a5f] hover:bg-[#f5a623] hover:text-white whitespace-nowrap text-xs lg:text-sm xl:text-base"
                >
                  {item.icon && <item.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA + Social Icons (تم إزالة أيقونة الواتساب المنفردة) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* أيقونات فيسبوك وإنستقرام فقط */}
            <div className="flex items-center gap-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-100 hover:bg-[#1877f2] text-[#1e3a5f] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-100 hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] text-[#1e3a5f] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </a>
            </div>
            {/* زر احجز الآن (يفتح واتساب) */}
            <a href="https://wa.me/972000000000" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#f5a623] hover:bg-[#ffb84d] text-[#1e3a5f] font-bold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md text-xs lg:text-sm">
                <MessageCircle className="w-3.5 h-3.5 lg:w-4 lg:h-4 ml-1" />
                احجز الآن
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#1e3a5f]">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Image src="/images/logo.jpg" alt="يارين تورز" width={120} height={50} className="h-12 w-auto object-contain" />
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1e3a5f] hover:bg-[#f5a623] hover:text-white transition-all duration-300"
                        >
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t bg-gray-50 space-y-3">
                  <div className="flex justify-center gap-4">
                    <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center"><Facebook className="w-5 h-5" /></a>
                    <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] text-white flex items-center justify-center"><Instagram className="w-5 h-5" /></a>
                  </div>
                  {/* في الموبايل نضع زر احجز الآن بدلاً من الأيقونة السابقة */}
                  <a href="https://wa.me/972000000000" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-full font-bold">
                    <MessageCircle className="w-5 h-5" />
                    تواصل عبر واتساب
                  </a>
                  <a href="tel:+972000000000" className="flex items-center justify-center gap-2 w-full bg-[#1e3a5f] text-white py-3 rounded-full font-bold">
                    <Phone className="w-5 h-5" />
                    اتصل بنا
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}