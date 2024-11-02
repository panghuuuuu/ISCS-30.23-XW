import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import TeaserGif from "../assets/Teaser/New Merch Teaser.gif";
import TeaserImg from "../assets/Teaser/Coming Soon.png";

const Teaser = () => {
  return (
    <div style={{ background: "#EF5980" }}>
      <div>
        <ProgressiveImage src={TeaserGif} placeholder={TeaserImg}>
          {(src) => (
            <img src={src} alt="Coming Soon" style={{ width: "100%" }} />
          )}
        </ProgressiveImage>
      </div>
    </div>
  );
};

export default Teaser;
