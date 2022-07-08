import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { additem, dellitem } from "../redux/actions/index";
import { NavLink } from "react-bootstrap";
export default function Product() {
  const { id } = useParams();
  const [prodcut, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setloading(false);
    };
    getproduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <Skeleton height={350} />
        </div>
        <div className="col-md-6 mt-5" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={80} width={200} />
          <Skeleton height={80} width={350} />
          <Skeleton height={50} width={300} />
          <Skeleton height={60} width={250} />
        </div>
      </>
    );
  };

  const [add, setadd] = useState("Add To Cart");

  const dispatch = useDispatch();
  const handladd = (prodcut) => {
    if (add === "Add To Cart") {
      setadd("Remove From Cart");
      dispatch(additem(prodcut));
    } else {
      setadd("Add To Cart");
      dispatch(dellitem(prodcut));
    }
  };
  const Showproduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            className="mt-4 product-img"
            height={400}
            width={400}
            src={prodcut.image}
            alt={prodcut.title}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">{prodcut.category}</h4>
          <h1 className=" display-5">{prodcut.title}</h1>
          <p className="bold">
            Rating {prodcut.rating && prodcut.rating.rate}
            <i className="fa fa-star"></i>{" "}
          </p>
          <p className=" bold display-6">$ {prodcut.price}</p>
          <div className="lead">{prodcut.description}</div>
          <div className="d-flex">
            <button
              onClick={() => {
                handladd(prodcut);
              }}
              className="btn btn-outline-dark mt-3 py-2 px-5"
            >
              {add}
            </button>
            <NavLink
              to="/cart"
              className="btn btn-danger mt-3 px-2 ms-2 text-white"
            >
              Go To Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="row py-5">
          {loading ? <Loading /> : <Showproduct />}
        </div>
      </div>
    </div>
  );
}
