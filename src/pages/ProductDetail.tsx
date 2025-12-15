import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();

  const product = products.find((p) => p.id === id);
  const similarProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-16 md:pt-20">
          <div className="container-custom py-20 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              {t("Mahsulot topilmadi", "Product not found")}
            </h1>
            <Link to="/catalog">
              <Button className="mt-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("Katalogga qaytish", "Back to Catalog")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS';
  };

  const handleAddToCart = () => {
    toast({
      title: t("Savatga qo'shildi!", "Added to Cart!"),
      description: language === 'uz' ? product.nameUz : product.name,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/50 py-4">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-accent">
                {t("Bosh sahifa", "Home")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/catalog" className="text-muted-foreground hover:text-accent">
                {t("Katalog", "Catalog")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">
                {language === 'uz' ? product.nameUz : product.name}
              </span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="relative aspect-square bg-secondary/50 rounded-3xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={language === 'uz' ? product.nameUz : product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isSale && product.oldPrice && (
                    <span className="absolute top-6 left-6 px-4 py-2 bg-destructive text-destructive-foreground text-sm font-semibold rounded-full">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Thumbnail placeholder */}
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-20 h-20 rounded-xl bg-secondary/50 cursor-pointer border-2 transition-all ${
                        i === 1 ? 'border-accent' : 'border-transparent hover:border-accent/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Category */}
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  {language === 'uz' ? product.categoryUz : product.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {language === 'uz' ? product.nameUz : product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} {t("sharh", "reviews")})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-bold text-foreground">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg">
                  {language === 'uz' ? product.descriptionUz : product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">
                    {t("Xususiyatlar", "Features")}:
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(language === 'uz' ? product.featuresUz : product.features).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      product.inStock ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-foreground font-medium">
                    {product.inStock
                      ? t('Omborda mavjud', 'In Stock')
                      : t('Omborda mavjud emas', 'Out of Stock')}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t("Savatga qo'shish", "Add to Cart")}
                  </Button>
                  <Link to="/contact" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full">
                      {t("Buyurtma berish", "Order Now")}
                    </Button>
                  </Link>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t("Bepul yetkazish", "Free Delivery")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("Toshkent bo'ylab", "Across Tashkent")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t("2 yil kafolat", "2 Year Warranty")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("Rasmiy kafolat", "Official Warranty")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground">
                  {t("O'xshash mahsulotlar", "Similar Products")}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((p, index) => (
                  <ProductCard key={p.id} product={p} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
