'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import Advertisement from '../Advertisement/Advertisement';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  useEffect(() => {
    const allDropdowns = document.querySelectorAll(
      ".nav-item.dropdown, .dropdown-menu .dropdown"
    );

    allDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function (event) {
        const isMobile = window.innerWidth < 992;
        if (isMobile) {
          event.stopPropagation();
          if (this.classList.contains("show")) {
            this.classList.remove("show");
          } else {
            let siblingSelector = ".dropdown.show";
            if (this.parentElement.classList.contains("dropdown-menu")) {
              const siblings = this.parentElement.querySelectorAll(siblingSelector);
              siblings.forEach((sib) => {
                if (sib !== this) sib.classList.remove("show");
              });
            } else {
              const openDropdowns = document.querySelectorAll(".nav-item.dropdown.show");
              openDropdowns.forEach((openDd) => {
                if (openDd !== this) openDd.classList.remove("show");
              });
            }
            this.classList.add("show");
          }
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown.show").forEach((dropdown) => {
          dropdown.classList.remove("show");
        });
      }
    });

    return () => {
      allDropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", () => {});
      });
      document.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="nav-css">
      <Header />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">
            PROJECT ONE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="thuong-hieu-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  THƯƠNG HIỆU
                </a>
                <ul className="dropdown-menu" aria-labelledby="thuong-hieu-dropdown">
                  <li className="dropdown">
                    <button
                      type="button"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      TOP BRANDS
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="trex" className="dropdown-item">
                          TREX
                        </Link>
                      </li>
                      <li>
                        <Link href="/giant" className="dropdown-item">
                          GIANT
                        </Link>
                      </li>
                      <li>
                        <Link href="/s-word" className="dropdown-item">
                          S-Word
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      type="button"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      NEW BRANDS
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/twitte" className="dropdown-item">
                          TWITTE
                        </Link>
                      </li>
                      <li>
                        <Link href="/java" className="dropdown-item">
                          JAVA
                        </Link>
                      </li>
                      <li>
                        <Link href="/sava" className="dropdown-item">
                          SAVA
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* XE ĐẠP Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="xe-dap-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  XE ĐẠP
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/xe-dap-dua" className="dropdown-item">
                      Xe đạp đua đường trường
                    </Link>
                  </li>
                  <li>
                    <Link href="/xe-dap-tinh-gio" className="dropdown-item">
                      Xe đạp tính giờ
                    </Link>
                  </li>
                  <li>
                    <Link href="/xe-dap-dia-hinh" className="dropdown-item">
                      Xe đạp địa hình
                    </Link>
                  </li>
                  <li>
                    <Link href="/xe-dap-tp" className="dropdown-item">
                      Xe đạp tp
                    </Link>
                  </li>
                </ul>
              </li>

              {/* PHỤ TÙNG Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="phu-tung-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PHỤ TÙNG
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/bo-chuyen-dong" className="dropdown-item">
                      Bộ chuyển động
                    </Link>
                  </li>
                  <li>
                    <Link href="/xich" className="dropdown-item">
                      Xích
                    </Link>
                  </li>
                  <li>
                    <Link href="/lip" className="dropdown-item">
                      Líp
                    </Link>
                  </li>
                  <li>
                    <Link href="/tay-bam" className="dropdown-item">
                      Tay bấm
                    </Link>
                  </li>
                  <li>
                    <Link href="/banh-ruot" className="dropdown-item">
                      Bánh-Ruột
                    </Link>
                  </li>
                </ul>
              </li>

              {/* PHỤ KIỆN Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  PHỤ KIỆN
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/mu-bao-hiem" className="dropdown-item">
                      Mũ bảo hiểm
                    </Link>
                  </li>
                  <li>
                    <Link href="/den-xe" className="dropdown-item">
                      Đèn xe
                    </Link>
                  </li>
                  <li>
                    <Link href="/va-xe" className="dropdown-item">
                      Vá xe
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa" className="dropdown-item">
                      Khóa
                    </Link>
                  </li>
                </ul>
              </li>

              {/* TRANG PHỤC Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  TRANG PHỤC
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/ao" className="dropdown-item">
                      Áo
                    </Link>
                  </li>
                  <li>
                    <Link href="/quan" className="dropdown-item">
                      Quần
                    </Link>
                  </li>
                  <li>
                    <Link href="/ao-khoac" className="dropdown-item">
                      Áo khoác
                    </Link>
                  </li>
                </ul>
              </li>

              {/* DINH DƯỠNG Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  DINH DƯỠNG
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/gel-dinh-duong" className="dropdown-item">
                      Gel dinh dưỡng
                    </Link>
                  </li>
                  <li>
                    <Link href="/dien-giai" className="dropdown-item">
                      Điện giải
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Giỏ hàng */}
              <li className="nav-item">
                <Link href="/cart" className="nav-link">
                  🛒Giỏ hàng
                </Link>
              </li>

              {/* Tìm kiếm */}
              <li className="nav-item search-item">
                <Link href="/search" className="nav-link">
                  🔍Tìm kiếm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Advertisement />
    </div>
  );
}

export default Navbar;