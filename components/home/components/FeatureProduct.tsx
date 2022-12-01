import Image from "next/image";

import cartIcon from "public/images/cart-flower-icon.png";
import hotIcon from "public/images/hot-icon.png";
import purchaseIcon from "public/images/purchase-icon.png";

const FeatureProduct = () => {
  return (
    <div className="mx-auto mt-5 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-3xl font-semibold">Sản phẩm nổi bật</h2>
        <Image
          src={hotIcon}
          alt="Hot Product"
          width={40}
          height={40}
          className="ease-linear duration-700 animate-zoomInOut"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <p className="text-2xl capitalize font-bold text-pink-400">
            hồng kem pastel
          </p>
          <desc className="italic">
            "Hạnh phúc đôi khi không được tính bằng năm, bằng tháng mà hạnh phúc
            có thể đong đầy dù trong một khoảnh khắc. Hãy gửi đến người bạn yêu
            thương nhất những khoảnh khắc chứa đựng đầy yêu thương nhé. Bó hoa
            gồm tông màu hồng lãng mạn của hồng kem kết hợp với vẻ đẹp đầy đáng
            yêu của thạch thảo trắng."
          </desc>

          <div className="flex gap-5">
            <button className="bg-red-400 p-2 rounded-sm flex gap-2 items-center text-white font-bold uppercase group hover:bg-red-600 ease-linear duration-200 shadow-lg">
              Mua ngay
              <Image
                src={purchaseIcon}
                alt="Buy now!"
                width={32}
                height={32}
                className="ease-linear duration-300 group-hover:scale-125 group-hover:rotate-[360deg]"
              />
            </button>
            <button className="border-2 border-green-400 text-green-400 p-2 rounded-sm flex gap-2 items-center font-bold uppercase group ease-linear duration-200 shadow-lg">
              Thêm vào giỏ hàng
              <Image
                src={cartIcon}
                alt="Buy now!"
                width={32}
                height={32}
                className="ease-linear duration-300 group-hover:scale-125 group-hover:rotate-[360deg]"
              />
            </button>
          </div>
        </div>

        {/* ------ */}

        <div
          style={{
            backgroundImage:
              "url(https://bizweb.dktcdn.net/thumb/1024x1024/100/347/446/products/gio-hoa-hong-mau-hong-kem-pastel.jpg?v=1593947674807)",
            backgroundPosition: "40% 40%",
          }}
          className="h-64 w-full bg-no-repeat bg-cover rounded-lg shadow-lg "
        ></div>
      </div>
    </div>
  );
};

export default FeatureProduct;
