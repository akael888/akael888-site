"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { getAllImageCollectionByBlog } from "@/app/lib/data";

interface ImageCarouselProp {
  imageCollectionPaths?: string[];
}

export default function ImageCarousel({
  imageCollectionPaths,
}: ImageCarouselProp) {
  const images = imageCollectionPaths;

  return (
    <>
      {imageCollectionPaths ? (
        <div className="max-w-full m-auto">
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={"test"}
                  width={800}
                  height={500}
                  layout="responsive"
                />
                <p className="legend">{image}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
}
