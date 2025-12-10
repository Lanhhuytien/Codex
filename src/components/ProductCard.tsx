import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { formatCurrency } from '../utils/format';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="relative block">
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" loading="lazy" />
      </Link>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-gray-500">{product.brand}</p>
        <h3 className="font-semibold text-secondary line-clamp-2 leading-snug">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">{formatCurrency(product.salePrice ?? product.price)}</span>
          {product.salePrice && <span className="text-sm text-gray-400 line-through">{formatCurrency(product.price)}</span>}
        </div>
        <div className="flex flex-wrap gap-2">
          {product.tags?.map((tag) => (
            <span key={tag} className="text-xs bg-orange-50 text-primary px-2 py-1 rounded-full border border-orange-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 border border-primary text-primary rounded-lg py-2 text-sm font-semibold hover:bg-orange-50 transition"
          >
            Thêm vào giỏ
          </button>
          <Link
            to={`/checkout?product=${product.id}`}
            className="flex-1 bg-primary text-secondary text-center rounded-lg py-2 text-sm font-semibold hover:bg-orange-500 transition"
          >
            Mua ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
