import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const Card = ({
  thumbnail,
  title,
  description,
  author,
  category,
  color,
  link,
}) => {
  const truncatedDescription = truncateText(description, 100);
  return (
    <Link
      to={link}
      className="flex flex-col border-2 border-[#000000] border-opacity-[0.08] mb-4 sm:!mx-4 !mx-auto w-full md:w-96 rounded-xl overflow-hidden duration-300 hover:-translate-y-2 transition ease-out hover:opacity-90 hover:shadow-lg h-[28rem]"
    >
      <div className="relative w-full h-48">
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg bg-[#000000]"
        />
      </div>
      <div className="flex flex-col flex-grow p-5">
        <p
          style={{ color: color }}
          className="text-sm w-fit mt-4 mb-2 font-medium tracking-tight uppercase"
        >
          {category}
        </p>
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-3 text-opacity-90 text-[#000000] tracking-tight">
            {title}
          </h2>
          <div className="flex">
            <Markdown className="text-sm max-h-52 mb-7 text-[#000000] text-opacity-80">
              {truncatedDescription}
            </Markdown>
          </div>
        </div>
        <div className="mt-auto">
          <span className="text-sm text-[#000000] text-opacity-40 uppercase font-medium">
            {author}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
