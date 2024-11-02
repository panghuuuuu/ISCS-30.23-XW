import React, { Component } from "react";
import "../stylesheets/Concern.scss";
import unread_icon from "../assets/07 Concern/unread.png";
import response_icon from "../assets/07 Concern/response.png";
import ConcernModal from "../components/ConcernModal";
import axiosInstance from "../axiosApi";

class Concern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerndata: [],
      showModal: false,
      user: localStorage.getItem("email"),
      accessToken: localStorage.getItem("access_token"),
      modalindex: 0,
    };
    this._onConcernClick = this._onConcernClick.bind(this);
    this._onClose = this._onClose.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onConcernClick(concern) {
    this.setState({
      showModal: true,
      modalindex: concern,
    });
  }

  _onClose() {
    this.setState({
      showModal: false,
    });
  }

  _onSubmit() {
    const title = document.getElementById("concern-select").value;
    const message = document.getElementById("concern-message").value;
    // const created_on = new Date();
    if (title === "" || message === "") {
      return alert("Please enter a valid concern type and a message.");
    }
    const concern = {
      user: this.state.user,
      created_on: new Date(),
      title: document.getElementById("concern-select").value,
      message: document.getElementById("concern-message").value,
      response: "",
    };

    axiosInstance
      .post("/concernportal/concerns/", concern)
      .then((val) => {
        console.log(val);
        alert("Your concern has been sent!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Error happened while sending your form. :: " + err);
        window.location.reload();
      });
  }

  componentDidMount() {
    axiosInstance
      .get(`/concernportal/user-concerns/${this.state.user}/`)
      .then((val) => {
        this.setState({
          concerndata: val.data.concerns,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          concerndata: [],
          error: true,
        });
      });
  }
  render() {
    return (
      <div className="concern-container">
        <div
          className="concern-form"
          id="concernForm"
          onSubmit={this._onSubmit}
        >
          <form className="concern-form-text">
            <h1>Freshie Concern Portal</h1>
            <h4>
              Got specific concerns? Answer the form below to reach the OrSem
              team!
            </h4>
            <select id="concern-select" className="concern-select">
              <option value="" disabled selected>
                Concern Type
              </option>
              <option value="Block List / Block Generator / Block Sessions Concerns">
                Block List / Block Generator / Block Sessions Concerns
              </option>
              <option value="Schedule / Program Concerns">
                Schedule / Program Concerns
              </option>
              <option value="Onsite Sessions Concerns">
                Onsite Sessions Concerns
              </option>
              <option value="Registration Concerns">
                Registration Concerns
              </option>
              <option value="Website Concerns">Website Concerns</option>
              <option value="Contacting LS Admin Concerns">
                Contacting LS Admin Concerns
              </option>
              <option value="O-Laro Concerns">O-Laro Concerns</option>
              <option value="O-Idol Concerns">O-Idol Concerns</option>
              <option value="Merchandise Concerns">Merchandise Concerns</option>
              <option value="Others">Others</option>
            </select>
            <textarea
              id="concern-message"
              className="concern-message"
              placeholder="Message"
            ></textarea>
            <center>
              <button className="concern-btn" type="submit">
                SEND
              </button>
            </center>
          </form>
        </div>
        {this.state.concerndata.length !== 0 ? (
          <div className="submitted-section">
            <div className="submitted-header">
              <h1>Submitted Concerns</h1>
              <div className="legend-container">
                <div className="legend-line">
                  <img src={response_icon} className="response-icon" alt="" />
                  <h5>response from OrSem team</h5>
                </div>
                <div className="legend-line">
                  <img src={unread_icon} className="unread-icon" alt="" />
                  <h5>unread</h5>
                </div>
              </div>
            </div>
            <div className="submitted-container">
              {this.state.concerndata.map((concern, index) => (
                <button
                  className="submitted-concern"
                  onClick={() => this._onConcernClick(index)}
                  key={concern.created_on}
                >
                  <p className="date">{concern.created_on}</p>
                  <p className="message">
                    {concern.title} - {concern.message}
                  </p>
                  {concern.response ? (
                    <img src={response_icon} className="response_icon" alt="" />
                  ) : null}
                </button>
              ))}
              {this.state.showModal ? (
                <ConcernModal
                  onClose={this._onClose}
                  data={this.state.concerndata}
                  index={this.state.modalindex}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Concern;
