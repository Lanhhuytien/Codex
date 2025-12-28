import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api/products';
import { addCartItem } from '../api/cart';
import { useTranslation } from 'react-i18next';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      fetchProduct(Number(id)).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    await addCartItem({ product_id: product.id, quantity: 1 });
  };

  return (
    <div className="card">
      <h2>{product.translations?.[0]?.name}</h2>
      <p>{product.translations?.[0]?.description}</p>
      <p>
        {t('product.salePrice')}: {product.sale_price ?? product.price}
      </p>
      <button onClick={handleAddToCart}>{t('product.addToCart')}</button>
    </div>
  );
}
