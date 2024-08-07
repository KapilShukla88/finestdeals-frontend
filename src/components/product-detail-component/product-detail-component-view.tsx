"use client";
import React, { useCallback, useState } from "react";

import ProductImageComponent from "./product-image-component";
import ProductIntroComponent from "./product-intro-component";
import ProductReviewComponent from "./product-review-component";

const ProductDetailComponentView: React.FC<{}> = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleOnSelectImage = useCallback((imageNumber: number) => {
    setSelectedImageIndex(imageNumber);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full md:max-w-[80%] md:h-screen">
        <div className="flex gap-4">
          <ProductImageComponent
            selectedImagePosition={selectedImageIndex}
            handleOnSelectImage={handleOnSelectImage}
          />
          <ProductIntroComponent />
        </div>
        <ProductReviewComponent />
      </div>
    </div>
  );
};

export default ProductDetailComponentView;
