"use client"

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: 'هل يارين تورز هو مكتب سياحة مرخص؟',
    answer: 'نعم، يارين تورز هو مكتب سياحي رسمي وقانوني، مركزه الرئيسي في كفركنا، ونحن المنصة الأكبر التي تدير وتوفر أضخم شبكة للرحلات المنظمة في البلاد.'
  },
  {
    question: 'ما الذي يميز الرحلات المنظمة عبر موقعكم؟',
    answer: 'تتميز رحلاتنا بثلاث نقاط أساسية:\n\n1. الشمولية: أكبر تنوع في الوجهات والأسعار.\n2. اللغة: كافة الرحلات يقودها مرشدون عرب محترفون.\n3. الراحة: الرحلة تشمل كل شيء (طيران، فنادق، مواصلات، وبرامج يومية).'
  },
  {
    question: 'هل المرشد السياحي يتحدث العربية؟',
    answer: 'بكل تأكيد. نحن نركز بشكل أساسي على توفير رحلات بإرشاد عربي كامل، لضمان وصول المعلومة لكل مسافر ولخلق أجواء عائلية مريحة خلال الرحلة.'
  },
  {
    question: 'كيف يمكنني التأكد من أنني حصلت على أفضل سعر؟',
    answer: 'بما أننا المنصة الأضخم، فنحن نوفر لك "رؤية كاملة" لكل الخيارات المتاحة في السوق. هذا يتيح لك المقارنة واختيار العرض الذي يناسب ميزانيتك، مع ضمان الجودة التي نلتزم بها في كافة برامجنا.'
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نقبل الدفع نقداً، بطاقات الائتمان، والتحويل البنكي. يتم ترتيب تفاصيل الدفع مع فريقنا بعد تأكيد الحجز.'
  },
  {
    question: 'هل يمكنني إلغاء الحجز؟',
    answer: 'نعم، يمكنك إلغاء الحجز وفقاً لسياسة الإلغاء الخاصة بكل رحلة. ننصح بمراجعة شروط الإلغاء قبل الحجز أو التواصل معنا للاستفسار.'
  },
  {
    question: 'هل الرحلات مناسبة للعائلات والأطفال؟',
    answer: 'بالتأكيد! معظم رحلاتنا مصممة لتناسب العائلات مع الأطفال. نوفر برامج متنوعة تناسب جميع الأعمار، مع مراعاة راحة الأطفال في اختيار الفنادق والأنشطة.'
  },
  {
    question: 'ما هي الأوراق المطلوبة للسفر؟',
    answer: 'الأوراق المطلوبة تختلف حسب الوجهة. بشكل عام تحتاج إلى جواز سفر صالح لمدة 6 أشهر على الأقل. فريقنا سيرشدك للأوراق المطلوبة حسب وجهتك.'
  },
  {
    question: 'كيف يمكنني التواصل معكم في حالة الطوارئ أثناء السفر؟',
    answer: 'فريقنا متوفر 24/7 على رقم الواتساب والهاتف. بالإضافة لذلك، المرشد السياحي معكم طوال الرحلة لأي مساعدة.'
  },
  {
    question: 'هل تقدمون تأمين سفر؟',
    answer: 'ننصح دائماً بالحصول على تأمين سفر شامل. يمكننا مساعدتك في الحصول على تأمين مناسب أو إرشادك للخيارات المتاحة.'
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <HelpCircle className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأسئلة الشائعة</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              كل ما تود معرفته عن يارين تورز
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'shadow-xl ring-2 ring-[#f5a623]' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-right flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-[#f5a623]/10 text-[#f5a623] flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-[#1e3a5f] text-right">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-[#1e3a5f] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <CardContent className="pt-0 pb-6 px-6">
                      <div className="pr-14 text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Still Have Questions */}
            <Card className="mt-12 bg-[#1e3a5f] text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">لديك سؤال آخر؟</h3>
                <p className="text-gray-300 mb-6">
                  فريقنا جاهز للإجابة على جميع استفساراتك
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/972000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      تواصل عبر واتساب
                    </Button>
                  </a>
                  <a href="tel:+972000000000">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6">
                      <Phone className="w-5 h-5 ml-2" />
                      اتصل بنا
                    </Button>
                  </a>
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
