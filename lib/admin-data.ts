// Data management utilities for Admin Panel
// All data is stored in localStorage for persistence

export interface Flight {
  id: string
  route: string
  airline: string
  price: number
  seats: number
  available: number
  departure: string
  arrival: string
  duration: string
  destination: string
  isActive: boolean
}

export interface Hotel {
  id: string
  name: string
  city: string
  stars: number
  price: number
  rooms: number
  available: number
  rating: number
  isActive: boolean
}

export interface Bus {
  id: string
  number: string
  model: string
  route: string
  capacity: number
  booked: number
  price: number
  departure: string
  driver: string
  isActive: boolean
}

export interface Tour {
  id: string
  name: string
  destinations: string
  duration: string
  groupSize: string
  price: number
  startDate: string
  booked: number
  capacity: number
  isActive: boolean
}

export interface Destination {
  id: string
  name: string
  country: string
  description: string
  attractions: number
  popularity: string
  avgTemp: string
  bestSeason: string
  isActive: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  isActive: boolean
  createdAt: string
}

// Default data
const defaultFlights: Flight[] = [
  {
    id: '1',
    route: 'عمّان → إسطنبول',
    airline: 'Turkish Airlines',
    price: 450,
    seats: 180,
    available: 45,
    departure: '14:30',
    arrival: '17:45',
    duration: '3h 15m',
    destination: 'إسطنبول',
    isActive: true,
  },
  {
    id: '2',
    route: 'عمّان → القاهرة',
    airline: 'EgyptAir',
    price: 250,
    seats: 200,
    available: 12,
    departure: '08:00',
    arrival: '09:30',
    duration: '1h 30m',
    destination: 'القاهرة',
    isActive: true,
  },
  {
    id: '3',
    route: 'عمّان → دبي',
    airline: 'Emirates',
    price: 380,
    seats: 350,
    available: 156,
    departure: '10:30',
    arrival: '12:45',
    duration: '2h 15m',
    destination: 'دبي',
    isActive: true,
  },
  {
    id: '4',
    route: 'عمّان → المغرب',
    airline: 'Royal Air Maroc',
    price: 520,
    seats: 280,
    available: 89,
    departure: '11:00',
    arrival: '16:20',
    duration: '5h 20m',
    destination: 'المغرب',
    isActive: true,
  },
]

const defaultHotels: Hotel[] = [
  {
    id: '1',
    name: 'فندق فلسطين الفخم',
    city: 'عمّان',
    stars: 5,
    price: 180,
    rooms: 45,
    available: 12,
    rating: 4.8,
    isActive: true,
  },
  {
    id: '2',
    name: 'فندق الحياة المميز',
    city: 'عمّان',
    stars: 4,
    price: 120,
    rooms: 60,
    available: 28,
    rating: 4.5,
    isActive: true,
  },
  {
    id: '3',
    name: 'فندق أتلانتس الشرق الأوسط',
    city: 'دبي',
    stars: 5,
    price: 320,
    rooms: 250,
    available: 85,
    rating: 4.9,
    isActive: true,
  },
  {
    id: '4',
    name: 'فندق مريديان البحر المتوسط',
    city: 'الإسكندرية',
    stars: 4,
    price: 95,
    rooms: 80,
    available: 15,
    rating: 4.3,
    isActive: true,
  },
]

const defaultBuses: Bus[] = [
  {
    id: '1',
    number: 'YT-001',
    model: 'Volvo B13R',
    route: 'عمّان → البحر الميت',
    capacity: 50,
    booked: 48,
    price: 35,
    departure: '08:00',
    driver: 'محمد عبدالله',
    isActive: true,
  },
  {
    id: '2',
    number: 'YT-002',
    model: 'Mercedes Sprinter',
    route: 'عمّان → جرش',
    capacity: 45,
    booked: 32,
    price: 28,
    departure: '09:30',
    driver: 'علي خالد',
    isActive: true,
  },
  {
    id: '3',
    number: 'YT-003',
    model: 'Volvo B13R',
    route: 'عمّان → وادي رم',
    capacity: 50,
    booked: 45,
    price: 50,
    departure: '07:00',
    driver: 'سامي محمود',
    isActive: true,
  },
  {
    id: '4',
    number: 'YT-004',
    model: 'Mercedes Sprinter',
    route: 'عمّان → البتراء',
    capacity: 45,
    booked: 20,
    price: 55,
    departure: '06:00',
    driver: 'ياسر نبيل',
    isActive: true,
  },
]

