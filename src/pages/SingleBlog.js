import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const [grid, setGrid] = useState(4);
  const blogState = useSelector((state) => state?.blogs?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  console.log(typeof getBlogId);
  const dispatch = useDispatch();
  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };

  useEffect(() => {
    getBlog();
  }, [getBlogId]);
  console.log(blogState);
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src={blogState?.image ? blogState?.image : blog}
                className="img-fluid w-30 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: blogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
