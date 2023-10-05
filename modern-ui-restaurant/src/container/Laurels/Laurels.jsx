import React from "react";

import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const Laurels = () => {
  const AwardCard = ({ award: { title, imgUrl, subtitle } }) =>
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
        <p style={{ color: "#AAAAAA" }} id="lorem">
          {subtitle}
        </p>
      </div>
    </div>;

  return (
    <div
      className="app__laurels app__bg app__wrapper section__padding"
      id="awards"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" className="subHeading" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map(award =>
            <AwardCard award={award} key={award.title} />
          )}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="wrapper img" className="wrapper-img" />
      </div>
      <img src={images.logo} alt="logo img" className="logo__img" />
    </div>
  );
};

export default Laurels;
