import React, { Component } from "react";
import "../stylesheets/faqs.scss";
import ReactMarkdown from "react-markdown";

class Faqcordion extends Component {
  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel) {
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        }

        let plusMinusIcon = this.getElementsByClassName("right")[0];
        if (plusMinusIcon) {
          if (plusMinusIcon.innerText === "+") {
            plusMinusIcon.innerText = "-";
          } else {
            plusMinusIcon.innerText = "+";
          }
        }
      });
    }
  };
  render() {
    return (
      <div>
        <button
          className="accordion d-flex justify-content-between align-items-center"
          style={this.props.styles}
        >
          <div className="left">+</div>
          <ReactMarkdown>{this.props.question}</ReactMarkdown>
          <div className="right">+</div>
        </button>
        <div className="panel">
          <ReactMarkdown>{this.props.answer}</ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default Faqcordion;
