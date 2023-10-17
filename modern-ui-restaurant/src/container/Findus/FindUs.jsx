import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => {
  return (
    <div
      className="app__findus app__bg app__wrapper section__padding"
      id="contact"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__opensans" style={{ marginTop: "1.5rem" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <div>
          <p
            className="p__cormorant"
            style={{ marginTop: "1rem", color: "#DCCA87" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans" style={{ marginTop: "0.7rem" }}>
            Mon - Fri: 10:00am - 02:00am
          </p>
          <p className="p__opensans">Sat - Sun: 10:00am - 03:00am</p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="wrapper img" className="wrapper-img" />
      </div>
    </div>
  );
};

export default FindUs;
