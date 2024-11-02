import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import "../stylesheets/OIdolIndividual.scss";
import "../stylesheets/_variables.scss";
// import map from '../assets/Map/map.png'

class Contestants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: {},
    };
  }

  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
              to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    axiosInstance
      .get(`oidol/participants/${this.props.match.params.id}/`)
      .then((val) => {
        this.setState({
          id: val.data,
        });
      });
  };
  render() {
    return (
      <div className="container flex-col">
        <div className="button">
          <a href="/program/o-idol/">
            <input type="button" className="back" value="< BACK"></input>
          </a>
        </div>

        <div className="individual-panel">
          <div className="individual-photo">
            <img
              src={
                "https://res.cloudinary.com/dommshw6n/" + this.state.id.image
              }
              alt=""
            ></img>
          </div>
          <div className="individual-details ">
            <div className="row">
              <div className="user">
                <h1>{this.state.id.name}</h1>
                <h3>{this.state.id.course}</h3>
              </div>
            </div>
            <div className="row">
              <p>{this.state.id.description}</p>
            </div>
          </div>
        </div>

        <div className="individual-video">
          <iframe
            title="indivVideo"
            src={this.state.id.video}
            width="960"
            height="540"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="loc-wrapper">
          <div className="loc-row flex-col">
            <button
              className="accordion"
              style={{ backgroundColor: "#FAA400" }}
            >
              <span class="tab"></span>Question<div className="right">+</div>
            </button>
            <div className="panel">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contestants;
