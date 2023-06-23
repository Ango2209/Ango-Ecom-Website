import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserOrders } from "../features/orders/orderSlice";
export const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state.orders?.orderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <h5>Order Id</h5>
              </div>
              <div className="col-4">
                <h5>Total Amount </h5>
              </div>
              <div className="col-4">
                <h5>Status </h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-2">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div
                    style={{ backgroundColor: "#febd69" }}
                    className="row pt-3 my-3"
                    key={index}
                  >
                    <div className="col-4">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-4">
                      <p>{item?.totalPrice} </p>
                    </div>
                    <div className="col-4">
                      <p>{item?.orderStatus} </p>
                    </div>

                    <div className="col-12">
                      <div
                        className="row py-3"
                        style={{ backgroundColor: "#232f3e" }}
                      >
                        <div className="col-3">
                          <h6 className="text-white">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Quantity </h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Price </h6>
                        </div>
                        <div className="col-3">
                          <h6>Color </h6>
                        </div>
                        {item?.orderItems?.map((item, index) => {
                          return (
                            <div className="col-12" key={index}>
                              <div className="row p-3">
                                <div className="col-3">
                                  <p className="text-white">
                                    {item?.product?.title}
                                  </p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{item?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{item?.price}</p>
                                </div>
                                <div className="col-3">
                                  <ul className="colors ps-0">
                                    <li
                                      style={{
                                        backgroundColor: item?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
      ;
    </>
  );
};
