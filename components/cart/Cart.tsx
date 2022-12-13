import { Box, Modal, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../data/products.json";
import { numberWithCommas } from "../../service/numberWithCommas";

import emptyCart from "public/images/cart-empty-icon.png";

const Cart = () => {
  const [data, setData] = useState([] as any);
  const [amount, setAmount] = useState(0);
  const [shipCost, setShipCost] = useState(30000);

  const [open, setOpen] = useState(false);

  const [formValue, setFormValue] = useState({
    phone: "",
    username: "",
    location: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    reload();
  }, []);

  const removeItem = (id: any) => {
    const local: any = localStorage.getItem("products");
    const localData: any[] = JSON.parse(local) || [];

    const newArr: any[] = localData.filter((item: any) => {
      if (item.id === id) {
        return;
      }
      return item;
    });

    localStorage.setItem("products", JSON.stringify(newArr));

    reload();
  };

  const reload = () => {
    const local: any = localStorage.getItem("products");
    const localData: any[] = JSON.parse(local) || [];

    const list: any[] = localData.map((item: any) => {
      let currentItem: any = api.find((c: any) => {
        return c.id === item.id;
      });

      if (currentItem) {
        return {
          ...item,
          ...currentItem,
        };
      }
    });

    setData(list);
    if (list.length !== 0) {
      const total: number = list.reduce((prev: any, current: any) => {
        return prev + current.price * current.quantity;
      }, 0);

      setAmount(total);
    }
  };

  const caculateAmount = () => {
    if (data.length !== 0) {
      const total: number = data.reduce((prev: any, current: any) => {
        return prev + current.price * current.quantity;
      }, 0);

      setAmount(total);
    }
  };

  useEffect(() => {
    caculateAmount();
  }, [data]);

  const setQuantityValue = (e: any, id: any) => {
    const arr: any[] = [...data];

    arr.map((item: any) => {
      if (item.id === id) {
        if (Number(e.target.value) < 0) {
          item.quantity = 1;
        } else {
          item.quantity = e.target.value;
        }
      }
      return item;
    });

    setData(arr);

    localStorage.setItem("products", JSON.stringify(arr));
  };

  const purchase = () => {
    setOpen(true);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid ",
    boxShadow: 24,
    p: 4,
  };

  const submit = () => {
    if (
      formValue.location === "" ||
      formValue.phone === "" ||
      formValue.username === ""
    ) {
      return;
    }
    toast.success("Cảm ơn bạn đã gửi thông tin. Chúng tôi sẽ liên hệ lại sau!");
    handleClose();
    localStorage.setItem("products", JSON.stringify([]));
    reload();
  };

  useEffect(() => {
    // console.log(formValue);
  }, [formValue]);

  return (
    <div className="mt-20">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl className="w-full mt-5" required>
            <TextField
              label="Số điện thoại"
              id="phone"
              aria-describedby="my-helper-text"
              name="phone"
              onChange={(e: any) => {
                setFormValue({
                  ...formValue,
                  phone: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl className="w-full mt-5" required>
            <TextField
              label="Tên khách hàng"
              id="username"
              aria-describedby="my-helper-text"
              name="username"
              onChange={(e: any) => {
                setFormValue({
                  ...formValue,
                  username: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl className="w-full mt-5" required>
            <TextField
              label="Địa chỉ giao hàng"
              id="location"
              aria-describedby="my-helper-text"
              name="location"
              onChange={(e: any) => {
                setFormValue({
                  ...formValue,
                  location: e.target.value,
                });
              }}
            />
          </FormControl>
          <Box className="mt-5 flex justify-end">
            <Button variant="contained" type="submit" onClick={submit}>
              Gửi
            </Button>
          </Box>
        </Box>
      </Modal>

      <h3 className="uppercase text-2xl font-bold text-center text-sky-600">
        Giỏ hàng
      </h3>

      {data && data.length > 0 ? (
        <>
          <div className="flex flex-col mt-10">
            <div className="grid grid-cols-6 gap-5 border-b-2 pb-4 mb-10">
              <h6 className="col-span-2">Sản phẩm</h6>
              <h6 className="">Số lượng</h6>
              <h6 className="">Đơn giá</h6>
              <h6 className="">Tổng cộng</h6>
            </div>

            <div className="grid grid-rows-1 gap-10">
              {data.map((item: any) => {
                return (
                  <div
                    className="grid grid-cols-6 gap-5 items-center py-5 hover:bg-sky-100 ease-linear duration-150"
                    key={item.id}
                  >
                    <span className="col-span-2 flex items-center gap-10 pl-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24"
                      />

                      <a href={`/product/${item.id}`}>{item.name}</a>
                    </span>
                    <span>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e: any) => {
                          setQuantityValue(e, item.id);
                        }}
                        className="p-3 w-24 border-2 border-rose-400 focus:outline-rose-600"
                      />
                    </span>
                    <p className="text-rose-600">
                      {numberWithCommas(item.price)}đ
                    </p>
                    <p className="text-rose-600">
                      {numberWithCommas(item.price * item.quantity)}đ
                    </p>
                    <span>
                      <button
                        className="bg-rose-600 text-white px-6 py-2  hover:bg-rose-800 ease-linear duration-150"
                        onClick={() => removeItem(item.id)}
                      >
                        Xoá
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <div className="flex gap-10">
              <a
                href="/product"
                className="bg-sky-400 h-12 flex items-center justify-center px-5 text-white hover:bg-transparent border-2 border-transparent hover:text-sky-400 ease-linear duration-200 hover:border-sky-400"
              >
                Tiếp tục mua sắm
              </a>
              <button
                className="bg-amber-500 h-12 flex items-center justify-center px-5 text-white border-2 border-transparent hover:bg-transparent hover:text-amber-500 ease-linear duration-200 hover:border-amber-500 active:bg-green-400"
                onClick={purchase}
              >
                Thanh toán
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <span className="flex justify-between items-center w-80">
                <p className="text-xl">Thành tiền</p>
                <strong className="text-rose-600 text-2xl">
                  {numberWithCommas(amount)}đ
                </strong>
              </span>
              <span className="flex justify-between items-center w-80">
                <p className="text-xl">Phí vận chuyển</p>
                <strong className="text-rose-600 text-2xl">
                  {numberWithCommas(shipCost)}đ
                </strong>
              </span>
              <span className="flex justify-between items-center w-80">
                <p className="text-xl">Tổng cộng</p>
                <strong className="text-rose-600 text-2xl">
                  {numberWithCommas(amount + shipCost)}đ
                </strong>
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full justify-center mt-20 gap-10 items-center">
            <img src={emptyCart.src} alt="Giỏ hàng trống" />
            <p className="text-xl leading-9">
              Có vẻ như giỏ hàng của bạn còn trống. <br />
              <strong className="text-2xl font-bold text-rose-500">
                Hãy shopping đi nào!
              </strong>
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-10">
            <a
              href="/product"
              className="bg-sky-400 py-5 px-10 text-center mx-auto"
            >
              Tiếp tục mua sắm
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
