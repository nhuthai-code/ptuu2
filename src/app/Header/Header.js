'use client';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'; 
export default function Header() {
  return (
    <header className={`${styles.header} py-3`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-auto">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className={styles.logo}
            />
          </div>
          {/* Tiêu đề */}
          <div className="col">
            <h1 className={styles.additionalTitle}>
              CỬA BÁN LẺ XE ĐẠP & PHỤ TÙNG
            </h1>
            <h4 className={styles.subtitle}>
              ĐẠT TIÊU CHUẨN KIỂM ĐỊNH CHẤT LƯỢNG UCI
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}