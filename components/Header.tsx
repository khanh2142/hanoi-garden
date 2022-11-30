import Image from "next/image";
import cart from "../public/images/cart-icon.png";
import logo from "../public/images/logo.png";

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
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

        <nav className="hidden space-x-1 md:flex">
          <a
            href="/"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-300 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Trang chủ
          </a>
          <a
            href="/product"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-300 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Sản phẩm
          </a>
          <a
            href="#"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-300 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Về chúng tôi
          </a>
          <a
            href="#"
            className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-300 hover:bg-green-400 hover:text-white hover:shadow-lg"
          >
            Bài viết
          </a>
        </nav>
        <div className="overflow-hidden items-center justify-end md:flex md:flex-1 lg:w-0 relative rounded-full">
          <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer cart__container overflow-hidden z-20 hover:shadow-lg">
            <Image
              src={cart}
              alt="Giỏ hàng"
              width={36}
              height={36}
              className="cart__item z-50 overflow-hidden"
            />
          </div>

          <div className="absolute bg-teal-400 p-1 pl-2 w-32 rounded-full cart__title">
            Giỏ hàng
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
