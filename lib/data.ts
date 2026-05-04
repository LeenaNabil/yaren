// Sample Data for Yaren Tours

export interface Trip {
  id: string
  title: string
  destination: string
  country: string
  description: string
  price: number
  originalPrice?: number
  duration: string
  startDate: string
  endDate: string
  image: string
  guide: string
  guideImage?: string
  rating: number
  reviews: number
  includes: string[]
  itinerary: { day: number; title: string; description: string }[]
  featured: boolean
  category: string
}

export interface Flight {
  id: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  duration: string
  airline: string
  cabinClass: "economy" | "business"
  priceOneWay: number
  priceRoundTrip: number
  availableDays: string[]
}

export interface Hotel {
  id: string
  name: string
  location: string
  region: string
  category: string
  rating: number
  pricePerNight: number
  image: string
  amenities: string[]
}

export interface BusRoute {
  id: string
  destination: string
  type: "one-way" | "round-trip"
  pricePerPerson: number
  availableDays: string[]
  cities: string[]
  departureTime: string
  returnTime?: string
}

export const trips: Trip[] = [
  {
    id: "1",
    title: "رحلة تركيا الساحرة",
    destination: "اسطنبول وبورصة",
    country: "تركيا",
    description: "استكشف جمال تركيا مع مرشد عربي محترف. زيارة أهم المعالم السياحية في اسطنبول وبورصة مع إقامة فندقية فاخرة.",
    price: 3500,
    originalPrice: 4200,
    duration: "7 أيام",
    startDate: "2026-05-15",
    endDate: "2026-05-22",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
    guide: "أحمد محمود",
    rating: 4.9,
    reviews: 128,
    includes: ["طيران ذهاب وعودة", "إقامة فندقية 4 نجوم", "وجبة إفطار يومية", "جولات سياحية", "مرشد عربي"],
    itinerary: [
      { day: 1, title: "الوصول إلى اسطنبول", description: "استقبال في المطار والتوجه للفندق" },
      { day: 2, title: "جولة السلطان أحمد", description: "زيارة المسجد الأزرق وآيا صوفيا" },
      { day: 3, title: "رحلة البوسفور", description: "جولة بحرية في مضيق البوسفور" },
      { day: 4, title: "السوق الكبير", description: "جولة تسوق في البازار الكبير" },
      { day: 5, title: "بورصة الخضراء", description: "رحلة يومية إلى بورصة" },
      { day: 6, title: "يوم حر", description: "يوم حر للتسوق والاستكشاف" },
      { day: 7, title: "العودة", description: "التوجه للمطار والعودة للبلاد" },
    ],
    featured: true,
    category: "عائلية"
  },
  {
    id: "2",
    title: "سحر جورجيا",
    destination: "تبليسي وباتومي",
    country: "جورجيا",
    description: "اكتشف جمال جورجيا الطبيعي الخلاب مع جولات في تبليسي وباتومي الساحلية.",
    price: 2800,
    duration: "6 أيام",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800",
    guide: "سامي خليل",
    rating: 4.8,
    reviews: 95,
    includes: ["طيران ذهاب وعودة", "إقامة فندقية 4 نجوم", "وجبة إفطار يومية", "جولات سياحية", "مرشد عربي"],
    itinerary: [
      { day: 1, title: "الوصول إلى تبليسي", description: "استقبال والتوجه للفندق" },
      { day: 2, title: "جولة تبليسي", description: "زيارة المدينة القديمة والحمامات الكبريتية" },
      { day: 3, title: "رحلة كازبيجي", description: "جولة إلى جبال القوقاز" },
      { day: 4, title: "السفر لباتومي", description: "التوجه لمدينة باتومي الساحلية" },
      { day: 5, title: "استكشاف باتومي", description: "جولة في المدينة والشاطئ" },
      { day: 6, title: "العودة", description: "العودة للبلاد" },
    ],
    featured: true,
    category: "مغامرة"
  },
  {
    id: "3",
    title: "عطلة شرم الشيخ",
    destination: "شرم الشيخ",
    country: "مصر",
    description: "استمتع بأجمل شواطئ البحر الأحمر مع أنشطة غوص وسنوركلينج.",
    price: 1800,
    originalPrice: 2200,
    duration: "5 أيام",
    startDate: "2026-05-20",
    endDate: "2026-05-25",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800",
    guide: "محمد علي",
    rating: 4.7,
    reviews: 156,
    includes: ["باص ذهاب وعودة", "إقامة فندقية شاملة", "رحلة غوص", "رحلة سفاري"],
    itinerary: [
      { day: 1, title: "الوصول", description: "الوصول لشرم الشيخ واستلام الغرف" },
      { day: 2, title: "رحلة الغوص", description: "غوص في محمية رأس محمد" },
      { day: 3, title: "رحلة السفاري", description: "جولة صحراوية مع عشاء بدوي" },
      { day: 4, title: "يوم استجمام", description: "يوم حر على الشاطئ" },
      { day: 5, title: "العودة", description: "العودة للبلاد" },
    ],
    featured: true,
    category: "شاطئية"
  },
  {
    id: "4",
    title: "أذربيجان الرائعة",
    destination: "باكو",
    country: "أذربيجان",
    description: "اكتشف مدينة باكو العصرية مع مزيج فريد من التراث والحداثة.",
    price: 3200,
    duration: "5 أيام",
    startDate: "2026-06-10",
    endDate: "2026-06-15",
    image: "https://images.unsplash.com/photo-1603922164516-f13c8a9693e3?w=800",
    guide: "خالد أبو سعيد",
    rating: 4.6,
    reviews: 78,
    includes: ["طيران ذهاب وعودة", "إقامة فندقية 5 نجوم", "وجبات إفطار", "جولات سياحية"],
    itinerary: [
      { day: 1, title: "الوصول", description: "الوصول لباكو" },
      { day: 2, title: "المدينة القديمة", description: "جولة في المدينة القديمة" },
      { day: 3, title: "برج النار", description: "زيارة أبراج اللهب" },
      { day: 4, title: "رحلة خارجية", description: "رحلة إلى بركان الطين" },
      { day: 5, title: "العودة", description: "العودة للبلاد" },
    ],
    featured: false,
    category: "ثقافية"
  },
]

