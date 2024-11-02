import React, { Component } from "react";
import "../stylesheets/event.scss";
import ReactPlayer from "react-player";

class Event extends Component {
  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="event flex-col">
        <div className="header">
          <h1 id="event-title">Event Title</h1>
          <h2 id="event-date">August XX</h2>
        </div>
        <div className="fb-container">
          <ReactPlayer
            id="fb-live"
            url="https://fb.watch/7jtMlu32ey/"
            controls
          />
        </div>
        <p id="event-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
          ultricies mi eget mauris. Bibendum ut tristique et egestas. Volutpat
          odio facilisis mauris sit amet massa vitae tortor condimentum. Mauris
          augue neque gravida in fermentum. Sed lectus vestibulum mattis
          ullamcorper velit. Vestibulum lorem sed risus ultricies tristique.
          Massa tempor nec feugiat nisl. Facilisi nullam vehicula ipsum a arcu
          cursus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc.
        </p>
      </div>
    );
  }
}

export default Event;
