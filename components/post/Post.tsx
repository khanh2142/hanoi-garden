import parse from "html-react-parser";
import { useState } from "react";
import api from "../../data/posts";

const Post = () => {
  const [post, setPost] = useState({} as any);

  return (
    <div className="mt-20 grid grid-rows-1 gap-10 ">
      <h3 className="text-center text-4xl font-bold text-rose-500">
        Ha Noi Garden New
      </h3>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {api.map((item: any) => {
            return (
              <div
                className="flex gap-10 h-32 p-1 hover:bg-rose-100 ease-linear duration-200"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-full object-center rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <a
                    href={`/post/${item.id}`}
                    className="text-2xl font-bold text-rose-500"
                  >
                    {item.title}
                  </a>
                  <p className="italic post-desc">{parse(item.desc)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pl-10">
          <img
            className="mb-10 rounded-lg"
            src="https://dienhoathudo.com/wp-content/uploads/2022/08/mid-section-male-florist-arranging-rose-flower-bouquet-768x432.jpg"
            alt=""
          />
          <p className="italic text-base">
            Với phương châm “ Vui lòng người nhận, Đẹp lòng người trao” Hà Nội
            Garden luôn cam kết chất lượng hoa tươi đảm bảo, cắm đúng mẫu, giao
            hoa tận nơi đúng giờ. Bằng tất cả niềm đam mê và tận tâm,
            hanoigarden.com luôn chọn những bông hoa tươi nhất và sáng tạo lên
            những mẫu hoa tuyệt vời để chuyển đến người thân yêu của bạn cùng
            với những lời chúc tốt đẹp.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl font-bold text-rose-500 mb-10">
          TẠI SAO BẠN NÊN DÙNG DỊCH VỤ CỦA CHÚNG TÔI?
        </p>

        <div className="mb-10">
          <div className="flex gap-10">
            <div className="pl-12 h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <h1>MIỄN PHÍ GIAO HÀNG 63 TỈNH</h1>
              <i className="italic text-xs">Free shipping (nội thành)</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <h1>PHỤC VỤ 24/24</h1>
              <i className="italic text-xs">24-7 service</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <h1>GIÁ ĐÃ GỒM 10% VAT</h1>
              <i className="italic text-xs">Price include VAT</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-100 hover:cursor-pointer duration-300 w-100">
              <h1>GIAO NHANH TRONG 60 PHÚT</h1>
              <i className="italic text-xs">60 minutes quick delivery</i>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/81/f4/ad/81f4adeb5ba24e415f4129168988d676.jpg"
            alt="Hà Nội Garden"
          />
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/67/3e/e3/673ee3d639b8bb2069cc8bbb7724bf0d.jpg"
            alt="Hà Nội Garden"
          />
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/0b/cf/81/0bcf8113b0fcbbb4b6a8f46983f6ec7f.jpg"
            alt="Hà Nội Garden"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
