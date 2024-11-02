import React, { useEffect, useState } from "react";
import { useMotionValue, motion, animate } from "framer-motion";
import useMeasure from "react-use-measure";

const HistoryEntry = ({
  title,
  description,
  link,
  images,
  logo,
  hashtag,
  // reverse,
}) => {
  const img = images;

  let [ref, { width }] = useMeasure();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (width > 0) {
      setCarouselWidth(width);
    }
  }, [width]);

  const imageWidth = 200;
  const gap = 4;
  const totalSlideWidth = img.length * imageWidth + (img.length - 1) * gap;

  useEffect(() => {
    let controls;
    let finalPosition = -(totalSlideWidth - carouselWidth) - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: Math.max(10, totalSlideWidth / carouselWidth) * 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, carouselWidth, totalSlideWidth]);

  return (
    <div>
      <div
        className={`entry-container flex flex-col-reverse md:flex-row md:px-10 sm:px-24 px-5 pt-8 mt-20 w-full md:mt-16`}
      >
        <div className="flex w-full md:w-3/4 pb-8 md:pb-16 sm:pt-8 pt:0 md:pt-16 justify-center items-center flex-1">
          <img
            src={logo}
            alt={title}
            className="object-cover w-full lg:w-3/4 rounded-xl"
          />
        </div>
        <div className="text-left sm:px-8 px-2 flex-col mt-auto mb-auto flex-1">
          <h1 className="text-3xl md:text-5xl text-primaryBlue">{title}</h1>
          <p className="text-lg md:text-xl mt-1.5 text-primaryPink">
            {hashtag}
          </p>
          <p className="text-left pt-4 md:pt-6 text-sm sm:text-base">
            {description}
          </p>
          <div className="bg-primaryBlue text-primaryWhite hover:bg-[#222fb8] hover:transition hover:ease-in-out rounded-full font-medium pb-2 pt-3 md:pb-[9px] px-5 md:px-6 mt-8 md:mt-6 w-fit text-sm sm:text-md mb-8 md:mb-0">
            <a
              href={link}
              className="hover:text-[#f4f4f4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Open Facebook Page"}
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          className="image-carousel flex gap-4 mb-3 w-full"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...img, ...img, ...img].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="!max-w-[20%] rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HistoryEntry;
