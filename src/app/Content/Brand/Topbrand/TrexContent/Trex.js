import "bootstrap/dist/css/bootstrap.min.css";
import "./Trex.css";

const products = [
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Trek Madone SL 6 AXS Gen 8",
    brand: "TREK",
    category: "Xe Đạp Đua",
    model: "Madone SL 6 AXS Gen 8",
    price: "150,000,000đ",
  },
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Trek Madone SLR 9 AXS Gen 8",
    brand: "TREK",
    category: "Xe Đạp Đua",
    model: "Madone SLR 9 AXS Gen 8",
    price: "390,000,000đ",
  },
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Checkpoint SL 5 AXS Gen 3",
    brand: "TREK",
    category: "Xe Đạp Gravel",
    model: "Checkpoint SL 5 AXS Gen 3",
    price: "89,000,000đ",
  },
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Checkpoint SL 5 AXS Gen 3",
    brand: "TREK",
    category: "Xe Đạp Gravel",
    model: "Checkpoint SL 5 AXS Gen 3",
    price: "89,000,000đ",
  },
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Checkpoint SL 5 AXS Gen 3",
    brand: "TREK",
    category: "Xe Đạp Gravel",
    model: "Checkpoint SL 5 AXS Gen 3",
    price: "89,000,000đ",
  },
  {
    href: "/sanpham/sanpham",
    imgSrc: "/img/sp1.webp",
    alt: "Checkpoint SL 5 AXS Gen 3",
    brand: "TREK",
    category: "Xe Đạp Gravel",
    model: "Checkpoint SL 5 AXS Gen 3",
    price: "89,000,000đ",
  },
];

const Trex = () => {
  return (
    <div className="container mt-4">

      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-xl-4 mb-4">
            <a href={product.href} className="product-item d-block">
              <img src={product.imgSrc} alt={product.alt} />
              <h3>{product.brand}</h3>
              <p>{product.category}</p>
              <p>{product.model}</p>
              <p className="product-price">{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trex;
