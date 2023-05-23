import React from "react";
import SwiperCarousel from "../../../../components/SwiperCarousel/SwiperCarousel";
import CardGeneric from "../../../../components/CardGeneric/CardGeneric";
import { TMDB } from "../../../../config/apiConfig";

const CarouselNetflix = ({ data, isLoading, title }) => {
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <SwiperCarousel>
        {data.map((e) => (
          <div key={e.id}>
            <CardGeneric title={e.title} backgroundImage={e.backdrop} />
          </div>
        ))}
      </SwiperCarousel>
    </div>
  );
};

export default CarouselNetflix;
