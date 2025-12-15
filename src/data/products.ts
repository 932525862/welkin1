import acInverter from '@/assets/ac-inverter.jpg';
import refrigerator from '@/assets/refrigerator.jpg';
import gasStove from '@/assets/gas-stove.jpg';
import washingMachine from '@/assets/washing-machine.jpg';

export interface Product {
  id: string;
  name: string;
  nameUz: string;
  category: string;
  categoryUz: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  descriptionUz: string;
  features: string[];
  featuresUz: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Inverter Air Conditioner",
    nameUz: "Premium Inverter Konditsioner",
    category: "Air Conditioners",
    categoryUz: "Konditsionerlar",
    price: 4500000,
    oldPrice: 5200000,
    image: acInverter,
    description: "Energy-efficient inverter technology with smart cooling system. Perfect for rooms up to 35 sq.m.",
    descriptionUz: "Energiya tejovchi inverter texnologiyasi va aqlli sovutish tizimi. 35 kv.m gacha xonalar uchun ideal.",
    features: [
      "Inverter Technology",
      "WiFi Control",
      "24000 BTU",
      "Energy Class A+++",
      "Silent Operation"
    ],
    featuresUz: [
      "Inverter Texnologiyasi",
      "WiFi Boshqaruvi",
      "24000 BTU",
      "A+++ Energiya sinfi",
      "Sokin ishlash"
    ],
    rating: 4.8,
    reviews: 256,
    inStock: true,
    isNew: true,
    isSale: true
  },
  {
    id: "2",
    name: "Smart Refrigerator Pro",
    nameUz: "Smart Muzlatgich Pro",
    category: "Refrigerators",
    categoryUz: "Muzlatgichlar",
    price: 8900000,
    image: refrigerator,
    description: "Large capacity smart refrigerator with No Frost technology and touch display.",
    descriptionUz: "Katta hajmli smart muzlatgich, No Frost texnologiyasi va sensorli displey bilan.",
    features: [
      "No Frost Technology",
      "Touch Display",
      "560L Capacity",
      "Multi Air Flow",
      "LED Lighting"
    ],
    featuresUz: [
      "No Frost Texnologiyasi",
      "Sensorli Displey",
      "560L Hajm",
      "Multi Havo Oqimi",
      "LED Yoritish"
    ],
    rating: 4.9,
    reviews: 189,
    inStock: true,
    isNew: true
  },
  {
    id: "3",
    name: "Professional Gas Stove",
    nameUz: "Professional Gaz Plitasi",
    category: "Gas Stoves",
    categoryUz: "Gaz Plitalari",
    price: 3200000,
    oldPrice: 3800000,
    image: gasStove,
    description: "5-burner gas stove with electric oven and automatic ignition system.",
    descriptionUz: "5 ta gorelkali gaz plitasi, elektr pech va avtomatik yoqish tizimi bilan.",
    features: [
      "5 Burners",
      "Electric Oven",
      "Auto Ignition",
      "Stainless Steel",
      "Timer Function"
    ],
    featuresUz: [
      "5 ta Gorelka",
      "Elektr Pech",
      "Avtomatik Yoqish",
      "Zanglamaydigan Po'lat",
      "Taymer Funksiyasi"
    ],
    rating: 4.7,
    reviews: 145,
    inStock: true,
    isSale: true
  },
  {
    id: "4",
    name: "Front Load Washing Machine",
    nameUz: "Front Load Kir Yuvish Mashinasi",
    category: "Washing Machines",
    categoryUz: "Kir Yuvish Mashinalari",
    price: 5600000,
    image: washingMachine,
    description: "10kg capacity washing machine with steam cleaning and smart diagnosis.",
    descriptionUz: "10kg hajmli kir yuvish mashinasi, bug' tozalash va smart diagnostika bilan.",
    features: [
      "10kg Capacity",
      "Steam Clean",
      "Smart Diagnosis",
      "1400 RPM",
      "Inverter Motor"
    ],
    featuresUz: [
      "10kg Hajm",
      "Bug' Tozalash",
      "Smart Diagnostika",
      "1400 RPM",
      "Inverter Motor"
    ],
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: "5",
    name: "Split System Air Conditioner",
    nameUz: "Split Tizimli Konditsioner",
    category: "Air Conditioners",
    categoryUz: "Konditsionerlar",
    price: 3800000,
    image: acInverter,
    description: "Compact split system with efficient cooling for small to medium rooms.",
    descriptionUz: "Kichik va o'rta xonalar uchun samarali sovutish bilan ixcham split tizim.",
    features: [
      "12000 BTU",
      "Energy Class A++",
      "Remote Control",
      "Sleep Mode",
      "Auto Restart"
    ],
    featuresUz: [
      "12000 BTU",
      "A++ Energiya sinfi",
      "Masofadan Boshqarish",
      "Uyqu Rejimi",
      "Avtomatik Qayta Ishga Tushirish"
    ],
    rating: 4.5,
    reviews: 203,
    inStock: true
  },
  {
    id: "6",
    name: "Built-in Dishwasher",
    nameUz: "O'rnatilgan Idish Yuvish Mashinasi",
    category: "Dishwashers",
    categoryUz: "Idish Yuvish Mashinalari",
    price: 4200000,
    oldPrice: 4800000,
    image: washingMachine,
    description: "14 place settings dishwasher with 8 wash programs and half load option.",
    descriptionUz: "14 to'plam idish sig'imli idish yuvish mashinasi, 8 yuvish dasturi va yarim yuklash opsiyasi bilan.",
    features: [
      "14 Place Settings",
      "8 Programs",
      "Half Load",
      "Delay Start",
      "Aqua Stop"
    ],
    featuresUz: [
      "14 To'plam Idish",
      "8 Dastur",
      "Yarim Yuklash",
      "Kechiktirilgan Boshlash",
      "Aqua Stop"
    ],
    rating: 4.4,
    reviews: 67,
    inStock: true,
    isSale: true
  },
  {
    id: "7",
    name: "Double Door Refrigerator",
    nameUz: "Ikki Eshikli Muzlatgich",
    category: "Refrigerators",
    categoryUz: "Muzlatgichlar",
    price: 6500000,
    image: refrigerator,
    description: "French door refrigerator with water dispenser and ice maker.",
    descriptionUz: "French door muzlatgich, suv dispenseri va muz tayyorlagich bilan.",
    features: [
      "French Door",
      "Water Dispenser",
      "Ice Maker",
      "470L Capacity",
      "Digital Control"
    ],
    featuresUz: [
      "French Door",
      "Suv Dispenseri",
      "Muz Tayyorlagich",
      "470L Hajm",
      "Raqamli Boshqaruv"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: "8",
    name: "Glass Top Gas Stove",
    nameUz: "Shisha Ustki Gaz Plitasi",
    category: "Gas Stoves",
    categoryUz: "Gaz Plitalari",
    price: 2800000,
    image: gasStove,
    description: "Elegant glass top gas stove with 4 burners and easy-clean surface.",
    descriptionUz: "4 ta gorelkali nafis shisha ustki gaz plitasi va oson tozalanadigan sirt.",
    features: [
      "Glass Top",
      "4 Burners",
      "Auto Ignition",
      "Easy Clean",
      "Flame Failure Safety"
    ],
    featuresUz: [
      "Shisha Ust",
      "4 ta Gorelka",
      "Avtomatik Yoqish",
      "Oson Tozalash",
      "Olov O'chish Himoyasi"
    ],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    isNew: true
  }
];

export const categories = [
  { id: "all", name: "All Products", nameUz: "Barcha Mahsulotlar" },
  { id: "air-conditioners", name: "Air Conditioners", nameUz: "Konditsionerlar" },
  { id: "refrigerators", name: "Refrigerators", nameUz: "Muzlatgichlar" },
  { id: "gas-stoves", name: "Gas Stoves", nameUz: "Gaz Plitalari" },
  { id: "washing-machines", name: "Washing Machines", nameUz: "Kir Yuvish Mashinalari" },
  { id: "dishwashers", name: "Dishwashers", nameUz: "Idish Yuvish Mashinalari" },
];
