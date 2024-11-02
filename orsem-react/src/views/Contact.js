import React, { Component } from "react";
import preview1 from "../assets/05 Contact/1.jpg";
import preview2 from "../assets/05 Contact/2.jpg";
import preview3 from "../assets/05 Contact/3.jpg";
import preview4 from "../assets/05 Contact/4.jpg";
import design1a from "../assets/05 Contact/1a.png";
import design1b from "../assets/05 Contact/1b.png";
import design2 from "../assets/05 Contact/2a.png";
import design3 from "../assets/05 Contact/3a.png";
import design4a from "../assets/05 Contact/4a.png";
import design4b from "../assets/05 Contact/4b.png";

class Contact extends Component {
  render() {
    return (
      <div className="About bg-primaryWhite w-full mb-16 overflow-hidden">
        <div className="about-message relative mt-[75px] md:mt-[68px] text-[#FFFFFF] w-full h-[9.5vh] md:h-[16vh] mb-16 flex flex-col items-center bg-primaryBlue mx-auto">
          <p className="font-bold text-[20px] md:text-[26px] uppercase !mt-3 md:!mt-12">
            Learn more about Ateneo
          </p>
          <p className="text-[10px] md:text-[13px] mt-1.5 text-[#FFFFF]">
            Click on the card to open the website!
          </p>
        </div>
        <div className="about-cards flex flex-wrap justify-center gap-2">
          {/* ateneo official website */}
          <div className="official-website w-[85%] lg:w-[40%] h-[40vh] md:h-[65vh] mb-14 flex flex-col items-center bg-primaryPink bg-opacity-50 rounded-[55px] shadow-lg mx-auto relative group">
            <a
              className="w-full h-[80%] rounded-t-[55px] overflow-hidden block relative group"
              href="https://www.ateneo.edu/"
              target="_blank"
            >
              <div className="preview-container relative w-full h-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={preview1}
                  alt="Official Website"
                />
                <div className="absolute inset-0 rounded-t-[55px] bg-[#000000] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-primaryWhite font-medium text-xl flex items-center">
                    Open Official Website
                  </p>
                </div>
              </div>
            </a>
            <div className="mt-4 md:mt-8 text-center">
              <p className="font-bold text-xl md:text-3xl uppercase text-[#86357f]">
                ADMU Official Website
              </p>
              <p className="text-[8px] md:text-sm mt-0.5 md:mt-2 text-[#ab46a2]">
                Find information about all things ADMU-related here.
              </p>
            </div>
            <div className="absolute top-0 left-0 -translate-x-28 md:-translate-x-24 -translate-y-12 md:-translate-y-10 scale-50 md:scale-75">
              <img src={design1a} />
            </div>
            <div className="absolute top-0 right-0 translate-x-36 md:translate-x-28 translate-y-32 md:translate-y-68 scale-[30%] md:scale-[50%]">
              <img src={design1b} />
            </div>
          </div>
          {/* office directory */}
          <div className="office-directory w-[85%] lg:w-[40%] h-[40vh] md:h-[65vh] mb-14 flex flex-col items-center bg-primaryOrange bg-opacity-50 rounded-[55px] shadow-lg mx-auto relative">
            <a
              className="w-full h-[80%] rounded-t-[55px] overflow-hidden block relative group"
              href="https://www.ateneo.edu/directory"
              target="_blank"
            >
              <div className="preview-container relative w-full h-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={preview2}
                  alt="Office Directory"
                />
                <div className="absolute inset-0 rounded-t-[52px] bg-[#000000] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-primaryWhite font-medium text-xl flex items-center">
                    Open Office Directory
                  </p>
                </div>
              </div>
            </a>
            <div className="mt-4 md:mt-8 text-center">
              <p className="font-bold text-xl md:text-3xl uppercase text-[#87521c]">
                Office Directory
              </p>
              <p className="text-[8px] md:text-sm mt-0.5 md:mt-2 text-[#ac6925]">
                Find information about the college offices here.
              </p>
            </div>
            <div className="absolute top-0 right-0 translate-x-36 md:translate-x-40 -translate-y-20 md:-translate-y-14 scale-50 md:scale-75">
              <img src={design2} />
            </div>
          </div>
          {/* admission office directory */}
          <div className="admission-office-directory w-[85%] lg:w-[40%] h-[40vh] md:h-[65vh] mb-14 flex flex-col items-center bg-primaryRed bg-opacity-50 rounded-[55px] shadow-lg mx-auto relative">
            <a
              className="w-full h-[80%] rounded-t-[52px] overflow-hidden block relative group"
              href="https://www.ateneo.edu/contact"
              target="_blank"
            >
              <div className="preview-container relative w-full h-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={preview3}
                  alt="Admission Office Directory"
                />
                <div className="absolute inset-0 rounded-t-[52px] bg-[#000000] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-primaryWhite font-medium text-xl flex items-center">
                    Open Admission Office Directory
                  </p>
                </div>
              </div>
            </a>
            <div className="mt-4 md:mt-8 text-center">
              <p className="font-bold text-xl md:text-3xl uppercase text-[#8c0000]">
                Admission Office Directory
              </p>
              <p className="text-[8px] md:text-sm mt-0.5 md:mt-2 text-[#b20000]">
                Find the email for admission inquiries here.
              </p>
            </div>
            <div className="absolute top-0 left-0 -translate-x-44 md:-translate-x-48 -translate-y-20 md:translate-y-50 scale-[40%] md:scale-50">
              <img src={design3} />
            </div>
          </div>
          {/* facebook page */}
          <div className="facebook-page w-[85%] lg:w-[40%] h-[40vh] md:h-[65vh] mb-14 flex flex-col items-center bg-primaryViolet bg-opacity-50 rounded-[55px] shadow-lg mx-auto relative">
            <a
              className="w-full h-[80%] rounded-t-[52px] overflow-hidden block relative group"
              href="https://www.facebook.com/ateneodemanila"
              target="_blank"
            >
              <div className="preview-container relative w-full h-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={preview4}
                  alt="Facebook Page"
                />
                <div className="absolute inset-0 rounded-t-[52px] bg-[#000000] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <p className="text-primaryWhite font-medium text-xl flex items-center">
                    Open Facebook page
                  </p>
                </div>
              </div>
            </a>
            <div className="mt-4 md:mt-8 text-center">
              <p className="font-bold uppercase text-xl md:text-3xl text-[#412987]">
                ADMU Facebook Page
              </p>
              <p className="text-[8px] md:text-sm mt-0.5 md:mt-2 text-[#5436ac]">
                Find the latest announcements here
              </p>
            </div>
            <div className="absolute top-0 right-0 translate-x-36 md:translate-x-40 -translate-y-32 md:-translate-y-24 scale-50 md:scale-75">
              <img src={design4a} />
            </div>
            <div className="absolute top-0 left-0 -translate-x-32 md:-translate-x-12 translate-y-24 md:translate-y-56 scale-[30%] md:scale-[45%]">
              <img src={design4b} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
