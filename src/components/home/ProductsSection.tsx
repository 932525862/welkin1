import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsSection = () => {
  const { t } = useLanguage();
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {t('Bizning mahsulotlar', 'Our Products')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t('Mashhur texnikalar', 'Popular Appliances')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Eng sifatli va zamonaviy maishiy texnikalar. Barcha mahsulotlar kafolatli va bepul yetkazib beriladi.",
              "The highest quality and modern home appliances. All products are guaranteed and delivered for free."
            )}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="group">
              {t("Barcha mahsulotlarni ko'rish", 'View All Products')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
