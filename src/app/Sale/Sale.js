'use client';

import { useState, useEffect, useRef } from 'react';
import './Sale.css';

const saleItems = [
  { title: 'Giảm giá 20% xe đạp', text: 'Áp dụng đén hết 31/12/2024' },
  { title: 'Mua phụ kiện tặng lắp đặt', text: 'Chỉ tháng này' },
  { title: 'Mua 1 tặng 1 phụ kiện', text: 'Dành cho thành viên' },
  { title: 'Giảm 30% xe điện', text: 'Áp dụng 1 tuần!' },
  { title: 'Tặng áo xe đạp', text: 'Cho đơn hàng trên 2 triệu' },
  { title: 'Giảm giá 10%', text: 'Khi thanh toán online' },
];

export default function SaleSliderHorizontalReverse() {
  // Ban đầu hiển thị 3 ô: A, B, C
  const [boxes, setBoxes] = useState([0, 1, 2]);
  // nextIndexRef lưu chỉ số của ô mới sẽ chèn vào (D, E, …)
  const nextIndexRef = useRef(3);
  // Ref cho container để điều khiển trực tiếp thuộc tính transform
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Thêm ô mới vào cuối danh sách (slide mới D)
      setBoxes(prev => [...prev, nextIndexRef.current]);
      nextIndexRef.current = (nextIndexRef.current + 1) % saleItems.length;

      // 2. Dịch container sang trái từ vị trí 0 đến -33.33% (với transition ngắn 0.3s)
      if (containerRef.current) {
        containerRef.current.style.transition = 'transform 0.3s ease-in-out';
        containerRef.current.style.transform = 'translateX(-33.33%)';
      }

      setTimeout(() => {
        setBoxes(prev => prev.slice(1)); // Loại bỏ slide đầu tiên
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateX(0)';
        }
      }, 300);
    }, 2000); // Mỗi 2 giây thực hiện slide

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="NDsale-1">Chương trình khuyến mãi</div>
      <div className="sale-slider">
        <div className="sale-container" ref={containerRef}>
          {boxes.map((itemIndex, idx) => {
            const item = saleItems[itemIndex];
            return (
              <div key={idx} className="sale-box">
                <div className="sale-item">
                  <h3 className="sale-title">{item.title}</h3>
                  <p className="sale-text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  </>
  );
}
