import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Snowflake, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const slides = [
  {
    id: 1,
    titleUz: 'Yozgi Mega Chegirmalar',
    titleEn: 'Summer Mega Sale',
    subtitleUz: 'Konditsionerlarga 30% gacha chegirma',
    subtitleEn: 'Up to 30% off on Air Conditioners',
    descUz: 'Issiq kunlar uchun eng yaxshi konditsionerlar. Premium sifat, arzon narx.',
    descEn: 'Best air conditioners for hot days. Premium quality, affordable price.',
    icon: Snowflake,
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 2,
    titleUz: 'Smart Texnologiyalar',
    titleEn: 'Smart Technologies',
    subtitleUz: 'Yangi avlod muzlatgichlar',
    subtitleEn: 'Next Generation Refrigerators',
    descUz: 'WiFi boshqaruv, energiya tejash va zamonaviy dizayn bir joyda.',
    descEn: 'WiFi control, energy saving and modern design in one place.',
    icon: Zap,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    titleUz: '2 Yillik Kafolat',
    titleEn: '2 Year Warranty',
    subtitleUz: "Barcha mahsulotlarga bepul o'rnatish",
    subtitleEn: 'Free installation on all products',
    descUz: "Xotirjamlik bilan xarid qiling. Professional o'rnatish va texnik yordam.",
    descEn: 'Shop with peace of mind. Professional installation and technical support.',
    icon: Shield,
    color: 'from-violet-500 to-purple-600',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-primary-foreground space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white text-sm font-medium`}
              >
                <Icon className="w-4 h-4" />
                {language === 'uz' ? slide.subtitleUz : slide.subtitleEn}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {language === 'uz' ? slide.titleUz : slide.titleEn}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-primary-foreground/80 max-w-lg"
              >
                {language === 'uz' ? slide.descUz : slide.descEn}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/catalog">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-glow">
                    {t("Katalogni ko'rish", 'View Catalog')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    {t("Bog'lanish", 'Contact Us')}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className={`w-80 h-80 rounded-full bg-gradient-to-br ${slide.color} opacity-20 blur-3xl absolute -inset-10`} />
              <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${slide.color} flex items-center justify-center shadow-2xl`}>
                <Icon className="w-32 h-32 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12 lg:justify-start">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
