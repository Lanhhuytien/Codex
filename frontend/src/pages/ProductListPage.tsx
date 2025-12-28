import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/products';

export default function ProductListPage() {
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
            <h3>{product.translations?.[0]?.name}</h3>
            <p>{product.sale_price ?? product.price}</p>
            <Link to={`/products/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
