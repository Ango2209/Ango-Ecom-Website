import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/products/productSlice";
const ProductCard = (props) => {
  const { grid, _id, image, brand, title, totalRating, description, price } =
    props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const addToWish = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <div
      className={` ${
        location.pathname == "/product" ? `gr-${grid}` : "col-3"
      } `}
    >
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button
            className="border-0 bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              addToWish(_id);
            }}
          >
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img
            src={image}
            className="img-fluid d-block mx-auto "
            alt="product"
            width={160}
          />
          {/* <img src={watch2} className="img-fluid" alt="product" /> */}
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={totalRating}
            edit={false}
            activeColor="#ffd700"
          />
          <p
            className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {}
          </p>
          <p className="price">${price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            {/* <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button> */}
            <button className="border-0 bg-transparent">
              <img
                src={view}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/product/${_id}`);
                }}
                alt="view"
              />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
