import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Building2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const partners = [
  'Samsung', 'LG', 'Haier', 'Artel', 'Bosch', 'Electrolux', 'Philips', 'Midea'
];

const benefits = [
  {
    titleUz: "Original mahsulotlar",
    titleEn: "Original Products",
    descUz: "Faqat rasmiy distribyutorlardan sertifikatlangan mahsulotlar",
    descEn: "Only certified products from official distributors"
  },
  {
    titleUz: "Professional maslahat",
    titleEn: "Professional Advice",
    descUz: "Tajribali mutaxassislar sizga eng to'g'ri tanlovni qilishga yordam beradi",
    descEn: "Experienced specialists will help you make the right choice"
  },
  {
    titleUz: "Qulay to'lov usullari",
    titleEn: "Flexible Payment Options",
    descUz: "Naqd, karta va bo'lib-bo'lib to'lash imkoniyatlari",
    descEn: "Cash, card and installment payment options"
  },
  {
    titleUz: "Tez yetkazib berish",
    titleEn: "Fast Delivery",
    descUz: "Toshkent bo'ylab 24 soat ichida bepul yetkazib berish",
    descEn: "Free delivery within 24 hours across Tashkent"
  },
  {
    titleUz: "Kafolat xizmati",
    titleEn: "Warranty Service",
    descUz: "2 yilgacha kafolat va tez ta'mirlash xizmati",
    descEn: "Up to 2 years warranty and quick repair service"
  },
  {
    titleUz: "Texnik yordam",
    titleEn: "Technical Support",
    descUz: "24/7 texnik yordam va maslahat xizmati",
    descEn: "24/7 technical support and consultation service"
  }
];

const About = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                {t('Biz haqimizda', 'About Us')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                Welkin.Air
              </h1>
              <p className="text-lg text-primary-foreground/80">
                {t(
                  "15 yildan ortiq tajriba bilan O'zbekistonning eng ishonchli maishiy texnika sotuvchisi. Minglab oilalarga qulay va zamonaviy hayot tarzini taqdim etamiz.",
                  "The most trusted home appliance retailer in Uzbekistan with over 15 years of experience. We provide a comfortable and modern lifestyle to thousands of families."
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  {t('Bizning tarix', 'Our Story')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  {t(
                    "Sifat va ishonch - bizning asosiy qadriyatlarimiz",
                    "Quality and Trust - Our Core Values"
                  )}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t(
                    "Welkin.Air 2009 yilda tashkil topgan bo'lib, bugungi kunga qadar O'zbekistonning barcha viloyatlariga xizmat ko'rsatib kelmoqda. Biz faqat eng yaxshi brendlarning original mahsulotlarini sotamiz va har bir mijozimizga premium xizmat ko'rsatamiz.",
                    "Welkin.Air was founded in 2009 and has been serving all regions of Uzbekistan to date. We only sell original products from the best brands and provide premium service to each of our customers."
                  )}
                </p>
                <p className="text-muted-foreground">
                  {t(
                    "Bizning maqsadimiz - har bir oilaga qulay va zamonaviy hayot tarzini taqdim etish. Biz mijozlarimizning ishonchini qadrlaimiz va doimo eng yaxshi xizmatni taklif qilishga intilamiz.",
                    "Our goal is to provide every family with a comfortable and modern lifestyle. We value the trust of our customers and always strive to offer the best service."
                  )}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/50 rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-accent">15+</h3>
                    <p className="text-muted-foreground mt-2">{t('Yillik tajriba', 'Years Experience')}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-accent">50K+</h3>
                    <p className="text-muted-foreground mt-2">{t('Mamnun mijozlar', 'Happy Customers')}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-accent">8+</h3>
                    <p className="text-muted-foreground mt-2">{t('Hamkor brendlar', 'Partner Brands')}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-accent">14</h3>
                    <p className="text-muted-foreground mt-2">{t('Filiallar', 'Branches')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-secondary/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                {t('Afzalliklar', 'Benefits')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                {t('Biz bilan ishlash afzalliklari', 'Benefits of Working With Us')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <CheckCircle className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {language === 'uz' ? benefit.titleUz : benefit.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'uz' ? benefit.descUz : benefit.descEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                {t('Hamkorlar', 'Partners')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                {t('Ishonchli hamkorlarimiz', 'Our Trusted Partners')}
              </h2>
            </motion.div>

            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="flex gap-8"
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-card rounded-2xl px-12 py-8 shadow-card border border-border/50 flex items-center justify-center min-w-[200px]"
                  >
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-accent" />
                      <span className="text-xl font-bold text-foreground">{partner}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-hero-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                {t(
                  "Savollaringiz bormi? Biz bilan bog'laning!",
                  "Have questions? Contact us!"
                )}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {t(
                  "Bizning mutaxassislarimiz sizga yordam berishga tayyor. Bepul maslahat va professional xizmat.",
                  "Our specialists are ready to help you. Free consultation and professional service."
                )}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-glow">
                  {t("Bog'lanish", 'Contact Us')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
