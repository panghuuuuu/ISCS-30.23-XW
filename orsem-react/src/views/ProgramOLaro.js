import React, { Component } from "react";
import "../stylesheets/OLaroTracker.scss";
import "../stylesheets/_variables.scss";
import Laro from "../assets/laro.js";
class OLaroTracker extends Component {
  // componentDidMount = () => {
  //   // using this syntax auto-binds 'this'
  //   window.scrollTo(0, 0);
  //   this.getScores();
  //   this.getCurrentUser();
  //   // this.getCurrentGames();
  //   this.getCurrentDay();
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     scores: null,
  //     user: null,
  //     idNumber: localStorage.getItem("id_number"),
  //     games: [],
  //     modal: false,
  //     selectedGame: null,
  //     selectedDay: null,
  //     day: null,
  //     days: [],
  //   };
  // }

  // getScores = () => {
  //   return axiosInstance
  //     .get(`/blockinfo/scores/`)
  //     .then((val) => {
  //       this.setState({
  //         scores: val.data,
  //       });
  //     })
  //     .catch((e) => {
  //       this.setState({
  //         blockInfo: {},
  //         error: true,
  //       });
  //     });
  // };

  // getCurrentUser = () => {
  //   return axiosInstance
  //     .get(`/blockinfo/students/${this.state.idNumber}/`)
  //     .then((val) => {
  //       this.setState({
  //         user: val.data,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // getCurrentGames = () => {
  //   return axiosInstance.get(`/olaro/games/`).then((val) => {
  //     this.setState({
  //       games: val.data,
  //     });
  //   });
  // };

  // getCurrentDay = () => {
  //   return axiosInstance.get(`/days/`).then((val) => {
  //     this.setState({
  //       days: val.data.reverse(),
  //     });
  //   });
  // };

  render() {
    //   const today = new Date();
    //   const currBlock = this.state.user?.block_info;
    const laroList = [];
    Object.entries(Laro).forEach(([day, dayData]) => {
      laroList.push(
        <div className="game-list" key={day}>
          <div className="day-container">{day}</div>
          <div className="games-container">
            {Object.entries(dayData).map(([gameTitle, gameData]) => (
              <div className="indiv-game" key={gameTitle}>
                {gameData.link ? (
                  <div>
                    <div className="game-link">
                      <a
                        href={gameData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="game-image">
                          <img src={gameData.image} alt="Game" />
                        </div>

                        <div className="game-details">
                          <h4 className="game-title">{gameTitle}</h4>
                          <div className="game-pts">{gameData.points}</div>
                        </div>
                        <div className="game-text">
                          <div className="game-desc">
                            {gameData.description}
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="game-mechanics">
                      <ol>
                        {gameData.mechanics.map((mechanic, index) => (
                          <li key={index}>{mechanic}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="game-link">
                      <div className="game-image">
                        <img src={gameData.image} alt="Game" />
                      </div>
                      <div className="game-details">
                        <h4 className="game-title">{gameTitle}</h4>
                        <div className="game-pts">{gameData.points}</div>
                      </div>
                      <div className="game-text">
                        <div className="game-desc">{gameData.description}</div>
                      </div>
                    </div>
                    <div className="game-mechanics">
                      <ol>
                        {gameData.mechanics.map((mechanic, index) => (
                          <li key={index}>{mechanic}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    });

    return (
      <div className="tracker-container flex-col">
        <div className="header">
          <h1 id="event-title">O-Laro Games</h1>

          <p>
            O-Laro is an interactive game-and-gimmick series that allows blocks
            to foster camaraderie through healthy competition. Click on a game
            to register!
          </p>
          <h2 id="event-title">AUGUST</h2>
        </div>
        {/* {this.state.days &&
          this.state.days.map((day, index) => {
            let dayIndex = index;
            return (
              <div className="featured-games" key={index} id={index}>
                <div className="component-container">
                  <div className="date-container">
                    <div className="date-box">
                      <h3 className="date-text">02</h3>
                    </div>
                    <div className="image-container">
                      <img src="#" alt=""></img>
                    </div>
                    <h3 className="game-title">game title (game points)</h3>
                    <p className="game-text">Loren Ipsum</p>
                  </div>
                </div>
                {day.games &&
                  day.games?.map((game, index) => {
                    return (
                      <div
                        className="game"
                        key={index}
                        onClick={(e) => {
                          this.setState({ selectedDay: dayIndex });
                          this.setState({ selectedGame: index });
                          this.setState({ modal: !this.state.modal });
                        }}
                      >
                        <div>
                          <img src="#" alt=""></img>
                        </div>
                        <h3 className="date-text">{game.title}</h3>
                        <p className="date-text">{game.points} points</p>
                      </div>
                    );
                  })}
              </div>
            );
          })} */}
        {/* {currBlock?.block && (
          <div className="featured-block">
            <h2>Block {currBlock?.block || "XX"}</h2>
            <div className="featured-details">
              <span>
                {currBlock?.score.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                }) || "00"}
              </span>
              <p className="score-deets">
                points as of {moment(today).format("MMMM D hh:mm A")}
              </p>
            </div>
          </div>
        )} */}
        {/* {!currBlock?.block && (
          <div className="featured-block">
            <h2>Block Score</h2>
            <div className="featured-details">
              <p>Login using your OBF to display your block's score...</p>
            </div>
          </div>
        )} */}
        <div className="laro-list">{laroList}</div>
        <div>
          <button
            className="leaderboard-button"
            onClick={() => {
              window.location.href = "/program/o-laro/leaderboard";
            }}
          >
            <p className="leaderboard-text">Leaderboard</p>
          </button>
        </div>
      </div>
    );
  }
}
export default OLaroTracker;
