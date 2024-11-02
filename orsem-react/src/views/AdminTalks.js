import React, { Component } from "react";
import AdminVideos from "../assets/AdminVideos";
import "../stylesheets/App.scss";
import "../stylesheets/SearchPage.scss";
import "../stylesheets/DefaultProgram.scss";

class AdminTalks extends Component {
  renderVideos() {
    return (
      <div className="program-container">
        <div className="admin-header def-header !bg-primaryBlue !uppercase !mt-2">
          <h1>Admin Talks</h1>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-[72px] mx-2">
          {AdminVideos.map((video, index) => (
            <div
              key={index}
              className="video-item bg-[#FFFFFF] flex flex-col p-5 rounded-xl gap-2 w-full"
            >
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                <iframe src={video.src} className="w-full h-full" />
              </div>
              <h3 className="text-base mt-3 font-semibold text-primaryPink">
                {video.title}
              </h3>
              <p className="text-sm font-medium text-[#000000] text-opacity-40">
                Admin Talks
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderVideos()}</div>;
  }
}

export default AdminTalks;
