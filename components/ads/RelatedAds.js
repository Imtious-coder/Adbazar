import Slider from "react-slick";
import SlickItem from "./SlickItem";

export default function RelatedAds({ ads }) {
  const settings = {
    dots: false,
    infinte: true,
    speed: 500,
    arrows: false,
    slidesToShow: ads && ads.length >= 5 ? 5 : 2,
    slidesToScroll: ads && ads.length >= 5 ? 5 : 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: ads && ads.length >= 4 ? 4 : 2,
          slidesToScroll: ads && ads.length >= 4 ? 4 : 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: ads && ads.length >= 3 ? 3 : 2,
          slidesToScroll: ads && ads.length >= 3 ? 3 : 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: ads && ads.length >= 2 ? 2 : 2,
          slidesToScroll: ads && ads.length >= 2 ? 2 : 2,
        },
      },
    ],
  };
  return (
    <div>
      {ads && ads.length > 1 ? (
        <Slider {...settings}>
          {ads.map((item, idx) => (
            <div key={idx}>
              <SlickItem ad={item} key={idx} />
            </div>
          ))}
        </Slider>
      ) : (
        <h3>No Related ad found !</h3>
      )}
    </div>
  );
}
