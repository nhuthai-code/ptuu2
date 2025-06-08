export const productsById = {
  "java-veloce": {
    id: "java-veloce",
    name: "Xe Đạp JAVA Veloce",
    brand: "JAVA",
    price: 15000000,
    sku: "5322355",
    description:
      "Xe đạp JAVA Veloce là một chiếc xe đạp đua đường trường với khung carbon nhẹ, thiết kế khí động học, phù hợp cho các cuộc đua tốc độ cao. Xe được trang bị bộ truyền động Shimano 105, bánh xe 700c, và trọng lượng chỉ 8.5kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 8.5kg\nBộ truyền động: Shimano 105\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa khí động học, góc đầu ống 73 độ, chiều dài ống trên 550mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "java-siluro": {
    id: "java-siluro",
    name: "Xe Đạp JAVA Siluro",
    brand: "JAVA",
    price: 18000000,
    sku: "5322356",
    description:
      "Xe đạp JAVA Siluro là lựa chọn hoàn hảo cho những người đam mê tốc độ. Khung hợp kim nhôm cao cấp, bộ truyền động Shimano Ultegra, và thiết kế tối ưu hóa khí động học giúp bạn chinh phục mọi cung đường.",
    technicalSpecs:
      "Chất liệu khung: Hợp kim nhôm\nTrọng lượng: 9.0kg\nBộ truyền động: Shimano Ultegra\nBánh xe: 700c",
    geometry:
      "Thiết kế khung khí động học, góc đầu ống 72.5 độ, chiều dài ống trên 560mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "trex-roadster": {
    id: "trex-roadster",
    name: "Xe Đạp TREX Roadster",
    brand: "TREX",
    price: 12000000,
    sku: "5322357",
    description:
      "Xe đạp TREX Roadster là một chiếc xe đạp địa hình với khung thép bền bỉ, lốp xe 27.5 inch, và bộ truyền động Shimano Deore. Phù hợp cho các chuyến đi off-road và khám phá thiên nhiên.",
    technicalSpecs:
      "Chất liệu khung: Thép\nTrọng lượng: 12.0kg\nBộ truyền động: Shimano Deore\nLốp xe: 27.5 inch",
    geometry:
      "Thiết kế khung địa hình, góc đầu ống 70 độ, chiều dài ống trên 580mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "giant-propel-1": {
    id: "giant-propel-1",
    name: "Xe Đạp GIANT Propel",
    brand: "GIANT",
    price: 25000000,
    sku: "5322358",
    description:
      "Xe đạp GIANT Propel là một trong những mẫu xe đua hàng đầu với khung carbon siêu nhẹ, bộ truyền động Shimano Dura-Ace, và thiết kế tối ưu cho tốc độ. Trọng lượng chỉ 7.8kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 7.8kg\nBộ truyền động: Shimano Dura-Ace\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa tốc độ, góc đầu ống 73.5 độ, chiều dài ống trên 540mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "giant-propel-2": {
    id: "giant-propel-2",
    name: "Xe Đạp GIANT Propel (Phiên bản 2)",
    brand: "GIANT",
    price: 26000000,
    sku: "5322359",
    description:
      "Xe đạp GIANT Propel phiên bản 2 với khung carbon siêu nhẹ, bộ truyền động Shimano Dura-Ace, và thiết kế tối ưu cho tốc độ. Trọng lượng chỉ 7.8kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 7.8kg\nBộ truyền động: Shimano Dura-Ace\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa tốc độ, góc đầu ống 73.5 độ, chiều dài ống trên 540mm.",
    images: [
      "/img/sp1.webp",
    ],
  },

  "giant-propel-3": {
    id: "giant-propel-3",
    name: "Xe Đạp GIANT Propel (Phiên bản 3)",
    brand: "GIANT",
    price: 27500000, // Giá cao hơn một chút
    sku: "5322360", // SKU mới
    description:
      "Xe đạp GIANT Propel phiên bản 3 là mẫu cao cấp nhất, với khung carbon siêu nhẹ, công nghệ khí động học tiên tiến, và bộ truyền động điện tử Shimano Dura-Ace Di2. Trọng lượng cực nhẹ chỉ 7.5kg, tối ưu hóa cho hiệu suất cao nhất trên đường đua.",
    technicalSpecs:
      "Chất liệu khung: Carbon cao cấp\nTrọng lượng: 7.5kg\nBộ truyền động: Shimano Dura-Ace Di2\nBánh xe: 700c (vành carbon)",
    geometry:
      "Thiết kế khung tối ưu hóa tốc độ và độ cứng, góc đầu ống 74 độ, chiều dài ống trên 530mm (tùy size).",
    images: [
      "/img/sp1.webp",
    ],
  },
};

export const getAllProductsAsArray = () => {
  return Object.values(productsById);
};

export const getProductById = (id) => {
  return productsById[id];
};

export const formatPrice = (price) => {
  if (typeof price !== 'number') return price;
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
};