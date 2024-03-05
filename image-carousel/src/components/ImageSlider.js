import ImageData from "./ImageData";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  const prevSlide = () => {
    // if (current === 0) {
    //   setCurrent(length - 1);
    // } else {
    //   setCurrent(current - 1);
    // }

    // If , else แบบลดรูป
    current === 0 ? setCurrent(length - 1) : setCurrent(current - 1);
  };

  const nextSlide = () => {
    // if (current === length - 1) {
    //   setCurrent(0);
    // } else {
    //   setCurrent(current + 1);
    // }
    current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <section className="slider">
      <SlArrowLeftCircle className="leftArrow" onClick={prevSlide} />
      <SlArrowRightCircle className="rightArrow" onClick={nextSlide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <p>{data.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
