import React from "react";
import { getImgUrl } from "../../utils/getImageUrl";
import Rating from "../../Components/Rating";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-1">{product.category }</h4>
        <h3 className="font-semibold">{product.name}</h3>
        <Rating rating={product.rating}/>
      </div>
    </div>
  );
};

export default ProductCard;
