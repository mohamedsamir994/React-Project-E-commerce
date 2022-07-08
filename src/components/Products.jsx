import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Products() {
  const [data, setdata] = useState([]);
  const [fillter, setfillter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentmounted = true;

  useEffect(() => {
    const getprodcuts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentmounted) {
        setdata(await response.clone().json());
        setfillter(await response.json());
        setloading(false);
      }
      return () => {
        componentmounted = false;
      };
    };

    getprodcuts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const category = (categoryy) => {
    const theNewList = data.filter((x) => x.category === categoryy);
    setfillter(theNewList);
  };
  const Showproducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setfillter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => category("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            onClick={() => category("women's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => category("jewelery")}
            className="btn btn-outline-dark me-2"
          >
            Jewelery
          </button>
          <button
            onClick={() => category("electronics")}
            className="btn btn-outline-dark me-2"
          >
            Electronic
          </button>
        </div>
        {fillter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 card-only">
                <div key={product.id} class="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      {product.title.substring(0, 11)}...
                    </h5>
                    <p class="card-text lead fw-bolder">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Prodcuts</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-contnet-center">
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>
    </div>
  );
}
