import React, { Component } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import SLSVideos from "../assets/SLSVideos";
import "../stylesheets/App.scss";
import "../stylesheets/SearchPage.scss";
import "../stylesheets/DefaultProgram.scss";

class SLS extends Component {
  render() {
    return (
      <div className="program-container">
        <div className="admin-header def-header !bg-primaryBlue !uppercase !mt-2">
          <h1>Student Life Series</h1>
        </div>
        <div className="videos flex flex-col lg:flex-col gap-4 p-4 sm:p-6">
          {SLSVideos.map((video, index) => (
            <div key={index} className="flex flex-col lg:flex-row mb-4">
              <div className="video mr-4 flex flex-1 w-full">
                <YoutubeEmbed embedId={video.embedId} />
              </div>
              <div className="video-details flex flex-col flex-1 md:!my-auto gap-4 px-6 !mt-4">
                <h2 className="text-2xl font-bold text-colors-primaryOrange">
                  {video.title}
                </h2>
                <p className="text-base">{video.description}</p>
                <p className="text-base">{video.editors}</p>{" "}
                <p className="text-base">{video.spiel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SLS;
