import React, { Component } from "react";
import "../stylesheets/ConcernModal.scss";
import "../stylesheets/App.scss";
import response_icon from "../assets/07 Concern/response.png";

class ConcernModal extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal-content">
          <span className="close" onClick={this.props.onClose}>
            &times;
          </span>
          <div className="concern-content">
            <img src={response_icon} className="response-icon" alt="" />
            <div className="concern-submission">
              <h1>{this.props.data[this.props.index].title}</h1>
              <p>{this.props.data[this.props.index].message}</p>
            </div>
          </div>
          {this.props.data[this.props.index].response ? (
            <div className="response">
              <h3>Response from OrSem team:</h3>
              <p>{this.props.data[this.props.index].response}</p>
            </div>
          ) : (
            <div className="response">
              <h3>No response yet from the OrSem team</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ConcernModal;
