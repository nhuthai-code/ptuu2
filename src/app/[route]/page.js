import Trex from "../Content/Brand/Topbrand/TrexContent/Trex";
import Giant from "../Content/Brand/Topbrand/GiantContent/Giant";
import Sword from "../Content/Brand/Topbrand/S-WordContent/S-Word";
import Twitte from "../Content/Brand/Newbrand/TwitteContent/Twitte";
import Sava from "../Content/Brand/Newbrand/SavaContent/Sava";
import JavaContent from "../Content/Brand/Newbrand/JavaContent/JavaContent";
import styles from "./page.module.css";

// Định nghĩa các nội dung cho từng route
const routeContents = {
    java: {
      title: "Thương Hiệu JAVA",
      component: <JavaContent />,
    },
    trex: {
      title: "Thương Hiệu TREX",
      component: <Trex />,
    },
    giant: {
      title: "Thương Hiệu GIANT",
      component: <Giant />,
    },
    "s-word": {
      title: "Thương Hiệu S-Word",
      component: <Sword />,
    },
    twitte: {
      title: "Thương Hiệu TWITTE",
      component: <Twitte />,
    },
    sava: {
      title: "Thương Hiệu SAVA",
      component: <Sava />,
    },
    "xe-dap-dua": {
      title: "Xe Đạp Đua Đường Trường",
      content: <p>Danh sách các xe đạp đua đường trường.</p>,
    },
    "xe-dap-tinh-gio": {
      title: "Xe Đạp Tính Giờ",
      content: <p>Danh sách các xe đạp tính giờ.</p>,
    },
    "xe-dap-dia-hinh": {
      title: "Xe Đạp Địa Hình",
      content: <p>Danh sách các xe đạp địa hình.</p>,
    },
    "xe-dap-tp": {
      title: "Xe Đạp Thành Phố",
      content: <p>Danh sách các xe đạp thành phố.</p>,
    },
    "bo-chuyen-dong": {
      title: "Bộ Chuyển Động",
      content: <p>Danh sách các bộ chuyển động.</p>,
    },
    xich: {
      title: "Xích",
      content: <p>Danh sách các loại xích.</p>,
    },
    lip: {
      title: "Líp",
      content: <p>Danh sách các loại líp.</p>,
    },
    "tay-bam": {
      title: "Tay Bấm",
      content: <p>Danh sách các loại tay bấm.</p>,
    },
    "banh-ruot": {
      title: "Bánh-Ruột",
      content: <p>Danh sách các loại bánh và ruột xe.</p>,
    },
    "mu-bao-hiem": {
      title: "Mũ Bảo Hiểm",
      content: <p>Danh sách các loại mũ bảo hiểm.</p>,
    },
    "den-xe": {
      title: "Đèn Xe",
      content: <p>Danh sách các loại đèn xe.</p>,
    },
    "va-xe": {
      title: "Vá Xe",
      content: <p>Danh sách các dụng cụ vá xe.</p>,
    },
    khoa: {
      title: "Khóa",
      content: <p>Danh sách các loại khóa xe.</p>,
    },
    ao: {
      title: "Áo",
      content: <p>Danh sách các loại áo.</p>,
    },
    quan: {
      title: "Quần",
      content: <p>Danh sách các loại quần.</p>,
    },
    "ao-khoac": {
      title: "Áo Khoác",
      content: <p>Danh sách các loại áo khoác.</p>,
    },
    "gel-dinh-duong": {
      title: "Gel Dinh Dưỡng",
      content: <p>Danh sách các loại gel dinh dưỡng.</p>,
    },
    "dien-giai": {
      title: "Điện Giải",
      content: <p>Danh sách các loại điện giải.</p>,
    },
    cart: {
      title: "Giỏ Hàng",
      content: <p>Hiển thị các sản phẩm trong giỏ hàng.</p>,
    },
    search: {
      title: "Tìm Kiếm",
      content: <p>Nhập từ khóa để tìm kiếm sản phẩm.</p>,
    },
  };
  
  // Sử dụng async để await params
  export default async function DynamicPage({ params }) {
    const { route } = await params; // Await params để lấy route
  
    // Kiểm tra nếu route tồn tại trong routeContents
    const content = routeContents[route];
  
    if (!content) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Không Tìm Thấy Trang</h1>
          <p>Trang bạn yêu cầu không tồn tại.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{content.title}</h1>
        {content.component || content.content}
      </div>
    );
  }