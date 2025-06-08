
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"; 

const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") 
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Lỗi khi fetch sản phẩm:", err);
      });
  }, []);

  return (
    <div className={`container ${styles.mainContentContainer}`}>
      <div className={styles.ND}>Sản phẩm nổi bật</div>
      <div className={`row g-0 ${styles.productRow}`}>
        {products.length === 0 ? (
          <p>Đang tải sản phẩm...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-xl-4">
              <Link href={`/products/${product.id}`} className={`${styles.productItem} d-block`}>
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.webp'}
                  alt={product.name || 'Sản phẩm'}
                />
                <h3>{product.brand}</h3>
                <p>{product.category}</p>
                <p>{product.model}</p>
                <p className={styles.productPrice}>{product.price ? product.price.toLocaleString('vi-VN') + '₫' : ''}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MainContent;