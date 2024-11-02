import React from "react";
import logo from "../assets/mithi_logo.webp";
import { NavLink } from "react-router-dom";
import "../stylesheets/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-primaryBlue rounded-t-3xl !text-base">
      <div className="footer-container flex flex-col sm:!flex-row pt-10 pb-10 sm:pb-48 justify-evenly p-4">
        <div className="logo-col">
          <div className="d-flex justify-content-start sm:align-items-start align-items-end flex-col">
            <div className="logo-container flex !justify-start">
              <img
                className="logo !w-28"
                src={logo}
                alt="OrSem 2024: Mithi White Logo"
              />
            </div>
            <p className="logo-copyright mt-6 !text-base sm:!flex !hidden">
              © OrSem 2024: Mithi.
            </p>
          </div>
        </div>
        <div className="mt-3 d-flex flex-row justify-start sm:!hidden !flex">
          <a
            href="https://www.facebook.com/OrSem2024"
            className="social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-item"
              color="white"
              size="2x"
            />
          </a>
          <a
            href="https://www.instagram.com/ateneo.orsem/"
            className="social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              size="2x"
              className="social-item"
            />
          </a>
          <a
            href="https://www.tiktok.com/@ateneo.orsem"
            className="social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              color="white"
              size="2x"
              className="social-item"
            />
          </a>
          <a
            href="https://www.youtube.com/@AteneoOrSem"
            className="social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="white"
              size="2x"
              className="social-item"
            />
          </a>
        </div>
        <div className="pages-col flex-3">
          <span className="footer-title">directory</span>
          <div className="mt-3 flex sm:!flex-row flex-col sm:gap-5 !justify-start">
            <div className="left flex flex-col w-full">
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/home">
                  home
                </NavLink>
              </div>
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/map">
                  map
                </NavLink>
              </div>
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/journals">
                  {" "}
                  Journals
                </NavLink>
              </div>
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/merch">
                  merch
                </NavLink>
              </div>
            </div>
            <div className="right flex flex-col w-full">
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/history">
                  History
                </NavLink>
              </div>
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/faq">
                  FAQs
                </NavLink>
              </div>
              <div className="w-full flex justify-start">
                <NavLink exact className="item !capitalize" to="/contact">
                  contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col" verticalAlign="top">
          {/* <span className="footer-title">
            <span className="footer-title">activities</span>
            <div className="d-flex flex-wrap flex-row">
              <NavLink
                exact
                className="item program-item"
                to="/program/SLS"
              >
                Yugto Talks
              </NavLink>
              <NavLink
                exact
                className="item program-item"
                to="/program/admintalks"
              >
                Admin Videos
              </NavLink>
              <NavLink exact className="item program-item" to="/program/o-laro">
                o-laro{" "}
              </NavLink>
            </div>
          </span> */}

          <span className="computer tablet only !hidden sm:!flex footer-title">
            socials
          </span>
          <div className="mt-3 d-flex flex-row justify-start !hidden sm:!flex">
            <a
              href="https://www.facebook.com/OrSem2024"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-item"
                color="white"
                size="2x"
              />
            </a>
            <a
              href="https://www.instagram.com/ateneo.orsem/"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                size="2x"
                className="social-item"
              />
            </a>
            <a
              href="https://www.tiktok.com/@ateneo.orsem"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                color="white"
                size="2x"
                className="social-item"
              />
            </a>
            <a
              href="https://www.youtube.com/@AteneoOrSem"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color="white"
                size="2x"
                className="social-item"
              />
            </a>
          </div>
          <p className="logo-copyright mt-6 !text-base sm:!hidden !flex !text-primaryWhite">
            © OrSem 2024: Mithi.
          </p>
        </div>
        <div className="contact-col computer tablet only sm:!flex !hidden">
          <div className="d-flex justify-content-start align-items-start flex-col">
            <span className="footer-title">contact</span>
            <p class="mt-3">
              Manuel V. Pangilinan Center for Student
              <br />
              Leadership, Ateneo de Manila University
              <br />
              Katipunan Avenue, Quezon City, 1108
              <br />
              <br />
              <a
                class="footer-mail"
                href="mailto:orsem.college@student.ateneo.edu"
              >
                orsem.college@student.ateneo.edu
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="!py-3 footer-credits d-flex text-sm sm:text-base gap-1 flex-wrap justify-content-center align-items-center h-fit bg-primaryOrange">
        <span>Developed by the OrSem SEC-WEB Committee: </span>
        <strong>
          Sharmaine Chua, Nisha Espera, Ysabella Panghulan, Kir Peñalber, Justin
          Reyes, Sophia Salta
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
