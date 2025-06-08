import { NextResponse } from 'next/server';

import { connectToDatabase } from '../../../lib/mongodb.js'; 
import Product from '../../../models/product.js';           

export async function GET(request, { params }) {
  const { id } = params; // Lấy 'id' từ dynamic route segment

  try {
    // 1. Kết nối đến MongoDB
    await connectToDatabase();
    console.log(`API /api/products/${id}: Connected to MongoDB.`);

    // 2. Tìm một sản phẩm cụ thể theo trường 'id' của bạn (trường này phải khớp với dữ liệu trong MongoDB)
    const product = await Product.findOne({ id: id });

    // 3. Xử lý trường hợp không tìm thấy sản phẩm
    if (!product) {
      console.log(`API /api/products/${id}: Product not found.`);
      return NextResponse.json({ message: 'Sản phẩm không tìm thấy', error: true }, { status: 404 });
    }

    // 4. Chuẩn bị dữ liệu để trả về
    // Chuyển Mongoose Document thành plain JavaScript object và chuyển ObjectId thành String
    const parsedProduct = product.toObject();
    parsedProduct._id = parsedProduct._id.toString();

    // 5. Trả về dữ liệu JSON với status 200 (OK)
    return NextResponse.json(parsedProduct, { status: 200 });

  } catch (error) {
    console.error(`Lỗi API /api/products/${id}:`, error);
    // 6. Trả về lỗi nếu có vấn đề xảy ra
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}