const TopBar = () => {
  return (
    <div className="bg-dark text-white text-sm py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <span>Huy Tiến Store – Sản phẩm chính hãng • Giao nhanh trong ngày</span>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2">
            <span aria-hidden>📞</span> Hotline: <strong>1900 988 899</strong>
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <span aria-hidden>💬</span> Chat hỗ trợ nhanh
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
