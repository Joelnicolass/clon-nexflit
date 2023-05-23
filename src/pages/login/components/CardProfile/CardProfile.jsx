import React from "react";
import CardButton from "../../../../components/CardButton/CardButton";

const CardProfile = ({ name, src }) => {
  return (
    <CardButton text={name}>
      <CardButton.ImageComponent>
        <img src={src} alt={name} />
      </CardButton.ImageComponent>
    </CardButton>
  );
};

export default CardProfile;