const defaultTours: Tour[] = [
  {
    id: '1',
    name: 'رحلة الأردن 5 أيام',
    destinations: 'عمّان، جرش، البتراء، وادي رم',
    duration: '5 أيام',
    groupSize: '20-40',
    price: 850,
    startDate: '2026-05-15',
    booked: 32,
    capacity: 40,
    isActive: true,
  },
  {
    id: '2',
    name: 'عطلة الشاطئ بالبحر الأحمر',
    destinations: 'الإسكندرية، الغردقة',
    duration: '7 أيام',
    groupSize: '15-30',
    price: 1200,
    startDate: '2026-05-22',
    booked: 28,
    capacity: 30,
    isActive: true,
  },
  {
    id: '3',
    name: 'جولة إسطنبول السياحية',
    destinations: 'إسطنبول، طرابزون',
    duration: '4 أيام',
    groupSize: '25-50',
    price: 950,
    startDate: '2026-06-01',
    booked: 45,
    capacity: 50,
    isActive: true,
  },
  {
    id: '4',
    name: 'استكشاف الصحراء البيضاء',
    destinations: 'القاهرة، الفيوم، الصحراء البيضاء',
    duration: '3 أيام',
    groupSize: '15-25',
    price: 650,
    startDate: '2026-06-10',
    booked: 18,
    capacity: 25,
    isActive: true,
  },
]

const defaultDestinations: Destination[] = [
  {
    id: '1',
    name: 'البتراء',
    country: 'الأردن',
    description: 'عجيبة معمارية عمرها 2000 سنة منحوتة في الصخر',
    attractions: 18,
    popularity: 'عالية جداً',
    avgTemp: '22°C',
    bestSeason: 'ربيع/خريف',
    isActive: true,
  },
  {
    id: '2',
    name: 'وادي رم',
    country: 'الأردن',
    description: 'صحراء حمراء خلابة مع تضاريس جبلية مثيرة',
    attractions: 25,
    popularity: 'عالية جداً',
    avgTemp: '28°C',
    bestSeason: 'شتاء/ربيع',
    isActive: true,
  },
  {
    id: '3',
    name: 'جزيرة فيليبس',
    country: 'مصر',
    description: 'جزيرة استوائية برية بتنوع بيولوجي ساحر',
    attractions: 12,
    popularity: 'عالية',
    avgTemp: '26°C',
    bestSeason: 'خريف/شتاء',
    isActive: true,
  },
  {
    id: '4',
    name: 'السلطان حسن والرفاعي',
    country: 'مصر',
    description: 'معالم معمارية إسلامية رائعة في قلب القاهرة',
    attractions: 8,
    popularity: 'متوسطة',
    avgTemp: '25°C',
    bestSeason: 'شتاء',
    isActive: true,
  },
  {
    id: '5',
    name: 'طرابزون',
    country: 'تركيا',
    description: 'مدينة ساحلية برية على بحر البحر الأسود',
    attractions: 22,
    popularity: 'عالية',
    avgTemp: '18°C',
    bestSeason: 'صيف',
    isActive: true,
  },
  {
    id: '6',
    name: 'بودروم',
    country: 'تركيا',
    description: 'منتجع ساحلي فاخر مع شواطئ جميلة',
    attractions: 15,
    popularity: 'عالية جداً',
    avgTemp: '27°C',
    bestSeason: 'صيف/خريف',
    isActive: true,
  },
  {
    id: '7',
    name: 'دبي',
    country: 'الإمارات',
    description: 'مدينة المستقبل مع أبراج شاهقة وتسوق فاخر',
    attractions: 35,
    popularity: 'عالية جداً',
    avgTemp: '32°C',
    bestSeason: 'شتاء/ربيع',
    isActive: true,
  },
  {
    id: '8',
    name: 'مراكش',
    country: 'المغرب',
    description: 'مدينة ألف ليلة وليلة مع أسواق تقليدية وعمارة موريسكية',
    attractions: 28,
    popularity: 'عالية',
    avgTemp: '24°C',
    bestSeason: 'ربيع/خريف',
    isActive: true,
  },
  {
    id: '9',
    name: 'القاهرة',
    country: 'مصر',
    description: 'عاصمة مصر وأكبر مدنها، مركز حضاري وثقافي يضم الأهرامات والمتاحف العالمية',
    attractions: 45,
    popularity: 'عالية جداً',
    avgTemp: '25°C',
    bestSeason: 'شتاء/ربيع',
    isActive: true,
  },
]

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'كيف يمكنني حجز رحلة طيران؟',
    answer: 'يمكنك حجز رحلة طيران من خلال موقعنا بسهولة. اختر الوجهة المرغوبة، حدد التاريخ والوقت، ثم أكمل عملية الحجز عبر الدفع الآمن.',
    category: 'الحجوزات',
    isActive: true,
    createdAt: '2026-04-01'
  },
  {
    id: '2',
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نقبل جميع طرق الدفع الشائعة: بطاقات الائتمان، التحويل البنكي، والدفع عند الاستلام. جميع المعاملات آمنة ومشفرة.',
    category: 'الدفع',
    isActive: true,
    createdAt: '2026-04-01'
  },
  {
    id: '3',
    question: 'هل يمكنني إلغاء أو تعديل الحجز؟',
    answer: 'نعم، يمكنك إلغاء أو تعديل الحجز حتى 48 ساعة قبل موعد الرحلة. سيتم استرداد المبلغ حسب سياسة الإلغاء.',
    category: 'الحجوزات',
    isActive: true,
    createdAt: '2026-04-01'
  },
  {
    id: '4',
    question: 'ما هي الوثائق المطلوبة للسفر؟',
    answer: 'تحتاج إلى جواز سفر ساري المفعول، تأشيرة دخول إذا لزم الأمر، وتذكرة الطيران. تأكد من التحقق من متطلبات الوجهة المحددة.',
    category: 'السفر',
    isActive: true,
    createdAt: '2026-04-01'
  }
]

