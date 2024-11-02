import React, { Component } from "react";
import PostCard from "../components/PostCard";
// import Pagination from "../components/Pagination";
import "../stylesheets/App.scss";
import "../stylesheets/SearchPage.scss";
import "../stylesheets/Program.scss";
import axiosInstance from "../axiosApi";
import { dayColorPalette } from "../components/GlobalVariables";
// import PaginationButton from '../components/PaginationButton';
import { format } from "date-fns";
class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axiosInstance.get(`/days/${this.props.match.params.id}/`).then((val) => {
      val.data.posts.sort((a, b) =>
        a.time_to_publish < b.time_to_publish ? 1 : -1,
      );

      this.setState({
        day: val.data,
      });
    });
    // .catch(
    // 	(error) => {
    // 	  window.location.href = '/';
    // 	}
    // )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axiosInstance
        .get(`/days/${this.props.match.params.id}/`)
        .then((val) => {
          this.setState({
            day: val.data,
          });
        })
        .catch(() => {
          this.setState({
            day: {},
          });
        });
    }
  }

  render() {
    return (
      <div className="program-container">
        <div
          className="program-header"
          style={{ background: dayColorPalette[this.props.match.params.id] }}
        >
          {/* <h1>Day {this.props.match.params.id}</h1> */}
          <h1>Schedule</h1>
        </div>
        <div className="search-cards-container">
          {this.state.day.posts &&
            this.state.day.posts.map((val, index) => {
              const date = format(
                new Date(this.state.day.date + " " + val.time_to_publish),
                "MMMM dd | h:mm a",
              );
              return (
                <PostCard
                  key={index}
                  title={val.title}
                  post={val.post_content}
                  date={date}
                  dayId={this.state.day.day}
                  slug={val.slug}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Program;
