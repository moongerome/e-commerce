import React from "react";
import "./categoryItem.styles.css";
const CategoryItem = (categoryItem) => {
  const { title, image } = categoryItem;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="category-body-container">
          <p>{title}</p>
          <p className="shopNow">Shop Now</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryItem;
