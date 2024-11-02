import React, { Component } from "react";
import "../stylesheets/virtualid.scss";
import axiosInstance from "../axiosApi";
import "../stylesheets/_variables.scss";
class VirtualId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      idNumber: localStorage.getItem("id_number"),
    };
  }

  getCurrentUser = (idNumber) => {
    return axiosInstance
      .get(`/blockinfo/students/${idNumber}/`)
      .then((response) => {
        this.setState({
          user: response.data,
          error: null,
        });
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        this.setState({ error: "Error fetching user data." });
      });
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
    const idNumber = this.state.idNumber;
    if (idNumber) {
      this.getCurrentUser(idNumber);
    }
    console.log(idNumber);
  };

  render() {
    // const capitalize = (str) => {
    //   const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    //   return capitalized;
    // };

    // const emailInfo = this.state.user?.user.split("@");
    // // const name = emailInfo ? emailInfo[0].split(".") : "";
    // // const firstName = name ? capitalize(name[0]) : "";
    // // const lastName = name ? capitalize(name[1]) : "";
    const colors = {
      blue: "#2185ff",
      pink: "#ff0f8a",
      darkgreen: "#00955c",
      yellow: " #ffd30d",
      violet: "#b527fb",
      gray: "#ececec",
    };
    let idColor;
    if (this.state.user) {
      const school = this.state.user.school;
      console.log(this.state);
      switch (school) {
        case "SOSE":
          idColor = colors.darkgreen;
          break;
        case "SOM":
          idColor = colors.pink;
          break;
        case "SOSS":
          idColor = colors.yellow;
          break;
        case "SOH":
          idColor = colors.blue;
          break;
        default:
          idColor = colors.gray;
          break;
      }
    }
    return (
      <div className="virtual-id-container">
        <h1>Virtual ID</h1>
        <p>
          Hey freshie! Excited for your OrSem activities ONSITE? Before you head
          on to your tours and talks,{" "}
          <b>
            make sure to present this Virtual ID to the registration booths at
            the CovCourts
          </b>{" "}
          so we can record your attendance for the day! You can also take a
          screenshot of the ID and present it to the booth instead.
        </p>
        <p>
          <b>No ID, No Registration</b>
        </p>
        <p>
          <i>
            We also recommend that you prepare a screenshot of your proof of
            payment from AISIS
          </i>
        </p>
        {!this.state.user && (
          <h2 style={{ color: "#010101" }}>
            Login using your OBF to display your Virtual ID...
          </h2>
        )}
        {this.state.user && (
          <div className="info-container" style={{ backgroundColor: idColor }}>
            <div className="id-container">
              <div className="muli-logo">
                <img
                  src={require("../assets/mithi_logo.webp")}
                  alt="muli logo"
                />
              </div>
            </div>
            <div className="student-info">
              <h1>{this.state.idNumber}</h1>
              <h2 className="block-name" style={{ color: idColor }}>
                BLOCK {this.state.user.block_info.block}
              </h2>
              <h2>Name: {this.state.user.name}</h2>
              <p>Course: {this.state.user.course}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default VirtualId;
