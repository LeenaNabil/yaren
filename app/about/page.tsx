import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Globe, Users, Award, Shield, Headphones, Clock, CheckCircle, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'من نحن | يارين تورز',
  description: 'تعرف على يارين تورز - المنصة الأكبر للرحلات المنظمة في البلاد. بوابتكم الدائمة لاكتشاف العالم.'
}

const features = [
  {
    icon: Globe,
    title: 'الأكبر في البلاد',
    description: 'المنصة الوحيدة التي تتيح لك الوصول إلى أكبر عدد من الرحلات المنظمة. كل الخيارات الموجودة في السوق تجدها في مكان واحد.'
  },
  {
    icon: Users,
    title: 'مرشدون عرب',
    description: 'نركز بشكل أساسي على الرحلات التي تضم نخبة من المرشدين العرب، لنضمن لك رحلة غنية بالمعلومات ومليئة بالأجواء التي تشبهنا.'
  },
  {
    icon: Award,
    title: 'رحلات منظمة بالكامل',
    description: 'لا داعي للقلق بشأن التفاصيل. من الطيران والفنادق إلى المسارات اليومية، نحن نعرض لك الرحلات الجاهزة والمتكاملة من الألف إلى الياء.'
  },
  {
    icon: Shield,
    title: 'شفافية وسهولة',
    description: 'يارين تورز بتعطيك الخلاصة، بوضوح تام في الأسعار والبرامج، لتتخذ قرارك وأنت مطمئن.'
  },
  {
    icon: Headphones,
    title: 'دعم 24/7',
    description: 'فريقنا متوفر لخدمتكم والإجابة على استفساراتكم من لحظة الحجز وحتى العودة للبلاد.'
  },
  {
    icon: Clock,
    title: 'حجز سريع وسهل',
    description: 'عملية حجز بسيطة وسريعة عبر الواتساب أو الهاتف، بدون تعقيدات.'
  },
]

const stats = [
  { value: '10,000+', label: 'مسافر سعيد' },
  { value: '500+', label: 'رحلة منظمة' },
  { value: '50+', label: 'وجهة سياحية' },
  { value: '10+', label: 'سنوات خبرة' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen">
        {/* Hero Section */}
        <div className="bg-[#1e3a5f] py-20 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#f5a623] mb-8">
              <Users className="w-12 h-12 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              بوابتكم الدائمة لاكتشاف العالم بأعلى معايير الراحة والتنظيم
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
                  alt="يارين تورز"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl max-w-xs">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#f5a623] flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1e3a5f] text-lg">مكتب مرخص</p>
                      <p className="text-sm text-gray-600">كفركنا، إسرائيل</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-wider">
                يارين تورز
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-balance">
                نرسم لكم خارطة العالم، ومعنا تكون كل رحلة حكاية نجاح
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                يارين تورز هو مكتب سياحي رسمي وقانوني، مركزه الرئيسي في كفركنا. 
                نحن المنصة الأكبر التي تدير وتوفر أضخم شبكة للرحلات المنظمة في البلاد.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                نؤمن بأن السفر يجب أن يكون تجربة ممتعة وخالية من التعقيدات. 
                لذلك نقدم لكم رحلات منظمة بالكامل مع مرشدين عرب محترفين، 
                لضمان أفضل تجربة سفر ممكنة.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-[#f5a623]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-wider">
                ما يميزنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-4 text-balance">
                لماذا تختار يارين تورز؟
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-[#f5a623]/10 group-hover:bg-[#f5a623] flex items-center justify-center mb-6 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-[#f5a623] group-hover:text-[#1e3a5f] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#1e3a5f] rounded-3xl p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold text-[#f5a623] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#f5a623]" />
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#1e3a5f] text-xl">المركز الرئيسي</p>
                    <p className="text-gray-600">كفركنا، إسرائيل</p>
                    <p className="text-sm text-[#f5a623]">مكتب سياحة مرخص</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
