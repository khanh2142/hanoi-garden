import Image from "next/image";
import cart from "../public/images/cart-icon.png";
import logo from "../public/images/logo.png";

const Header = () => {
  return (
    <div className="mx-auto w-full px-20 fixed z-50 bg-sky-200 right-0 top-0 py-2 shadow-lg">
      <div className="flex items-center justify-between border-gray-100">
        <div className="flex">
          <a href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Image
              src={logo}
              alt="Ha Noi Garden"
              className="h-8 w-auto ease-linear duration-300 hover:scale-125 hover:rotate-180 sm:h-10"
            ></Image>
            <div className="h-100 flex items-center logo-title animate-colorSkating">
              Ha Noi Garden
            </div>
          </a>
        </div>

        <nav className="flex gap-5">
          <a
            href="/"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-150 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Trang chủ
          </a>
          <a
            href="/product"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-150 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Sản phẩm
          </a>
          <a
            href="#"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-150 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Về chúng tôi
          </a>
          <a
            href="#"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-150 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Bài viết
          </a>
        </nav>

        <div className="justify-end relative rounded-full overflow-hidden">
          <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer cart__container overflow-hidden z-20 ">
            <Image
              src={cart}
              alt="Giỏ hàng"
              width={30}
              height={30}
              className="cart__item z-50 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
