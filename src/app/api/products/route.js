import { NextResponse } from 'next/server';

import { getAllProductsAsArray } from '@/app/lib/data'; 

export async function GET(request) {
  try {
    const productsArray = getAllProductsAsArray(); 
    console.log("API /api/products trả về:", productsArray.length, "sản phẩm.");
    return NextResponse.json(productsArray);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm trong API:", error);
    return NextResponse.json({ error: 'Lỗi máy chủ nội bộ khi lấy sản phẩm' }, { status: 500 });
  }
}