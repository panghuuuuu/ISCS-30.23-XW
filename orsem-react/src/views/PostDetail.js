import React, { Component } from "react";
import "../stylesheets/App.scss";
import "../stylesheets/PostDetail.scss";
import BackButton from "../assets/03 Program - 00 Days Back Button.png";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { dayColorPalette } from "../components/GlobalVariables";
import ReactPlayer from "react-player";
import axiosInstance from "../axiosApi";
class PostDetail extends Component {
  constuctor(props) {
    this.setState({});
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // console.log( "Slug:", this.props.match.params.slug );
    axiosInstance.get(`/posts/${this.props.match.params.slug}/`).then((val) => {
      this.setState({
        post: val.data,
      });
      console.log(val);
    });
    // .catch(
    // 	(error) => {
    // 	  window.location.href = '/home';
    // 	}
    // )
  }
  render() {
    const dayId = this.props.match.params.id;

    return (
      <div className="post-detail-container">
        <div
          className="post-detail-header"
          style={{ background: dayColorPalette[dayId] }}
        >
          <Link to={`/program/day-${dayId}`}>
            <img
              src={BackButton}
              className="post-back-button"
              alt="Back button"
            />
          </Link>

          <div className="post-details">
            <h1>{this.state && this.state.post.title}</h1>
            <ReactMarkdown
              source={this.state && this.state.post.post_content}
            />
          </div>
        </div>
        <div className="post-media-container">
          {this.state && this.state.post.post_attachment_type === "Image" && (
            <img
              className="post-media"
              src={
                "https://res.cloudinary.com/dommshw6n/" + this.state.post.media
              }
              alt=""
            />
          )}
          {this.state &&
            this.state.post.post_attachment_type === "Facebook" && (
              <ReactPlayer url={this.state.post.link} controls />
            )}
          {this.state && this.state.post.post_attachment_type === "Google" && (
            <iframe
              width="1280"
              height="720"
              src={this.state.post.link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded"
            />
          )}
        </div>
      </div>
    );
  }
}

export default PostDetail;
