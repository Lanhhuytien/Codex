import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="card p-4 flex flex-col h-full">
      <Link to={`/san-pham/${product.id}`} className="flex-1 flex flex-col gap-3">
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-50">
          <img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="badge bg-orange-50 text-primary border border-orange-100">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-dark text-lg leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            {product.salePrice.toLocaleString('vi-VN')}₫
          </span>
          <span className="text-sm text-gray-500 line-through">
            {product.price.toLocaleString('vi-VN')}₫
          </span>
          <span className="text-sm font-semibold text-green-600">-{product.discount}%</span>
        </div>
        <div className="text-sm text-gray-500">Dung lượng: {product.storage}</div>
      </Link>
      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition"
          onClick={() => addItem(product)}
        >
          Thêm vào giỏ
        </button>
        <button className="button-primary flex-1" onClick={() => addItem(product)}>
          Mua ngay
        </button>
      </div>
    </div>
  )
}

export default ProductCard
