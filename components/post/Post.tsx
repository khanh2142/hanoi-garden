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
          BẠN CÓ THỂ TÌM CHÚNG TÔI Ở ĐÂU
        </p>
        <div>
          <li className="block float-left w-1/3">
            <img
              className="h-52 w-10/12 rounded-3xl mb-8 ml-10"
              src="https://i.pinimg.com/564x/8c/da/2a/8cda2a4e933fa7bdf986901037843dc6.jpg"
              alt=""
            />
            <p className="text-sm italic text-center">
              Địa chỉ: 15 Nguyễn Lương Bằng, Phường Tân Phú, Quận 7 <br /> TP Hồ
              Chí Minh <br /> Điện thoại: 0854 23 38 38 <br /> Email:
              sale.emerflower@gmail.com
            </p>
          </li>
          <li className="block float-left w-1/3">
            <img
              className="h-52 w-10/12 rounded-3xl mb-8 ml-10"
              src="https://i.pinimg.com/564x/08/f0/33/08f03323bbca5bb09fb37ff63b3c73c4.jpg"
              alt=""
            />
            <p className="text-sm italic text-center">
              Địa chỉ: 125 Cầu Giấy, quận Cầu Giấy <br /> TP Hà Nội <br /> Điện
              thoại: 386 72 72 01 <br /> Email: thegardencghanoi@gmail.com
            </p>
          </li>
          <li className="block float-left w-1/3">
            <img
              className="h-52 w-10/12 rounded-3xl mb-8 ml-10"
              src="https://i.pinimg.com/236x/0b/2b/7c/0b2b7c2b4cfe142394217fed6da38fa8.jpg"
              alt=""
            />
            <p className="text-sm italic text-center">
              Địa chỉ: 112 đường Hai Bà Trưng <br /> TP Hà Nội <br /> Điện
              thoại: 0982 72 80 67 <br /> Email: thegardenhbthanoi@gmail.com
            </p>
          </li>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl font-bold text-rose-500 mb-10">
          TẠI SAO BẠN NÊN DÙNG DỊCH VỤ CỦA CHÚNG TÔI?
        </p>

        <div className="mb-10">
          <div className="flex gap-10">
            <div className="pl-12 h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <i></i>
              MIỄN PHÍ GIAO HÀNG 63 TỈNH <br />
              <i className="italic text-xs">Free shipping (nội thành)</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <i></i>
              PHỤC VỤ 24/24 <br />
              <i className="italic text-xs">24-7 service</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-200 hover:cursor-pointer duration-300 w-100">
              <i></i>
              GIÁ ĐÃ GỒM 10% VAT <br />
              <i className="italic text-xs">Price include VAT</i>
            </div>
            <div className="h-10 text-center w-2/3 text-sm text-black-500 bg-rose-300 rounded-lg hover:bg-rose-100 hover:cursor-pointer duration-300 w-100">
              <i></i>
              GIAO NHANH TRONG 60 PHÚT <br />
              <i className="italic text-xs">60 minutes quick delivery</i>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/81/f4/ad/81f4adeb5ba24e415f4129168988d676.jpg"
            alt=""
          />
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/67/3e/e3/673ee3d639b8bb2069cc8bbb7724bf0d.jpg"
            alt=""
          />
          <img
            className="h-52 w-1/3 rounded-3xl hover:scale-125 duration-500 hover:cursor-pointer"
            src="https://i.pinimg.com/564x/0b/cf/81/0bcf8113b0fcbbb4b6a8f46983f6ec7f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
