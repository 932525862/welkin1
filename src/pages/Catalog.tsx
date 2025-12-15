import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

const Catalog = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
        );

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
                {t('Mahsulotlar katalogi', 'Product Catalog')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                {t(
                  "O'zbekistonda eng sifatli texnikalar",
                  'The Highest Quality Appliances in Uzbekistan'
                )}
              </h1>
              <p className="text-lg text-primary-foreground/80">
                {t(
                  "Mijozlarimizning 98% dan ortig'i bizning mahsulotlarimizdan mamnun. Premium sifat va professional xizmat - bizning asosiy maqsadimiz.",
                  "Over 98% of our customers are satisfied with our products. Premium quality and professional service is our main goal."
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-accent text-accent-foreground shadow-glow'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {language === 'uz' ? cat.nameUz : cat.name}
                </button>
              ))}
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {t(
                    "Bu kategoriyada mahsulot topilmadi.",
                    "No products found in this category."
                  )}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
