import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Sparkles, Tag } from 'lucide-react';
import { Product } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { language, t } = useLanguage();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 h-full"
        >
          {/* Image Container */}
          <div className="relative aspect-square bg-secondary/50 overflow-hidden">
            <motion.img
              src={product.image}
              alt={language === 'uz' ? product.nameUz : product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {t('Yangi', 'New')}
                </span>
              )}
              {product.isSale && product.oldPrice && (
                <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Quick Action */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 text-accent-foreground" />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Category */}
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {language === 'uz' ? product.categoryUz : product.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
              {language === 'uz' ? product.nameUz : product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2 pt-2">
              <span className="text-xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 pt-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.inStock ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
              <span className="text-xs text-muted-foreground">
                {product.inStock
                  ? t('Omborda mavjud', 'In Stock')
                  : t('Omborda mavjud emas', 'Out of Stock')}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