// Generic storage functions
function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch {
    return defaultValue
  }
}

function saveToStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

// Flights management
export const getFlights = (): Flight[] => getFromStorage('yaren_flights', defaultFlights)
export const saveFlights = (flights: Flight[]) => saveToStorage('yaren_flights', flights)

// Hotels management
export const getHotels = (): Hotel[] => getFromStorage('yaren_hotels', defaultHotels)
export const saveHotels = (hotels: Hotel[]) => saveToStorage('yaren_hotels', hotels)

// Buses management
export const getBuses = (): Bus[] => getFromStorage('yaren_buses', defaultBuses)
export const saveBuses = (buses: Bus[]) => saveToStorage('yaren_buses', buses)

// Tours management
export const getTours = (): Tour[] => getFromStorage('yaren_tours', defaultTours)
export const saveTours = (tours: Tour[]) => saveToStorage('yaren_tours', tours)

// Destinations management
export const getDestinations = (): Destination[] => getFromStorage('yaren_destinations', defaultDestinations)
export const saveDestinations = (destinations: Destination[]) => saveToStorage('yaren_destinations', destinations)

// FAQ management
export const getFAQs = (): FAQ[] => getFromStorage('yaren_faqs', defaultFAQs)
export const saveFAQs = (faqs: FAQ[]) => saveToStorage('yaren_faqs', faqs)

// Utility functions
export const generateId = (): string => Date.now().toString()

export const getDestinationsList = (): string[] => {
  const destinations = getDestinations()
  return destinations.filter(d => d.isActive).map(d => d.name)
}

export const getActiveFlights = (): Flight[] => {
  return getFlights().filter(flight => flight.isActive)
}

export const getActiveHotels = (): Hotel[] => {
  return getHotels().filter(hotel => hotel.isActive)
}

export const getActiveBuses = (): Bus[] => {
  return getBuses().filter(bus => bus.isActive)
}

export const getActiveTours = (): Tour[] => {
  return getTours().filter(tour => tour.isActive)
}

export const getActiveDestinations = (): Destination[] => {
  return getDestinations().filter(destination => destination.isActive)
}

export const getActiveFAQs = (): FAQ[] => {
  return getFAQs().filter(faq => faq.isActive)
}
