import React, { Component } from "react";
import "../stylesheets/block.scss";
import "../stylesheets/_variables.scss";

import axiosInstance from "../axiosApi";
import moment from "moment";
import {
  FaCalendarAlt,
  FaSchool,
  FaTshirt,
  FaExclamation,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export const shirt = {
  SOSS: "Yellow",
  SOH: "Pink",
  GBSEALD: "Orange",
  SOM: "Blue",
  SOSE: "White",
};

class Block extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  constructor(props) {
    super(props);
    this.state = {
      idnum: null,
      blockInfo: {},
      school: null,
      error: false,
      errorMessage: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .get(`/blockinfo/students/${this.state.idnum}`)
      .then((val) => {
        this.setState({
          blockInfo: val.data.block_info || {},
          school: val.data.school || {},
          error: false,
          errorMessage: "",
        });
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          this.setState({
            blockInfo: {},
            school: {},
            error: true,
            errorMessage: "Student ID Number does not exist",
          });
        } else {
          this.setState({
            blockInfo: {},
            school: {},
            error: true,
            errorMessage: "Please make sure that you are logged in.",
          });
        }
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      idnum: event.target.value,
    });
  };

  render() {
    const sessionData = [
      {
        title: "Onsite Activities",
        date: moment(
          this.state.blockInfo?.onsite_time_start?.split(" ")[0],
          "MM-DD-YYYY"
        ).format("MMMM D"),
      },
    ];

    const SessionContainer = ({ title, date }) => {
      const lowerTitle = title.toLowerCase();
      const type =
        lowerTitle.search("plenary") !== -1
          ? "plenary"
          : lowerTitle.search("block session") !== -1
            ? "block"
            : "onsite";
      return (
        <div className={`sesh-container ${type} flex gap-2`}>
          <FaCalendarAlt />
          <p className="sesh-date-time">
            <span className="font-bold">Onsite Day:</span> {date}
          </p>
        </div>
      );
    };

    const school = this.state.school;
    const shirtColor = shirt[school] || "DefaultColor";

    return (
      <div className="!min-h-screen flex flex-col">
        <div className="container d-flex flex-col mt-[30%] md:mt-[7.5%] lg:mt-[10%]">
          <div className="d-flex justify-content-center align-items-center flex-col">
            <h1 className="!text-primaryPink text-5xl">Block Details</h1>
          </div>
          {!this.state.blockInfo.block && !this.state.error && (
            <div
              className="details"
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              Kindly input your ID number to check information about your block
            </div>
          )}
          <div className="search flex-col">
            <div className="search-container">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id="idnum"
                  name="idnum"
                  placeholder="ID Number"
                  className="search-text"
                  onChange={this.handleInputChange}
                />
                <button className="btn !bg-primaryBlue">ENTER</button>
              </form>
            </div>
          </div>
          <div className="flex">
            {this.state.blockInfo.block && (
              <div className="flex flex-col rounded-md mx-auto mb-5 w-[40%] text-base">
                <div className="mt-4 place-self-center gap-2 border-primaryBlue border-2 rounded-lg w-full">
                  <div className="bg-primaryBlue p-3 text-[#FFFFFF]">
                    <h3 className="text-lg md:text-xl uppercase text-center font-bold">
                      BLOCK {this.state.blockInfo.block}
                    </h3>
                  </div>
                  <div className="text-base text-left p-4">
                    <div className="session">
                      {sessionData.map((session, index) => {
                        return (
                          <SessionContainer
                            key={index}
                            title={session.title}
                            date={session.date}
                          />
                        );
                      })}
                    </div>
                    <div className="flex gap-2">
                      <FaSchool />
                      <p>
                        <span className="font-bold">School:</span>{" "}
                        {this.state.school}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FaTshirt />
                      <p>
                        <span className="font-bold">Shirt Color:</span>{" "}
                        {shirtColor}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FaExclamation />
                      <p>
                        <span className="font-bold">Note: </span>Don’t forget to
                        download a copy of your{" "}
                        <Link to={`/entry-pass`} className="text-primaryBlue">
                          Freshie Entry Pass
                        </Link>
                        . This is required to enter campus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {this.state.error && (
            <p className="error-message">{this.state.errorMessage}</p>
          )}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Block;
