import React, { Component } from "react";
import PostCard from "../components/PostCard";
import Button from "../components/Button";
import "../stylesheets/App.scss";
import "../stylesheets/SearchPage.scss";
import { red } from "../components/GlobalVariables";

class Search extends Component {
  render() {
    const markdown =
      "The Freshmen Orientation Seminar is an introduction to what Ateneo life is all about. It is intended on welcoming you, the freshmen, as you enter a new chapter of your lives. Here, you will get to meet your blockmates, other freshmen, upperclassmen and faculty/administrators! Apart from this, you will be able to familiarize yourself with the school grounds, rules, and even some trivia and history about the school.\n\n**Handa na ba kayong tumuloy sa Ateneo?**";
    const markdown2 =
      "The Freshmen Orientation Seminar **is an introduction to what** Ateneo life is all about.";
    return (
      <div className="search-container">
        <div className="search-header">
          <h1>Search</h1>
          <form>
            <input name="search" type="text" placeholder="Search anything" />
            <div id="search-button-div">
              <div id="search-button-desktop">
                <Button
                  id="search-button"
                  backgroundColor={red}
                  buttonText="SEARCH"
                />
              </div>
              <button id="search-button-mobile" />
            </div>
          </form>
        </div>
        <div className="search-cards-container">
          <PostCard title="Intro to OrSem" post={markdown} />
          <PostCard title="Intro to OrSem" post={markdown2} />
          <PostCard title="Intro to OrSem" post={markdown} />
          <PostCard title="Intro to OrSem" post={markdown2} />
          <PostCard title="Intro to OrSem" post={markdown} />
        </div>

        <nav className="search-nav">
          <ul className="search-pagination">
            {/* <li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li className="active"><a href="#">4</a></li>
						<li><a href="#">5</a></li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Search;
