"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface Hotspot {
  id: string
  name: string
  description: string
  image: string
  x: number // نسبة مئوية من اليسار (0-100)
  y: number // نسبة مئوية من الأعلى (0-100)
  details?: string
}

interface InteractiveMapProps {
  title: string
  mapImage: string
  hotspots: Hotspot[]
  mapAlt?: string
}

export function InteractiveMap({ title, mapImage, hotspots, mapAlt = 'خريطة تفاعلية' }: InteractiveMapProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null)

  return (
    <div className="w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">{title}</h2>
        <p className="text-gray-600">اضغط على النقاط المضيئة لاستكشاف المزيد عن الوجهة</p>
      </div>

      {/* Map Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Map Background */}
        <div className="relative w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative aspect-video">
            <Image
              src={mapImage}
              alt={mapAlt}
              fill
              className="object-cover"
              priority
            />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => setSelectedHotspot(hotspot)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                }}
                title={hotspot.name}
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f5a623] opacity-20 animate-pulse transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                
                {/* Inner Circle */}
                <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f5a623] border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl flex items-center justify-center">
                  {/* Icon */}
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#1e3a5f] rounded-full" />
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1e3a5f] text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {hotspot.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900 flex items-start gap-3">
            <span className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-[#f5a623] rounded-full" />
            </span>
            <span>
              <strong>نصيحة:</strong> اضغط على أي من النقاط المضيئة على الخريطة لاستكشاف المزارات والمناطق السياحية المهمة في الرحلة.
            </span>
          </p>
        </div>
      </div>

      {/* Modal/Popover */}
      {selectedHotspot && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedHotspot(null)}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute -top-4 -right-4 z-10">
              <button
                onClick={() => setSelectedHotspot(null)}
                className="bg-[#1e3a5f] text-white rounded-full p-2 hover:bg-[#16314a] transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
              {/* Image */}
              <div className="relative h-64 md:h-auto md:min-h-96 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={selectedHotspot.image}
                  alt={selectedHotspot.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
                    {selectedHotspot.name}
                  </h3>
                  <p className="text-sm text-[#f5a623] font-semibold">الموقع</p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedHotspot.description}
                </p>

                {selectedHotspot.details && (
                  <div className="bg-gradient-to-br from-[#1e3a5f]/5 to-[#f5a623]/5 p-4 rounded-lg border border-[#1e3a5f]/10">
                    <p className="text-sm text-gray-700">{selectedHotspot.details}</p>
                  </div>
                )}

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="flex-1 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#16314a] transition-colors duration-200"
                  >
                    أغلق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
