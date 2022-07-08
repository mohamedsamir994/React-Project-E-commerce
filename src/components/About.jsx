import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-5">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-6 mt-5 py-3">
            <h1 className="aboutHeader mb-4">About Us </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quod quos reprehenderit minus numquam molestias
              aspernatur fugit similique vel ipsum, amet voluptatum provident
              in, incidunt aperiam animi cum. Molestiae, dolorem? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Placeat, nobis!
              Cupiditate odio eos error. Temporibus dicta quaerat laboriosam
              quia, odit aut, commodi porro voluptas laudantium ducimus iste,
              debitis ab minus! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ipsum itaque molestias ab id. Aut dolor illum
              laboriosam a soluta minima sequi quidem cum aliquam molestiae!
              Sapiente ea debitis rem animi?lor
            </p>
            <NavLink to="/contact" className="btn btn-outline-danger mt-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-6 mt-5 py-5 px-5">
            <img
              src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000"
              alt=""
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
