
import styles from "./page.module.css";
import ProductTabs from "./producttabs"; 

const formatPrice = (price) => {
  if (typeof price !== 'number') return price;
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
};

export default async function ProductDetailPage({ params }) {
  const { id } = await params; // Không cần await ở đây nếu params là đối tượng bình thường  nhuthaitrannguyen Tambiet@1217

  let product = null;
  try {
    // Fetch dữ liệu từ API Route của bạn
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${id}`, {
      next: { revalidate: 60 } // Revalidate dữ liệu sau 60 giây
    });

    if (!res.ok) {
      console.error(`Lỗi khi fetch sản phẩm ${id}:`, res.status, res.statusText);
    }
    product = await res.json();
  } catch (error) {
    console.error(`Không thể kết nối API hoặc parse JSON cho sản phẩm ${id}:`, error);
  }

  if (!product || product.error) {
    return (
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Sản Phẩm Không Tồn Tại</h1>
        <p>Xin lỗi, chúng tôi không tìm thấy sản phẩm bạn yêu cầu hoặc có lỗi xảy ra.</p>
      </div>
    );
  }

  const selectedImage = product?.images?.[0] || "";

  return (
    <div className={styles.productContainer}>
      <div className={styles.productPage}>
        <div className={styles.productImageGallery}>
          <div className={styles.mainImage}>
            <img src={selectedImage} alt={product.name} loading="lazy" />
          </div>
        </div>

        <div className={styles.productDetails}>
          <h1>Xe Đạp Đua</h1>
          <h2>{product.name}</h2>
          <p className={styles.productSku}>SKU: {product.sku}</p>
          <p className={styles.productPrice}>{formatPrice(product.price)}</p>

          <div className={styles.sizeSelector}>
            <label htmlFor="size">Kích thước:</label>
            <select id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <button className={styles.sizeChartBtn}>BẢNG KÍCH THƯỚC</button>
          </div>

          <div className={styles.quantitySelector}>
            <label htmlFor="quantity">Số lượng:</label>
            <input type="number" id="quantity" defaultValue="1" min="1" />
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.addToCart}>THÊM VÀO GIỎ</button>
            <button className={styles.installment}>TRẢ GÓP</button>
            <button className={styles.buyNow}>MUA NGAY</button>
          </div>

          <div className={styles.additionalInfo}>
            <p>
              Trả sau đến 12 tháng với <span>Fundiin</span>
            </p>
            <p className={styles.discountInfo}>
              Giảm đến <span>50K</span> khi thanh toán qua Fundiin.{" "}
              <a href="#">xem thêm</a>
            </p>
          </div>
        </div>
      </div>

      <ProductTabs
        description={product.description}
        technicalSpecs={product.technicalSpecs}
        geometry={product.geometry}
      />
    </div>
  );
}