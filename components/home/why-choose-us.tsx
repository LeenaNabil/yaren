import { Globe, Users, Shield, Clock, Award, Headphones } from 'lucide-react'

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

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-wider">
            لماذا يارين تورز
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-4 mb-6 text-balance">
            نرسم لكم خارطة العالم
          </h2>
          <p className="text-gray-600 leading-relaxed">
            معنا تكون كل رحلة حكاية نجاح. اكتشف ما يميزنا عن غيرنا
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-[#1e3a5f] transition-all duration-500 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#f5a623]/10 group-hover:bg-[#f5a623] flex items-center justify-center mb-6 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#f5a623] group-hover:text-[#1e3a5f] transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1e3a5f] group-hover:text-white mb-4 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {feature.description}
              </p>

              {/* Number */}
              <span className="absolute top-6 left-6 text-6xl font-bold text-gray-100 group-hover:text-white/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
