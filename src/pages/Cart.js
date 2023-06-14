import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUserCart,
  removeFrCart,
  updateFrCart,
} from "../features/orders/orderSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.orders?.userCart);
  const [quantity, setQuantity] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    if (quantity !== null) {
      updateCartProduct(id, quantity);
    }
  }, [quantity]);
  let subTotal = 0;
  const removeProduct = (id) => {
    dispatch(removeFrCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 500);
  };
  const updateCartProduct = (id, quantity) => {
    dispatch(updateFrCart({ cartItemId: id, quantity }));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 500);
  };
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                console.log(item);
                subTotal = subTotal + item?.price * item?.quantity;
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={watch}
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>

                        <p className="d-flex gap-3">
                          Color:{" "}
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                          {item?.color?.title}
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ {item?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          id=""
                          value={quantity ? quantity : item?.quantity}
                          onChange={(e) => {
                            setQuantity(e.target.value);
                            setId(item?._id);
                          }}
                        />
                      </div>
                      <div>
                        <AiFillDelete
                          onClick={() => {
                            removeProduct(item?._id);
                          }}
                          className="text-danger r"
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        $ {item?.price * item?.quantity}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {subTotal}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
