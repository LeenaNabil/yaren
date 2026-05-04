"use client"

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const contactInfo = [
  {
    icon: Phone,
    title: 'الهاتف',
    value: '+972-00-000-0000',
    link: 'tel:+972000000000',
    description: 'اتصل بنا مباشرة'
  },
  {
    icon: MessageCircle,
    title: 'واتساب',
    value: '+972-00-000-0000',
    link: 'https://wa.me/972000000000',
    description: 'تواصل عبر واتساب',
    color: '#25D366'
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: 'info@yarentours.com',
    link: 'mailto:info@yarentours.com',
    description: 'راسلنا عبر الإيميل'
  },
  {
    icon: MapPin,
    title: 'العنوان',
    value: 'كفركنا، إسرائيل',
    link: '#',
    description: 'المركز الرئيسي'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // إنشاء رسالة واتساب
    const message = `رسالة جديدة من موقع يارين تورز:\n\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالإيميل: ${formData.email}\nالموضوع: ${formData.subject}\n\nالرسالة:\n${formData.message}`
    
    const whatsappUrl = `https://wa.me/972000000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <Mail className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: item.color ? `${item.color}20` : '#f5a62320' }}
                        >
                          <item.icon 
                            className="w-7 h-7" 
                            style={{ color: item.color || '#f5a623' }}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-[#1e3a5f] text-lg">{item.title}</p>
                          <p className="text-gray-800">{item.value}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}

              {/* Working Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                      <Clock className="w-7 h-7 text-[#f5a623]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1e3a5f] text-lg">ساعات العمل</p>
                      <p className="text-gray-800">24/7</p>
                      <p className="text-sm text-gray-500">متوفرون على مدار الساعة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <p className="font-bold text-[#1e3a5f] text-lg mb-4">تابعونا</p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/972000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader className="bg-[#1e3a5f] text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3">
                    <Send className="w-6 h-6 text-[#f5a623]" />
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الكامل *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="py-6 text-lg border-2 focus:border-[#f5a623]"
                          placeholder="أدخل اسمك"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="py-6 text-lg border-2 focus:border-[#f5a623]"
                          placeholder="05x-xxx-xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="py-6 text-lg border-2 focus:border-[#f5a623]"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الموضوع *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="py-6 text-lg border-2 focus:border-[#f5a623]"
                        placeholder="موضوع الرسالة"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الرسالة *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        className="w-full p-4 text-lg border-2 rounded-lg focus:border-[#f5a623] focus:outline-none resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg rounded-xl"
                    >
                      <MessageCircle className="w-6 h-6 ml-2" />
                      إرسال عبر واتساب
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      سيتم إرسال رسالتك مباشرة إلى فريقنا عبر واتساب للرد السريع
                    </p>
                  </form>
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