export const flights: Flight[] = [
  {
    id: "f1",
    from: "عمان",
    to: "اسطنبول",
    departureTime: "08:00",
    arrivalTime: "11:30",
    duration: "3:30",
    airline: "الملكية الأردنية",
    cabinClass: "economy",
    priceOneWay: 850,
    priceRoundTrip: 1500,
    availableDays: ["sunday", "tuesday", "thursday"],
  },
  {
    id: "f2",
    from: "اسطنبول",
    to: "عمان",
    departureTime: "14:00",
    arrivalTime: "17:30",
    duration: "3:30",
    airline: "الملكية الأردنية",
    cabinClass: "economy",
    priceOneWay: 900,
    priceRoundTrip: 1500,
    availableDays: ["sunday", "tuesday", "thursday"],
  },
]

export const hotels: Hotel[] = [
  // إيلات والبحر الميت
  {
    id: "h1",
    name: "فندق دان إيلات",
    location: "إيلات",
    region: "eilat",
    category: "إيلات والبحر الميت",
    rating: 5,
    pricePerNight: 800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["مسبح", "سبا", "مطعم", "واي فاي", "شاطئ خاص"],
  },
  {
    id: "h2",
    name: "فندق إسروتيل البحر الميت",
    location: "البحر الميت",
    region: "dead-sea-local",
    category: "إيلات والبحر الميت",
    rating: 4,
    pricePerNight: 600,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    amenities: ["مسبح", "سبا علاجي", "مطعم", "واي فاي"],
  },
  // أريحا
  {
    id: "h3",
    name: "فندق انتركونتيننتال أريحا",
    location: "أريحا",
    region: "jericho",
    category: "أريحا",
    rating: 5,
    pricePerNight: 450,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    amenities: ["مسبح", "مطعم", "واي فاي", "صالة رياضة"],
  },
  // الأردن
  {
    id: "h4",
    name: "فندق فورسيزونز عمان",
    location: "عمان",
    region: "amman",
    category: "الأردن",
    rating: 5,
    pricePerNight: 550,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    amenities: ["مسبح", "سبا", "مطاعم متعددة", "واي فاي"],
  },
  {
    id: "h5",
    name: "فندق كمبنسكي العقبة",
    location: "العقبة",
    region: "aqaba",
    category: "الأردن",
    rating: 5,
    pricePerNight: 700,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    amenities: ["شاطئ خاص", "مسبح", "غوص", "سبا"],
  },
  // سيناء
  {
    id: "h6",
    name: "فندق ريكسوس شرم الشيخ",
    location: "شرم الشيخ",
    region: "sharm",
    category: "سيناء",
    rating: 5,
    pricePerNight: 400,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: ["شامل كلياً", "مسبح", "شاطئ", "أكوا بارك"],
  },
  {
    id: "h7",
    name: "فندق دهب باراديس",
    location: "دهب",
    region: "dahab",
    category: "سيناء",
    rating: 4,
    pricePerNight: 250,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    amenities: ["شاطئ", "غوص", "مطعم", "واي فاي"],
  },
]

