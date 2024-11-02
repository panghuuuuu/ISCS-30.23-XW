import React, { Component } from "react";
import "../stylesheets/block.scss";
import "../stylesheets/_variables.scss";
// import button_fb from "../assets/05 Contact/05 Contact - 04 Facebook new.png";
// import button_link from "../assets/05 Contact/new-link.png";
import axiosInstance from "../axiosApi";
import moment from "moment";
class StudentEntry extends Component {
  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);

    axiosInstance
      .post(`/blockinfo/qrscan/`, {
        id: this.props.match.params.id,
        email: localStorage.getItem("email"),
      })
      .then((val) => {
        this.setState({
          studentInfo: val.data || {},
          error: false,
        });

        console.log(val);
        // console.log(this.state.blockInfo);
      })
      .catch((e) => {
        this.setState({
          studentInfo: {},
          error: true,
        });
      });
  };
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {},
      error: false,
    };
  }
  render() {
    const sessionData = [
      {
        title: "Onsite Schedule",
        date: moment(
          this.state.studentInfo?.date_of_entry?.split("T")[0],
          "YYYY-MM-DD",
        ).format("MMMM D"),
        startTime: moment(
          this.state.studentInfo?.date_of_entry?.split("T")[1],
          "hh:mm:ss",
        ).format("hh:mm A"),
      },
    ];

    const SessionContainer = ({ title, date, startTime, endTime }) => {
      const lowerTitle = title.toLowerCase();
      const type =
        lowerTitle.search("plenary") !== -1
          ? "plenary"
          : lowerTitle.search("block session") !== -1
          ? "block"
          : "onsite";
      return (
        <div className={`sesh-container ${type}`}>
          <p className="sesh-title">{title}</p>
          <p className="sesh-date-time">
            {date} | {startTime}
          </p>
        </div>
      );
    };

    return (
      <div className="Block">
        <div className="block-container">
          <div className="header student-entry d-flex justify-content-center align-items-center flex-col">
            <h1>Student Entry Information</h1>
          </div>
          {this.state.studentInfo.id_number && (
            <div className="details flex-col">
              <div className="block student-entry">
                <span>BLOCK {this.state.studentInfo.block}</span>
              </div>
              <br />
              <p>{this.state.studentInfo.name}</p>
              <p>{this.state.studentInfo.id_number}</p>
              <p>{this.state.studentInfo.email}</p>
              <div className="session">
                {sessionData.map((session, index) => {
                  return (
                    <SessionContainer
                      key={index}
                      title={session.title}
                      date={session.date}
                      startTime={session.startTime}
                    />
                  );
                })}
              </div>
            </div>
          )}
          {this.state.error && (
            <p className="error-message">Student entry not found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default StudentEntry;
