import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data.data ?? []));
  }, []);

  return (
    <div>
      <h1>Mobile Store</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.translations?.[0]?.name}</h3>
            <p>SKU: {product.sku}</p>
            <p>Price: {product.sale_price ?? product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
