import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "public/images/flower-banner-1.png";
import banner2 from "public/images/flower-banner-2.png";

import { useEffect, useState } from "react";
import api from "../../../data/carousels.json";

const Advertise = () => {
  const [data, setData] = useState([] as any);

  const getData = async () => {
    await setData(api);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto flex mt-20">
      <Carousel
        className="w-3/4 rounded-l-lg overflow-hidden shadow-lg"
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showThumbs={false}
      >
        {data.map((item: any) => {
          return (
            <div>
              <img
                src={item.image}
                alt={item.desc}
                className="h-80 object-cover object-center"
              />
            </div>
          );
        })}
      </Carousel>

      <div className="flex flex-col h-80 w-1/4 shadow-lg rounded-r-lg">
        <div className="h-40 flex items-center px-5 bg-sky-200 rounded-tr-lg">
          <div
            style={{ backgroundImage: `url(${banner1.src})` }}
            className="w-28 h-28 bg-contain bg-no-repeat ease-linear duration-300 animate-zoomInOut"
          />
          <div className="text-center w-full text-2xl">
            Hoa đẹp nhất <br />
            <strong className="text-3xl text-red-400">Việt Nam</strong>
          </div>
        </div>
        <div className="h-40 flex items-center px-5 bg-green-200 rounded-br-lg ">
          <div className="text-center w-full text-2xl ">
            Giá rẻ nhất <br />
            <strong className="text-3xl text-red-400">Thị trường</strong>
          </div>

          <div
            style={{ backgroundImage: `url(${banner2.src})` }}
            className="w-28 h-28 bg-contain bg-no-repeat ease-linear duration-300 animate-zoomInOut"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
