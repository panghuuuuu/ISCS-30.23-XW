import { React, useState, useEffect } from "react";
import HistoryEntry from "../components/HistoryEntry";
import HistoryData from "../assets/History/HistoryData";
import SubHistoryData from "../assets/History/SubHistoryData";
import { useMotionValue, motion, animate } from "framer-motion";
import useMeasure from "react-use-measure";

const History = () => {
  const img = SubHistoryData.pictures;
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
    <div className="history">
      <div className="body mt-32 sm:mt-0 mb-20">
        {HistoryData.map((entry, index) => (
          <HistoryEntry
            key={index}
            title={entry.title}
            description={entry.description}
            link={entry.link}
            images={entry.images}
            logo={entry.logo}
            hashtag={entry.hashtag}
            // reverse={index % 2 === 0}
          />
        ))}
        <h1 className="text-3xl md:text-5xl text-primaryBlue text-center mb-6 mt-20">
          Pre-2020 OrSems{" "}
        </h1>

        <div className="sub-history-container mt-2">
          <div className="logos-container flex justify-around">
            {SubHistoryData.logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="!max-w-[20%]"
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
          <div className="pictures-container !mt-2 overflow-hidden w-full">
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
                  className="!max-w-[20%]"
                />
              ))}
            </motion.div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default History;
