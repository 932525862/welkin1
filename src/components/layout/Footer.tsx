import { Link } from 'react-router-dom';
import { Wind, Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Wind className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">
                Welkin<span className="text-accent">.Air</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t(
                "O'zbekistondagi eng ishonchli maishiy texnika sotuvchisi. 10 yildan ortiq tajriba va minglab mamnun mijozlar.",
                "The most trusted home appliance retailer in Uzbekistan. Over 10 years of experience and thousands of satisfied customers."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('Tezkor havolalar', 'Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('Bosh sahifa', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('Katalog', 'Catalog')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('Biz haqimizda', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('Kontaktlar', 'Contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("Bog'lanish", 'Contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent" />
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@welkin.air</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{t('Toshkent sh., Chilonzor tumani, Bunyodkor ko\'chasi 15', 'Tashkent, Chilanzar district, Bunyodkor street 15')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('Ijtimoiy tarmoqlar', 'Social Media')}</h3>
            <p className="text-primary-foreground/80 text-sm">
              {t(
                "Bizni ijtimoiy tarmoqlarda kuzating va eng so'nggi yangiliklar va chegirmalardan xabardor bo'ling.",
                "Follow us on social media and stay up to date with the latest news and discounts."
              )}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Send className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Welkin.Air. {t("Barcha huquqlar himoyalangan.", "All rights reserved.")}
          </p>
          <p className="text-primary-foreground/60 text-sm">
            {t("Sifat va ishonch bilan", "With quality and trust")} 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
