import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Eye, Phone, Mail, Users } from 'lucide-react'

export const metadata = {
  title: 'تصريح الإتاحة - يارين تورز',
  description: 'تصريح إتاحة موقع يارين تورز وفقاً للمعايير الإسرائيلية תקן ישראלי 5568',
}

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#1e3a5f] mb-8 shadow-lg">
              <Eye className="w-12 h-12 text-[#f5a623]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6">
              تصريح الإتاحة
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              التزامنا بتوفير تجربة إتاحة شاملة لجميع المستخدمين وفقاً للمعايير الإسرائيلية
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 lg:space-y-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <section>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5a623] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    التزامنا بالإتاحة
                  </h2>
                  <div className="bg-blue-50 p-6 lg:p-8 rounded-xl border-r-4 border-[#1e3a5f]">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      يلتزم موقع <strong className="text-[#1e3a5f]">يارين تورز</strong> بتوفير تجربة إتاحة شاملة لجميع المستخدمين،
                      بما في ذلك الأشخاص ذوي الإعاقة. نحن نعمل وفقاً للمعايير الإسرائيلية
                      <strong className="text-[#f5a623]"> תקן ישראלי 5568</strong> لضمان إمكانية الوصول الكاملة للموقع.
                    </p>
                  </div>
                </section>

                <section className="mt-10 lg:mt-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5a623] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    الأدوات والتقنيات المستخدمة
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    {[
                      'HTML5 و CSS3 مع دعم كامل للإتاحة',
                      'React و Next.js لتطوير تطبيقات ويب متجاوبة',
                      'أدوات الإتاحة المدمجة في المتصفحات الحديثة',
                      'اختبارات الإتاحة اليدوية والآلية',
                      'دعم شاشات القراءة وأجهزة المساعدة الأخرى',
                      'تصميم متجاوب لجميع أحجام الشاشات'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 lg:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-7 h-7 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <section>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5a623] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    ميزات الإتاحة المتاحة
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1e3a5f] flex items-center gap-2">
                        <Eye className="w-6 h-6 text-[#f5a623]" />
                        شريط الإتاحة
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'تكبير وتصغير الخط (12px - 24px)',
                          'تباين عالي للألوان',
                          'تحويل إلى أبيض وأسود',
                          'حفظ الإعدادات تلقائياً',
                          'إعادة تعيين الإعدادات'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <span className="w-3 h-3 rounded-full bg-[#f5a623] flex-shrink-0"></span>
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1e3a5f] flex items-center gap-2">
                        <span className="text-[#f5a623]">⌨️</span>
                        التنقل بالكيبورد
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'دعم كامل لمفتاح Tab',
                          'مؤشرات بصرية واضحة',
                          'تخطي إلى المحتوى الرئيسي',
                          'تنقل منطقي بين العناصر',
                          'دعم شاشات القراءة'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <span className="w-3 h-3 rounded-full bg-[#f5a623] flex-shrink-0"></span>
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1e3a5f] flex items-center gap-2">
                        <span className="text-[#f5a623]">📝</span>
                        المحتوى والنماذج
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'نصوص بديلة للصور',
                          'عناوين هرمية واضحة (H1, H2, H3)',
                          'روابط واضحة ومفهومة',
                          'نماذج مع تسميات واضحة',
                          'رسائل خطأ واضحة'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <span className="w-3 h-3 rounded-full bg-[#f5a623] flex-shrink-0"></span>
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1e3a5f] flex items-center gap-2">
                        <span className="text-[#f5a623]">🎬</span>
                        الوسائط والحركة
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'إيقاف الحركة التلقائية',
                          'زر إيقاف للفيديوهات',
                          'وسائط بديلة متاحة',
                          'دعم الترجمة والشرح',
                          'تحكم في سرعة التشغيل'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <span className="w-3 h-3 rounded-full bg-[#f5a623] flex-shrink-0"></span>
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
                <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#f5a623]" />
                  معلومات الاتصال
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-6 h-6 text-[#1e3a5f] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-base">البريد الإلكتروني</p>
                      <p className="text-sm text-gray-600">accessibility@yaren-tours.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-6 h-6 text-[#1e3a5f] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-base">الهاتف</p>
                      <p className="text-sm text-gray-600">972-00-000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Users className="w-6 h-6 text-[#1e3a5f] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-base">الشخص المسؤول</p>
                      <p className="text-sm text-gray-600">قسم الإتاحة الرقمية</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6b] rounded-2xl shadow-xl p-6 lg:p-8 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-[#f5a623]">📋</span>
                  آخر تحديث
                </h3>
                <p className="text-gray-200 mb-6 text-base leading-relaxed">
                  تم آخر تحديث لهذا التصريح في:
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-[#f5a623]">
                  {new Date().toLocaleDateString('ar-IL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                  <span className="text-[#f5a623]">🏛️</span>
                  الامتثال القانوني
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">תקן ישראלי 5568</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">قانون المساواة في الحقوق</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">WCAG 2.1 AA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}