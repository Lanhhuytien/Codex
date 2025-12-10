import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = useMemo(() => products.find((p) => p.id === id), [id])
  const related = useMemo(() => products.filter((p) => p.category === product?.category && p.id !== id), [product, id])
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedStorage, setSelectedStorage] = useState('')

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Huy Tiến Store`
      setSelectedColor(product.colors[0])
      setSelectedStorage(product.storage)
    }
  }, [product])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Không tìm thấy sản phẩm.</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="rounded-xl overflow-hidden bg-white shadow-sm">
            <img src={product.thumbnail} alt={product.name} className="w-full h-[420px] object-cover" loading="lazy" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`border rounded-lg py-2 text-sm ${
                  selectedColor === color ? 'border-primary text-primary font-semibold' : 'border-gray-200'
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-dark mb-2">{product.name}</h1>
            <p className="text-sm text-gray-600">SKU: {product.id}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-primary">{product.salePrice.toLocaleString('vi-VN')}₫</div>
            <div className="text-gray-500 line-through">{product.price.toLocaleString('vi-VN')}₫</div>
            <span className="badge bg-green-50 text-green-700">Giảm {product.discount}%</span>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Lựa chọn dung lượng</h4>
            <div className="flex gap-3">
              <button
                className={`px-4 py-2 rounded-lg border ${
                  selectedStorage === product.storage ? 'border-primary text-primary' : 'border-gray-200'
                }`}
                onClick={() => setSelectedStorage(product.storage)}
              >
                {product.storage}
              </button>
            </div>
          </div>
          <div className="card p-4 space-y-2 bg-orange-50 border-orange-100">
            <h4 className="font-semibold">Ưu đãi & Quà tặng</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Trả góp 0% qua thẻ tín dụng</li>
              <li>Tặng ốp lưng + dán cường lực cao cấp</li>
              <li>Giao nhanh trong 2-4h tại nội thành</li>
            </ul>
          </div>
          <div className="flex gap-3">
            <button className="button-primary flex-1" onClick={() => addItem(product)}>
              Mua ngay
            </button>
            <button
              className="flex-1 border border-primary text-primary font-semibold py-3 rounded-md hover:bg-primary hover:text-white transition"
              onClick={() => addItem(product)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Thông tin chi tiết</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {product.name} được phân phối chính hãng tại Huy Tiến Store. Máy hỗ trợ đầy đủ băng tần tại Việt Nam, đi kèm bộ
              sạc nhanh và được bảo hành tại trung tâm bảo hành chính hãng trên toàn quốc.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="card p-3">
                <p className="font-semibold">Bảo hành</p>
                <p>12 tháng chính hãng</p>
              </div>
              <div className="card p-3">
                <p className="font-semibold">Đổi mới</p>
                <p>1 đổi 1 trong 30 ngày nếu lỗi</p>
              </div>
              <div className="card p-3">
                <p className="font-semibold">Tình trạng</p>
                <p>Nguyên seal, đầy đủ phụ kiện</p>
              </div>
              <div className="card p-3">
                <p className="font-semibold">Giao hàng</p>
                <p>2-4h nội thành, COD toàn quốc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="mt-12">
          <div className="section-title">Sản phẩm liên quan</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
