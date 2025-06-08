// src/app/scripts/seed.js

import mongoose from 'mongoose'; // Import mongoose
import Product from '../models/product.js';
import { getAllProductsAsArray } from '../lib/data.js'; 

// Cấu hình kết nối MongoDB
const DB_URI = 'mongodb://localhost:27017/shop-bike'; // Đảm bảo đúng URI của database trên MongoDB Compass

async function seedDatabase() {
  try {
    // Kết nối đến MongoDB
    await mongoose.connect(DB_URI);
    console.log('✅ Connected to MongoDB!');

    // In ra tên collection mà Mongoose đang sử dụng để xác nhận
    // console.log(`Kiểm tra collection: ${Product.collection.name || 'chưa tạo'} trong database: ${mongoose.connection.db.databaseName}`);


    // Kiểm tra xem đã có bất kỳ sản phẩm nào trong database chưa
    const existingProduct = await Product.findOne();

    if (existingProduct) {
      console.log('❌ Dữ liệu sản phẩm đã tồn tại. Bỏ qua quá trình seed.');
      console.log('Nếu bạn muốn seed lại, hãy xóa collection "products" trong MongoDB Compass và chạy lại script.');
      process.exit(0); // Thoát nếu dữ liệu đã tồn tại và không muốn seed lại
    }

    // Nếu database trống, tiến hành seed dữ liệu
    const productsToSeed = getAllProductsAsArray(); // Lấy mảng sản phẩm từ data.js
    console.log(`Đang cố gắng import ${productsToSeed.length} sản phẩm.`);

    await Product.insertMany(productsToSeed); // Chèn tất cả sản phẩm vào database

    console.log('✅ Seeded database successfully!');
    process.exit(0); // Thoát thành công
  } catch (err) {
    console.error('❌ Lỗi khi seed database:', err);
    // In ra thông tin chi tiết về lỗi để dễ debug
    console.error('Chi tiết lỗi:', err.message);
    if (err.code === 11000) { // Mã lỗi 11000 là lỗi trùng lặp key (ví dụ: id hoặc sku)
      console.error('Lỗi trùng lặp key (Duplicate key error). Vui lòng kiểm tra lại dữ liệu và unique index trong schema.');
    }
    process.exit(1); // Thoát với lỗi
  } finally {
    // Đảm bảo đóng kết nối MongoDB khi script kết thúc (thành công hoặc lỗi)
    await mongoose.disconnect();
    console.log('Đã đóng kết nối MongoDB.');
  }
}

// Chạy hàm seedDatabase
seedDatabase();