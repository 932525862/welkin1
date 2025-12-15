import { motion } from 'framer-motion';
import { Users, Package, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  {
    icon: Users,
    valueUz: '50,000+',
    valueEn: '50,000+',
    labelUz: 'Mamnun mijozlar',
    labelEn: 'Satisfied Customers',
  },
  {
    icon: Package,
    valueUz: '10,000+',
    valueEn: '10,000+',
    labelUz: 'Sotilgan mahsulotlar',
    labelEn: 'Products Sold',
  },
  {
    icon: Award,
    valueUz: '15+',
    valueEn: '15+',
    labelUz: 'Yillik tajriba',
    labelEn: 'Years Experience',
  },
  {
    icon: Clock,
    valueUz: '24/7',
    valueEn: '24/7',
    labelUz: 'Texnik yordam',
    labelEn: 'Technical Support',
  },
];

const features = [
  {
    titleUz: 'Premium Sifat',
    titleEn: 'Premium Quality',
    descUz: "Faqat eng yaxshi brendlardan original mahsulotlar. Sifat - bizning ustuvorimiz.",
    descEn: 'Only original products from the best brands. Quality is our priority.',
  },
  {
    titleUz: 'Bepul Yetkazib Berish',
    titleEn: 'Free Delivery',
    descUz: "Toshkent bo'ylab bepul yetkazib berish. Viloyatlarga ham qulay narxlarda.",
    descEn: 'Free delivery across Tashkent. Affordable rates for regions too.',
  },
  {
    titleUz: "Professional O'rnatish",
    titleEn: 'Professional Installation',
    descUz: "Malakali ustalar tomonidan bepul o'rnatish xizmati.",
    descEn: 'Free installation service by qualified technicians.',
  },
  {
    titleUz: 'Uzaytirilgan Kafolat',
    titleEn: 'Extended Warranty',
    descUz: "2 yilgacha kafolat va umrbod texnik yordam.",
    descEn: 'Up to 2 years warranty and lifetime technical support.',
  },
];

const StatsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-card border border-border/50"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">
                {language === 'uz' ? stat.valueUz : stat.valueEn}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'uz' ? stat.labelUz : stat.labelEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {t('Nima uchun biz?', 'Why Us?')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t('Bizning ustunliklarimiz', 'Our Advantages')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4">
                <span className="text-accent-foreground font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {language === 'uz' ? feature.titleUz : feature.titleEn}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'uz' ? feature.descUz : feature.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
