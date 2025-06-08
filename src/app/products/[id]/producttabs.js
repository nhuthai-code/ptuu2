'use client';

import { useState } from "react";
import styles from "./page.module.css";

export default function ProductTabs({ description, technicalSpecs, geometry }) {
  const [activeTab, setActiveTab] = useState("product-info");

  return (
    <div className={styles.productTabs}>
      <ul className={styles.tabMenu}>
        <li
          className={activeTab === "product-info" ? styles.active : ""}
          onClick={() => setActiveTab("product-info")}
          data-tab="product-info"
        >
          Thông Tin Sản Phẩm
        </li>
        <li
          className={activeTab === "technical-specs" ? styles.active : ""}
          onClick={() => setActiveTab("technical-specs")}
          data-tab="technical-specs"
        >
          Thông Số Kỹ Thuật
        </li>
        <li
          className={activeTab === "geometry" ? styles.active : ""}
          onClick={() => setActiveTab("geometry")}
          data-tab="geometry"
        >
          Kết Cấu Hình Học
        </li>
      </ul>

      <div className={styles.tabContent}>
        <div
          id="product-info"
          className={`${styles.tab} ${
            activeTab === "product-info" ? styles.active : ""
          }`}
        >
          <h3>Thông Tin Sản Phẩm</h3>
          <p>{description}</p>
        </div>
        <div
          id="technical-specs"
          className={`${styles.tab} ${
            activeTab === "technical-specs" ? styles.active : ""
          }`}
        >
          <h3>Thông Số Kỹ Thuật</h3>
          <p style={{ whiteSpace: "pre-line" }}>{technicalSpecs}</p>
        </div>
        <div
          id="geometry"
          className={`${styles.tab} ${
            activeTab === "geometry" ? styles.active : ""
          }`}
        >
          <h3>Kết Cấu Hình Học</h3>
          <p>{geometry}</p>
        </div>
      </div>
    </div>
  );
}