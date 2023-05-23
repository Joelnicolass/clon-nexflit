import React from "react";
import styles from "./CardButton.module.css";

const SvgComponent = ({ children }) => {
  if (!children) {
    throw new Error("Svg as Component is required");
  }

  return <>{children}</>;
};

const ImageComponent = ({ children }) => {
  if (!children) {
    throw new Error("Image as Component is required");
  }

  return <>{children}</>;
};

const CardButton = ({ children, text, ...props }) => {
  const allowedChildren = ["SvgComponent", "ImageComponent"];

  if (!children) {
    throw new Error(`Allowed children: ${allowedChildren.join(", ")}`);
  }

  const childrenNames = React.Children.map(children, (child) => {
    return child.type.name;
  });

  const isChildrenAllowed = childrenNames.every((childName) => {
    return allowedChildren.includes(childName);
  });

  if (!isChildrenAllowed) {
    throw new Error(
      `Children allowed: ${allowedChildren.join(
        ", "
      )}. Children received: ${childrenNames.join(", ")}`
    );
  }

  const svgComponent = childrenNames.includes("SvgComponent");
  const imageComponent = childrenNames.includes("ImageComponent");

  if (svgComponent && imageComponent) {
    throw new Error(
      `You can't use a SvgComponent and a ImageComponent at the same time`
    );
  }

  return (
    <div className={styles.container} {...props}>
      <div className={styles.card}>{children}</div>
      {text && <p>{text}</p>}
    </div>
  );
};

CardButton.SvgComponent = SvgComponent;
CardButton.ImageComponent = ImageComponent;

export default CardButton;
