import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import nodeImg from "../assets/img/node.png";
import reactImg from "../assets/img/react.png";
import mongoImg from "../assets/img/mongodb.png";
import sqlImg from "../assets/img/sql.png";
import tsImg from "../assets/img/ts.png";
import reduxImg from "../assets/img/redux.png";
import expressImg from "../assets/img/express.png";

export const Skills = () => {
  const skillList = [
    { name: "React", imgUrl: reactImg, alt: "react-img" },
    { name: "Node", imgUrl: nodeImg, alt: "node-img" },
    {
      name: "Typescript",
      imgUrl: tsImg,
      alt: "ts-img",
    },
    {
      name: "Express",
      imgUrl: expressImg,
      alt: "express-img",
    },
    {
      name: "SQL",
      imgUrl: sqlImg,
      alt: "sql-img",
    },
    {
      name: "MongoDB",
      imgUrl: mongoImg,
      alt: "mongo-img",
    },
    {
      name: "Redux",
      imgUrl: reduxImg,
      alt: "redux-img",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>
                I have learned different programming languages ​​so far and as
                far as my skills are concerned<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillList.map((data) => (
                  <div className="item">
                    <img src={data.imgUrl} alt={data.alt} />
                    <h5>{data.name}</h5>
                  </div>
                ))}
                {/* 
                <div className="item">
                  <img src={nodeImg} alt="meter2" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={mongoImg} alt="meter3" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sqlImg} alt="meter" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={tsImg} alt="meter" />
                  <h5>Typescript</h5>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="back" />
    </section>
  );
};
