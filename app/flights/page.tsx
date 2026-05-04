import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FlightBooking } from '@/components/flights/flight-booking'
import { Plane } from 'lucide-react'
import { getActiveDestinations } from '@/lib/admin-data'

export const metadata = {
  title: 'حجز الطيران | يارين تورز',
  description: 'احجز تذاكر الطيران بأفضل الأسعار مع يارين تورز. رحلات مباشرة بين عمان وإسطنبول.'
}

export default function FlightsPage() {
  // Get active destinations from admin data
  const destinations = getActiveDestinations()

  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-[#1e3a5f] py-16 mb-12">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5a623] mb-6">
              <Plane className="w-10 h-10 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حجز الطيران</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              احجز رحلتك الجوية بأفضل الأسعار مع عروض حصرية ودقيقة 90
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-400">الوجهات المتاحة:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {destinations.slice(0, 6).map((dest) => (
                  <span key={dest.id} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {dest.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FlightBooking />
      </main>
      <Footer />
    </>
  )
}
