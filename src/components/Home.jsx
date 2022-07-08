import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <div className="card bg-dark text-white border-0 mt-5">
        <img
          src="https://images.pexels.com/photos/7621142/pexels-photo-7621142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card-img"
          alt="Background"
          height="650px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div classNameName="container">
            <h5 className="card-title display-3 mb-0 fw-bolder ">
              NEW SEASON IS HERE !
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE NEW !</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
