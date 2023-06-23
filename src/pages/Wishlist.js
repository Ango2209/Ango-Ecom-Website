import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishList } from "../features/users/userSlice";
import { addToWishList } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const getWishListFromDb = () => {
    dispatch(getUserProductWishList());
  };
  useEffect(() => {
    getWishListFromDb();
  }, []);
  const wishListState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  const removeFromWishList = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      getWishListFromDb();
    }, 200);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishListState?.length === 0 && (
            <div className="text-center fs-3">No item in the wish list</div>
          )}
          {wishListState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => {
                      removeFromWishList(item?._id);
                    }}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={
                        item?.image[0]?.url
                          ? item?.image[0]?.url
                          : "images/watch.jpg"
                      }
                      className="img-fluid d-block mx-auto"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">${item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
