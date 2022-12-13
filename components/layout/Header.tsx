import Image from "next/image";
import { useEffect, useState } from "react";
import cart from "../../public/images/cart-icon.png";
import logo from "../../public/images/logo.png";

import categories from "../../data/headerCategories.json";

const Header = () => {
  const [quantity, setQuantity] = useState(0);

  const getData = () => {
    const local: any = localStorage.getItem("products");
    const localData: any[] = JSON.parse(local) || [];

    setQuantity(localData.length);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <header className="mx-auto w-full px-20 fixed z-50 bg-sky-200 right-0 top-0 py-2 shadow-lg">
      <div className="flex items-center justify-between border-gray-100">
        <div className="flex">
          <a href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Image
              src={logo}
              alt="Ha Noi Garden"
              className="h-8 w-auto ease-linear duration-300 hover:scale-125 hover:rotate-180 sm:h-10"
            ></Image>
            <h1 className="h-100 flex items-center logo-title animate-colorSkating">
              Ha Noi Garden
            </h1>
          </a>
        </div>

        <nav className="flex gap-5">
          {categories.map((item: any) => {
            return (
              <a
                href={item.link}
                key={item.content}
                className="p-2 rounded text-base font-medium text-gray-500 ease-linear duration-150 hover:bg-rose-500 hover:text-white hover:shadow-lg"
              >
                {item.content}
              </a>
            );
          })}
        </nav>

        <div className="justify-end relative rounded-full">
          <a
            className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer cart__container overflow-hidden z-20"
            href="/cart"
          >
            <Image
              src={cart}
              alt="Giỏ hàng"
              width={30}
              height={30}
              className="cart__item z-40 overflow-hidden"
            />
          </a>
          {quantity > 0 && (
            <div className="absolute z-50 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center right-[-10px] top-[-5px]">
              {quantity}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
