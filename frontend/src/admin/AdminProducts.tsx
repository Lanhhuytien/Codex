import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data.data ?? []));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h4>{product.translations?.[0]?.name}</h4>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
