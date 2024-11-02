import React from "react";
import "../stylesheets/PostCard.scss";
import "../stylesheets/App.scss";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { dayColorPalette, blue } from "../components/GlobalVariables";
import styled from "styled-components";

const PostCardContent = styled.div`
  min-height: 55%;
  background-color: #fff3e9;
  padding: 1rem;
  color: ${blue};

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 10px;
    line-height: 11px;
  }

  // &:hover {
  // 	background: ${({ mainColor }) => mainColor};
  // 	color: white;
  // }

  @media screen and (min-width: 768px) {
    width: 55%;
    height: 100%;
    padding: 2.5rem;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      line-height: 17px;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const PostCard = (props) => {
  return (
    <Link to={`/program/day-${props.dayId}/${props.slug}`}>
      <div className="post-card-container">
        <div className="post-card-image" />
        <PostCardContent mainColor={dayColorPalette[props.dayId]}>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <div className="og-post">
            <ReactMarkdown source={props.post} />
          </div>
          <div className="short-post">
            <ReactMarkdown source={props.short_post} />
          </div>
        </PostCardContent>
      </div>
    </Link>
  );
};

export default PostCard;
