import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: t("Xabaringiz yuborildi!", "Your message has been sent!"),
      description: t(
        "Tez orada siz bilan bog'lanamiz.",
        "We will contact you shortly."
      ),
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      titleUz: 'Telefon',
      titleEn: 'Phone',
      value: '+998 90 123 45 67',
      descUz: 'Dushanba - Shanba: 9:00 - 20:00',
      descEn: 'Monday - Saturday: 9:00 AM - 8:00 PM'
    },
    {
      icon: Mail,
      titleUz: 'Email',
      titleEn: 'Email',
      value: 'info@welkin.air',
      descUz: '24 soat ichida javob beramiz',
      descEn: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      titleUz: 'Manzil',
      titleEn: 'Address',
      value: t("Toshkent sh., Chilonzor tumani", "Tashkent, Chilanzar district"),
      descUz: "Bunyodkor ko'chasi 15",
      descEn: "Bunyodkor street 15"
    },
    {
      icon: Clock,
      titleUz: 'Ish vaqti',
      titleEn: 'Working Hours',
      value: t('Dushanba - Shanba', 'Monday - Saturday'),
      descUz: '9:00 - 20:00',
      descEn: '9:00 AM - 8:00 PM'
    }
  ];

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
                {t("Bog'lanish", 'Contact')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                {t("Biz bilan bog'laning", 'Get in Touch')}
              </h1>
              <p className="text-lg text-primary-foreground/80">
                {t(
                  "Savollaringiz bormi? Bizning mutaxassislarimiz sizga yordam berishga tayyor. Bepul maslahat va professional xizmat kafolatlanadi.",
                  "Have questions? Our specialists are ready to help you. Free consultation and professional service guaranteed."
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t("Xabar yuborish", "Send a Message")}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {t(
                      "Formani to'ldiring va biz siz bilan tez orada bog'lanamiz. Har qanday savol bo'yicha bepul maslahat beramiz.",
                      "Fill out the form and we will contact you shortly. We provide free consultation on any question."
                    )}
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {t("Rahmat!", "Thank You!")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(
                          "Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.",
                          "Your message has been sent successfully. We will contact you soon."
                        )}
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', phone: '', message: '' });
                        }}
                        variant="outline"
                        className="mt-6"
                      >
                        {t("Yangi xabar", "New Message")}
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("Ismingiz", "Your Name")} *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t("Ismingizni kiriting", "Enter your name")}
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("Telefon raqam", "Phone Number")} *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+998 90 123 45 67"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("Xabar matni", "Message")} *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t(
                            "Qanday mahsulot kerak? Qanday savolingiz bor? Yozing, biz yordam beramiz!",
                            "What product do you need? What question do you have? Write, we will help!"
                          )}
                          className="min-h-[150px] resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow">
                        {t("Yuborish", "Send Message")}
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t("Kontakt ma'lumotlari", "Contact Information")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t(
                      "Istalgan vaqtda biz bilan bog'lanishingiz mumkin. Sizni kutib qolamiz!",
                      "You can contact us at any time. We are waiting for you!"
                    )}
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {t(info.titleUz, info.titleEn)}
                      </h3>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {t(info.descUz, info.descEn)}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Map Placeholder */}
                <div className="bg-secondary/50 rounded-2xl h-64 flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      {t("Xarita", "Map")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