export const busRoutes: BusRoute[] = [
  {
    id: "b1",
    destination: "شرم الشيخ",
    type: "round-trip",
    pricePerPerson: 330,
    availableDays: ["sunday", "tuesday"],
    cities: ["الناصرة", "كفركنا", "عرابة", "سخنين"],
    departureTime: "06:00",
    returnTime: "18:00",
  },
  {
    id: "b2",
    destination: "إيلات",
    type: "round-trip",
    pricePerPerson: 200,
    availableDays: ["sunday", "thursday"],
    cities: ["الناصرة", "كفركنا", "طمرة"],
    departureTime: "07:00",
    returnTime: "20:00",
  },
  {
    id: "b3",
    destination: "البحر الميت",
    type: "round-trip",
    pricePerPerson: 150,
    availableDays: ["tuesday", "thursday"],
    cities: ["الناصرة", "كفركنا", "أم الفحم"],
    departureTime: "08:00",
    returnTime: "19:00",
  },
]

export const faqItems = [
  {
    question: "هل يارين تورز هو مكتب سياحة مرخص؟",
    answer: "نعم، يارين تورز هو مكتب سياحي رسمي وقانوني، مركزه الرئيسي في كفركنا، ونحن المنصة الأكبر التي تدير وتوفر أضخم شبكة للرحلات المنظمة في البلاد.",
  },
  {
    question: "ما الذي يميز الرحلات المنظمة عبر موقعكم؟",
    answer: "تتميز رحلاتنا بثلاث نقاط أساسية: الشمولية (أكبر تنوع في الوجهات والأسعار)، اللغة (كافة الرحلات يقودها مرشدون عرب محترفون)، والراحة (الرحلة تشمل كل شيء من طيران وفنادق ومواصلات وبرامج يومية).",
  },
  {
    question: "هل المرشد السياحي يتحدث العربية؟",
    answer: "بكل تأكيد. نحن نركز بشكل أساسي على توفير رحلات بإرشاد عربي كامل، لضمان وصول المعلومة لكل مسافر ولخلق أجواء عائلية مريحة خلال الرحلة.",
  },
  {
    question: "كيف يمكنني التأكد من أنني حصلت على أفضل سعر؟",
    answer: "بما أننا المنصة الأضخم، فنحن نوفر لك رؤية كاملة لكل الخيارات المتاحة في السوق. هذا يتيح لك المقارنة واختيار العرض الذي يناسب ميزانيتك، مع ضمان الجودة التي نلتزم بها في كافة برامجنا.",
  },
  {
    question: "كيف يمكنني حجز رحلة؟",
    answer: "يمكنك الحجز بسهولة عبر موقعنا من خلال زر 'احجز الآن عبر واتساب' أو التواصل معنا مباشرة على رقم المكتب. سيتواصل معك فريقنا لتأكيد التفاصيل وإتمام الحجز.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً في مكتبنا، أو عبر التحويل البنكي. نعمل حالياً على إضافة خيارات الدفع الإلكتروني قريباً.",
  },
]
