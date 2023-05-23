import React from "react";
import { ReactComponent as Plus } from "../../../../assets/icons/plus.svg";
import CardButton from "../../../../components/CardButton/CardButton";

const AddProfile = ({ ...props }) => {
  return (
    <CardButton text="Add" {...props}>
      <CardButton.SvgComponent>
        <Plus />
      </CardButton.SvgComponent>
    </CardButton>
  );
};

export default AddProfile;
