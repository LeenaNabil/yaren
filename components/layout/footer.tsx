import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Clock } from 'lucide-react'

const quickLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'الطيران', href: '/flights' },
  { name: 'الرحلات المنظمة', href: '/tours' },
  { name: 'حجز الباصات', href: '/buses' },
  { name: 'الفنادق', href: '/hotels' },
]

const supportLinks = [
  { name: 'من نحن', href: '/about' },
  { name: 'الأسئلة الشائعة', href: '/faq' },
  { name: 'اتصل بنا', href: '/contact' },
  { name: 'تصريح الإتاحة', href: '/accessibility' },
]

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/logo.jpg"
              alt="يارين تورز"
              width={150}
              height={60}
              className="h-16 w-auto object-contain bg-white rounded-lg p-2"
            />
            <p className="text-gray-300 leading-relaxed">
              بوابتكم الدائمة لاكتشاف العالم بأعلى معايير الراحة والتنظيم. 
              المنصة الأكبر للرحلات المنظمة في البلاد.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f5a623] transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f5a623] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/972000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f5a623]">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#f5a623] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f5a623] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f5a623]">الدعم والمساعدة</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#f5a623] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f5a623] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f5a623]">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+972000000000"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#f5a623] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+972-00-000-0000</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/972000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#25D366] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>واتساب مباشر</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@yarentours.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#f5a623] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@yarentours.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>كفركنا، إسرائيل</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span>24/7 متوفرون لخدمتكم</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} يارين تورز</p>
            <p>مكتب سياحة مرخص - كفركنا</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
