"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, ZoomIn, ZoomOut, Contrast, Palette, X } from 'lucide-react'

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [grayscale, setGrayscale] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size')
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast')
    const savedGrayscale = localStorage.getItem('accessibility-grayscale')

    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize))
      document.documentElement.style.fontSize = `${savedFontSize}px`
    }
    if (savedHighContrast === 'true') {
      setHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }
    if (savedGrayscale === 'true') {
      setGrayscale(true)
      document.documentElement.classList.add('grayscale')
    }
  }, [])

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
    localStorage.setItem('accessibility-font-size', newSize.toString())
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
    localStorage.setItem('accessibility-font-size', newSize.toString())
  }

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    if (newValue) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
    localStorage.setItem('accessibility-high-contrast', newValue.toString())
  }

  const toggleGrayscale = () => {
    const newValue = !grayscale
    setGrayscale(newValue)
    if (newValue) {
      document.documentElement.classList.add('grayscale')
    } else {
      document.documentElement.classList.remove('grayscale')
    }
    localStorage.setItem('accessibility-grayscale', newValue.toString())
  }

  const resetSettings = () => {
    setFontSize(16)
    setHighContrast(false)
    setGrayscale(false)
    document.documentElement.style.fontSize = '16px'
    document.documentElement.classList.remove('high-contrast', 'grayscale')
    localStorage.removeItem('accessibility-font-size')
    localStorage.removeItem('accessibility-high-contrast')
    localStorage.removeItem('accessibility-grayscale')
  }

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-[#1e3a5f] text-white p-4 rounded-full shadow-lg hover:bg-[#2a4a6b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2 border-2 border-white"
        aria-label="فتح شريط الإتاحة"
        title="شريط الإتاحة"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 z-50 bg-white border-2 border-[#1e3a5f] rounded-lg shadow-xl p-6 min-w-[320px] max-w-[360px]"
          role="dialog"
          aria-labelledby="accessibility-title"
        >
          {/* Screen reader announcements */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            تم فتح شريط الإتاحة
          </div>
          <div className="flex items-center justify-between mb-6">
            <h3 id="accessibility-title" className="text-xl font-bold text-[#1e3a5f]">
              شريط الإتاحة
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5a623] rounded p-1"
              aria-label="إغلاق شريط الإتاحة"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Screen reader status */}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              حجم الخط الحالي: {fontSize} بكسل
              {highContrast && ', تباين عالي مفعل'}
              {grayscale && ', وضع أبيض وأسود مفعل'}
            </div>

            {/* Font Size Controls */}
            {/* Font Size Controls */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-semibold text-gray-800 mb-3">
                حجم الخط: <span className="text-[#f5a623]">{fontSize}px</span>
              </label>
              <div className="flex gap-3">
                <Button
                  onClick={decreaseFontSize}
                  variant="outline"
                  size="lg"
                  className="flex-1 py-3 text-lg"
                  aria-label="تصغير الخط"
                >
                  <ZoomOut className="w-5 h-5 ml-2" />
                  تصغير
                </Button>
                <Button
                  onClick={increaseFontSize}
                  variant="outline"
                  size="lg"
                  className="flex-1 py-3 text-lg"
                  aria-label="تكبير الخط"
                >
                  <ZoomIn className="w-5 h-5 ml-2" />
                  تكبير
                </Button>
              </div>
            </div>

            {/* Contrast Toggle */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <Button
                onClick={toggleHighContrast}
                variant={highContrast ? "default" : "outline"}
                className="w-full justify-start py-4 text-lg"
                aria-pressed={highContrast}
              >
                <Contrast className="w-5 h-5 ml-2" />
                تباين عالي {highContrast ? '(مفعل)' : '(معطل)'}
              </Button>
            </div>

            {/* Grayscale Toggle */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <Button
                onClick={toggleGrayscale}
                variant={grayscale ? "default" : "outline"}
                className="w-full justify-start py-4 text-lg"
                aria-pressed={grayscale}
              >
                <Palette className="w-5 h-5 ml-2" />
                أبيض وأسود {grayscale ? '(مفعل)' : '(معطل)'}
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              onClick={resetSettings}
              variant="secondary"
              className="w-full py-4 text-lg bg-gray-200 hover:bg-gray-300"
            >
              إعادة تعيين الإعدادات
            </Button>
          </div>
        </div>
      )}
    </>
  )
}