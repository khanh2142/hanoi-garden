import Image from "next/image";

import footerIcon1 from "../../public/images/footer-icon-1.png";
import footerIcon2 from "../../public/images/footer-icon-2.png";
import footerIcon3 from "../../public/images/footer-icon-3.png";
import policyIcon1 from "../../public/images/policy-icon-1.png";
import policyIcon2 from "../../public/images/policy-icon-2.png";
import policyIcon3 from "../../public/images/policy-icon-3.png";
import policyIcon4 from "../../public/images/policy-icon-4.png";

import socialIcon1 from "../../public/images/social-icon-1.png";
import socialIcon2 from "../../public/images/social-icon-2.png";
import socialIcon3 from "../../public/images/social-icon-3.png";

import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t-2 mt-20 pt-10 mx-auto pb-32">
      <div className="h-32 grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
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
          <div className="flex items-center gap-4">
            <Image src={footerIcon1} alt="" className="w-5 h-5" />
            <a
              href="tel:+84369698501"
              className="hover:underline ease-linear duration-300"
            >
              Hotline: 0369 698 501
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={footerIcon2} alt="" className="w-5 h-5" />
            <a
              href="mailto:k2142a@gmail.com"
              className="hover:underline ease-linear duration-300"
            >
              Email: k2142a@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={footerIcon3} alt="" className="w-5 h-5" />
            <a
              href="https://goo.gl/maps/KEdgbHTgTLNAnXxw7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ease-linear duration-300"
            >
              Địa chỉ: Ngh. 52/25, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="uppercase font-semibold">Chính sách của cửa hàng</h3>
          <div className="flex items-center gap-4">
            <Image src={policyIcon1} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Chính sách khách hàng
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={policyIcon2} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Chính sách vận chuyển
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={policyIcon3} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Chính sách hoàn tiền - đổi trả
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={policyIcon4} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Chính sách thanh toán
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="uppercase font-semibold">Theo dõi chúng tôi</h3>
          <div className="flex items-center gap-4">
            <Image src={socialIcon1} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Facebook
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={socialIcon2} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Github
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Image src={socialIcon3} alt="" className="w-6 h-6" />
            <a className="hover:underline ease-linear duration-300" href="#">
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="uppercase font-semibold">Về chúng tôi</h3>
          <div className="flex items-center gap-4">
            <img
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/74624129_398183597756254_8929699241354330112_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NYx0vXZxsjkAX8CH2Al&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAQsNB16ITCIpovQc-tPe-6YVuNbM40D-kXhv-xbJRREw&oe=63AE93D6"
              alt="NBK"
              className="w-10 h-10 rounded-full"
            />
            <a
              href="https://www.facebook.com/khanh.nguyenba.737"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ease-linear duration-300 hover:text-rose-800"
            >
              Nguyễn Bá Khánh
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/317090780_1331684837658048_7595888749454577856_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JDj189chBOcAX_zTOdT&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfCVPJGGom2soBzMW2u-I1E5_-hiZ3Vn_dau0ZiJnLCtfg&oe=63995BE9"
              alt="T.Thành"
              className="w-10 h-10 rounded-full"
            />
            <a
              href="https://www.facebook.com/bin.thanh.12935"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ease-linear duration-300 hover:text-rose-800"
            >
              Tuấn Thành
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-1/181751035_1153365528515693_3082415106486965705_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=9LCdDlyw5iwAX_81a6Q&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDS4-aXq6Xv9zEBmwNBYFODpflAxCZ4IcNHozVTOQwQwQ&oe=63AE7F78"
              alt="V.Thanh"
              className="w-10 h-10 rounded-full"
            />
            <a
              href="https://www.facebook.com/Thanh14.04.2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ease-linear duration-300 hover:text-rose-800"
            >
              Nguyễn Văn Thanh
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/273603172_494850688822345_1927809792168101205_n.jpg?stp=c0.29.320.320a_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EO3X5_GK56sAX8tnLdw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAzzCssmb7SF8RWbc3IQx3Ji6SSREaUXTlYEjBMe7DS-A&oe=63988FA2"
              alt="D.Toàn"
              className="w-10 h-10 rounded-full"
            />
            <a
              href="https://www.facebook.com/cuoi.nhok.37"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ease-linear duration-300 hover:text-rose-800"
            >
              Đức Toàn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
