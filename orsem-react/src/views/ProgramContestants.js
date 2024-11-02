import React, { Component } from "react";
import "../stylesheets/ProgramContestants.scss";
import "../stylesheets/_variables.scss";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosApi";

class ProgramContestants extends Component {
  state = {
    participants: [],
  };

  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);
    axiosInstance.get(`oidol/participants/`).then((val) => {
      var participants = val.data;
      this.setState({ participants });
      console.log(participants);
    });
  };

  renderParticipants() {
    const { participants } = this.state;
    console.log(participants);
    try {
      return participants.map((participant) => (
        <div className="contestant-panel" key={participant.id}>
          <div className="contestant-photo">
            <img
              src={"https://res.cloudinary.com/dommshw6n/" + participant.image}
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
          <div className="contestant-details ">
            <div className="name">
              <h2>{participant.name}</h2>
            </div>
            <div className="course">
              <h1>{participant.course}</h1>
            </div>
            <div className="row">
              <p>{participant.description}</p>
            </div>
            <Link to={`/program/o-idol/${participant.id}`}>
              <div className="btn-wrapper">
                <button className="idol-btn">
                  {participant.name} O-IDOL VIDEO
                </button>
              </div>
            </Link>
          </div>
        </div>
      ));
    } catch (error) {
      return (
        <div>
          <p>Error fetching participants!</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container flex-col">
        <div className="header">
          <h1 id="event-title">O-Idol Contestants</h1>
          <p>
            Meet the O-Idol Participants who are ready to share their letters of
            love and light to the Ateneo community!{" "}
            <span role="img" aria-label="">
              💗 🌟
            </span>{" "}
            <br />
            <br />
            Cast a vote for your favorite O-Idol through the link below.{" "}
          </p>
          <div className="btn-wrapper">
            <button className="vote-btn">
              <a
                href=" https://bit.ly/O-IdolFanFavoriteVote"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vote
              </a>
            </button>
          </div>
        </div>
        {this.renderParticipants()}
      </div>
    );
  }
}

export default ProgramContestants;
