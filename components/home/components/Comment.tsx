import rateIcon2 from "public/images/rate-icon-3.png";
import rateIcon from "public/images/rate-icon.png";
import { useEffect, useState } from "react";

import api from "../../../data/users.json";

const Comment = () => {
  const [data, setData] = useState([] as any);

  const getData = async () => {
    await setData(api);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex items-baseline w-full justify-center mt-20 mb-20 gap-4">
        <h3 className="text-center font-bold text-2xl uppercase peer">
          Đánh giá của khách hàng
        </h3>
        <img
          src={rateIcon2.src}
          alt=""
          className="w-12 h-12 peer-hover:animate-zoomInOut ease-linear"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {data.map((item: any) => {
          return (
            <div
              key={item.username}
              className="flex p-2 border-2 border-rose-200 hover:shadow-lg hover:shadow-rose-200 rounded-md ease-linear duration-300 gap-2 relative group"
            >
              <div className="flex flex-col gap-1 items-center w-48">
                <img
                  src={item.image}
                  alt={`Khách hàng ${item.username}`}
                  className="rounded-full w-24 h-24"
                />
                <h6 className="font-bold capitalize">{item.username}</h6>
                <p className="italic text-center">{item.age} tuổi</p>
              </div>

              <div className="w-full flex flex-col justify-between">
                <p className="italic w-full pr-6">"...{item.comment}"</p>
                <p className="mt-2 text-end italic text-red-600 font-medium pr-2">
                  {item.time}
                </p>
              </div>

              <img
                src={rateIcon.src}
                alt="Đánh giá 5 sao"
                className="w-14 h-14 absolute top-[-20px] right-[-15px] rotate-[25deg] group-hover:animate-zoomInOut"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
