import React, { useState, useEffect, useRef } from "react";
import "../stylesheets/EntryPass.scss";
import logo from "../assets/mithi_logo_colored.webp";
import watermark from "../assets/watermark.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import day1foreground from "../assets/entrypass-day1-assets.png";
import day2foreground from "../assets/entrypass-day2-assets.png";
import axiosInstance from "../axiosApi";
import { Link, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";

const EntryPass = () => {
  const [fetchError, setFetchError] = useState(false);
  const [idnum, setIdnum] = useState(localStorage.getItem("id_number"));
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [school, setSchool] = useState(null);
  const [block, setBlock] = useState(null);
  const [course, setCourse] = useState(null);

  const componentRef = useRef();
  const navigate = useNavigate();

  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  useEffect(() => {
    axiosInstance
      .get(`/blockinfo/students/${idnum}`)
      .then((val) => {
        setName(val.data.name || "");
        setEmail(val.data.user || "");
        setSchool(val.data.school || "");
        setBlock(val.data.block_info?.block || "");
        setCourse(val.data.course || "");
        console.log(val);
      })
      .catch((e) => {
        console.error(e);
        setFetchError(true);
        navigate("/");
      });
  }, [idnum, name, email, school, block, course, navigate]);

  const isDayOne = () => {
    return 1;
  };

  return (
    <section className="grid grid-cols-1 w-[500px] md:w-auto sm:grid-cols-2 gap-8 bg-primaryWhite mt-8 md:mt-12 mb-20 py-20 px-4 md:px-24">
      <div className="flex flex-col gap-8 text-center sm:text-right relative">
        <h1 className="text-primaryBlue text-4xl md:text-5xl uppercase px-4 md:px-0">
          Your Entry Pass
        </h1>
        <p>
          In order the enter the campus, you must present this pass in order to
          be allowed entry. Kindly take a screenshot to show on your designated
          day or{" "}
          <ReactToPrint
            trigger={() => (
              <button className="text-primaryPink">
                download the entry pass as pdf.
              </button>
            )}
            content={() => componentRef.current}
          />
        </p>
        <p>
          Designated parking for all freshmen is in the{" "}
          <strong>Central Car Park</strong> area near JSEC.
        </p>
        {fetchError && (
          <p className="text-primaryRed">
            There has been an error fetching your entry pass details. Please try
            to{" "}
            <Link to="/" className="underline">
              sign out and sign in
            </Link>{" "}
            again.
          </p>
        )}
        <img
          src="https://ucarecdn.com/97643107-c72c-4206-90ae-2e14e262660f/Star1.png"
          alt="cute star"
          className="absolute top-[20%] left-[25%] w-[1000px] hidden md:block"
        />
        <img
          src="https://ucarecdn.com/dfed38b0-947a-4fc8-ba86-0c7b12d7ccc9/-/preview/706x1000/"
          alt="cute star"
          className="absolute top-[35%] left-[10%] w-96 hidden md:block"
        />
      </div>
      {/* wag ka na maging silly freshie kung marunong ka mag edit please lang */}
      <motion.div
        style={{
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 500,
          height: 730,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className=""
      >
        <motion.div
          style={{
            margin: "auto",
            width: 500,
            height: 730,
            transformStyle: "preserve-3d",
            perspective: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rotateX,
            rotateY,
          }}
          transition={{ velocity: 0 }}
        >
          <motion.div
            key="card"
            style={{
              borderRadius: "1.5rem",
              backgroundColor: "blue",
              width: 500,
              height: 730,
              transformStyle: "preserve-3d",
              perspective: 800, // Set perspective on the card
              cardRotateX,
              cardRotateY,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 40 }}
          >
            <div
              ref={componentRef}
              className={`rounded-3xl entry-pass-img w-[500px] h-[730px] ${isDayOne() ? "bg-[#1827cd]" : "bg-primaryOrange"} shadow-2xl flex flex-col items-center relative`}
            >
              <img
                src={watermark}
                alt="watermark"
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-25 z-10"
              />
              {isDayOne() ? (
                <img
                  src={day1foreground}
                  alt="watermark"
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
                />
              ) : (
                <img
                  src={day2foreground}
                  alt="watermark"
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
                />
              )}

              <div className="w-full h-[90px] flex justify-between place-items-center bg-primaryWhite px-6">
                <img src={logo} alt="OrSem 2024 Logo" className="h-5/6" />
                <span
                  className={`text-[42px] leading-none font-black uppercase ${isDayOne() ? "text-primaryBlue" : "text-primaryOrange"} inline-block mt-[24px]`}
                >
                  {isDayOne() ? "ORSEM" : "ORSEM"}
                </span>
              </div>
              <div className="flex flex-col flex-1 justify-start items-center w-[370px] mt-[36px]">
                <div className="w-[420px] h-[270px] bg-primaryWhite rounded-3xl">
                  <div
                    className={`w-full h-[74px] flex justify-center items-center ${isDayOne() ? "day-1-freshie-header" : "day-2-freshie-header"} text-primaryWhite rounded-t-3xl`}
                  >
                    <span className="text-[48px] font-extrabold uppercase text-primaryWhite inline-block mt-[12px]">
                      FRESHIE PASS
                    </span>
                  </div>
                  <div className="w-[370px] h-[196px] m-auto flex flex-col justify-center text-[#202bc5] text-[18px] font-medium gap-1 no-underline">
                    <span className="text-[18px]">
                      Name: <span className="text-[14px]">{name}</span>
                    </span>
                    <span className="text-[18px]">
                      Course: <span className="text-[14px]">{course}</span>
                    </span>
                    <span className="text-[18px]">
                      Email: <span className="text-[14px]">{email}</span>
                    </span>
                    <span className="text-[18px]">
                      Block: <span className="text-[14px]">{block}</span>
                    </span>
                    <span className="text-[18px]">
                      School: <span className="text-[14px]">{school}</span>
                    </span>
                  </div>
                </div>
                <div className="description w-full px-[46px] text-[12px] mt-[40px] text-center">
                  <p className="first-come text-primaryWhite">
                    Given the limited parking slots,{" "}
                    <span className="font-semibold">
                      parking is only allowed for freshies who are driving
                    </span>
                    , and it is on{" "}
                    <span className="font-semibold">
                      first-come, first-served basis
                    </span>
                    .
                  </p>
                  <br />
                  <p className="chauffeur text-primaryWhite px-[10px]">
                    Chauffeurs are not allowed to park anywhere on campus.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EntryPass;
