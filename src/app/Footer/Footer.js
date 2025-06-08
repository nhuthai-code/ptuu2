import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-white py-4`}>
      <div className="container">
        <div className="row">
          {/* Về Chúng Tôi */}
          <div className="col-md-3">
            <h5>Về Chúng Tôi</h5>
            <p>Chúng tôi cung cấp các loại xe đạp, phụ tùng, phụ kiện chất lượng cao từ các thương hiệu nổi tiếng.</p>
          </div>
          <div className="col-md-3">
            <h5>Liên Kết Nhanh</h5>
            <ul className={`list-unstyled ${styles.listUnstyled}`}>
              <li><a href="#" className="text-white">Trang Chủ</a></li>
              <li><a href="#" className="text-white">Sản Phẩm</a></li>
              <li><a href="#" className="text-white">Khuyến Mãi</a></li>
              <li><a href="#" className="text-white">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Liên Hệ */}
          <div className="col-md-3">
            <h5>Liên Hệ</h5>
            <p>Địa chỉ: Số 123, Đường , Thành phố</p>
            <p>Điện thoại: 0123 456 789</p>
            <p>Email: contact@xedap.com</p>
            <p>
              <a href="https://maps.app.goo.gl/syWekPBwmC71MtvC7" className="text-white" target="_blank" rel="noopener noreferrer">
                Xem trên bản đồ
              </a>
            </p>
          </div>

          {/* Mạng Xã Hội */}
          <div className="col-md-3">
            <h5>Mạng Xã Hội</h5>
            {/* Sử dụng class CSS Module nếu bạn có các style riêng cho listUnstyled */}
            <ul className={`list-unstyled ${styles.listUnstyled}`}>
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-center mt-4">
          <p>&copy; TRẦN NGUYỄN NHƯ THÁI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;