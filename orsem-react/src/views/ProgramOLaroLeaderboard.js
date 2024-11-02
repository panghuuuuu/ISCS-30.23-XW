import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import "../stylesheets/OLaroTracker.scss";
import "../stylesheets/_variables.scss";
// import moment from "moment";
import leaderboard from "../assets/leaderboard.json";

class OLaroLeaderboard extends Component {
  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);
    this.getScores();
    this.getCurrentUser();
    // this.getCurrentGames();
    this.getCurrentDay();
  };

  constructor(props) {
    super(props);
    this.state = {
      scores: null,
      user: null,
      idNumber: localStorage.getItem("id_number"),
      games: [],
      modal: false,
      selectedGame: null,
      selectedDay: null,
      day: null,
      days: [],
    };
  }

  getScores = () => {
    return axiosInstance
      .get(`/blockinfo/scores/`)
      .then((val) => {
        this.setState({
          scores: val.data,
        });
      })
      .catch((e) => {
        this.setState({
          blockInfo: {},
          error: true,
        });
      });
  };

  getCurrentUser = () => {
    return axiosInstance
      .get(`/blockinfo/students/${this.state.idNumber}/`)
      .then((val) => {
        this.setState({
          user: val.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // getCurrentGames = () => {
  //   return axiosInstance.get(`/olaro/games/`).then((val) => {
  //     this.setState({
  //       games: val.data,
  //     });
  //   });
  // };

  getCurrentDay = () => {
    return axiosInstance.get(`/days/`).then((val) => {
      this.setState({
        days: val.data.reverse(),
      });
    });
  };

  render() {
    const today = new Date();
    const currBlock = this.state.user?.block_info;

    return (
      <div className="tracker-container flex-col">
        <div className="header">
          <h2 id="event-title">Leaderboard</h2>
        </div>
        <div className="scores-container">
          {leaderboard.leaderboard.map((block, index) => {
            return (
              <div className="block-score" key={index}>
                <span>{index + 1}</span>
                <div className="score-details">
                  <p>Block {block.block}</p>
                  <p className="points">{block.points} points</p>
                </div>
              </div>
            );
          })}
          {currBlock?.block && (
            <div className="featured-block">
              <h2>Block {currBlock?.block || "XX"}</h2>
              <div className="featured-details">
                <span>
                  {currBlock?.score.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  }) || "00"}
                </span>
              </div>
            </div>
          )}
          {/* {!currBlock?.block && (
            <div className="featured-block">
              <h2>Block Score</h2>
              <div className="featured-details">
                <p>Login using your OBF to display your block's score...</p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

export default OLaroLeaderboard;
