import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { categoryColors } from "./BlogPosts";
import "../stylesheets/BlogPost.scss";
import axiosInstance from "../axiosApi";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    axiosInstance.get(`/journals/articles/${id}`).then((response) => {
      setPost(response?.data);
    });
  }, [id]);

  const getCategoryColor = (categoryName) => {
    const categories = [
      "Welcome Messages",
      "Student Life",
      "Getting to Know Your New Home",
      "OrSem Experience",
      "Block Bonding",
    ];
    const index = categories.findIndex((cat) => cat === categoryName);
    return categoryColors[index % categoryColors.length];
  };

  if (!post) return <div>Loading...</div>;

  const categoryColor = getCategoryColor(post?.category?.name);

  const extraImages = [
    post?.extra_img1,
    post?.extra_img2,
    post?.extra_img3,
    post?.extra_img1,
    post?.extra_img2,
    post?.extra_img3,
  ].filter((img) => img);

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="px-4 sm:px-0 pt-40 pb-16 bg-[#FFFAED]">
      <div className="max-w-4xl my-0 mx-auto">
        <div className="journals-button mb-8">
          <Link to={`/journals`}>
            <button className="text-primaryBlue hover:text-[#2028a9] font-medium text-sm tracking-tight flex items-center">
              <svg
                className="mr-2 mb-0.5"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Go Back
            </button>
          </Link>
        </div>
        <div className="mb-6">
          <p
            className="border-0 text-sm md:text-base font-medium mb-3 uppercase"
            style={{ color: categoryColor }}
          >
            {post?.category?.name}
          </p>
          <h2 className="text-3xl md:text-5xl m-0 mb-4 text-[#000000] tracking-tight">
            {post?.title}
          </h2>
          <p className="text-base md:text-lg m-0 text-[#000000] text-opacity-60 font-medium tracking-tight">
            by {post?.authors.map((author) => author.name).join(", ")}
          </p>
        </div>
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{ paddingTop: `calc(367 / 798 * 100%)` }}
        >
          {post?.article_img && (
            <img
              src={"https://res.cloudinary.com/dwsxynzjg/" + post?.article_img}
              alt={`Thumbnail for ${post?.title}`}
              className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
            />
          )}
          <div
            className="absolute bottom-3 left-3 text-primaryWhite text-left p-2.5 rounded-b-3xl box-border z-[2]"
            style={{ width: "calc(100% - 20px)" }}
          ></div>
        </div>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="pt-8 pb-6 text-base md:text-lg text-justify main-content"
        >
          {post?.content}
        </Markdown>
        {extraImages.length > 0 && (
          <div className="relative">
            <Slider ref={arrowRef} {...settings}>
              {extraImages.map((image, index) => (
                <div
                  key={index}
                  className="h-40 mx-2 p-2 rounded-md cursor-pointer relative overflow-hidden extra-image"
                >
                  <img
                    src={"https://res.cloudinary.com/dwsxynzjg/" + image}
                    alt={`Extra ${index}`}
                    className="w-full h-full object-cover transition-transform duration-400 ease-in-out"
                  />
                </div>
              ))}
            </Slider>
            <div className="buttons-container">
              <div
                onClick={() => arrowRef.current.slickPrev()}
                className="w-10 h-10 bg-white bg-opacity-10 border-none absolute -left-4 inset-x-0 top-45 cursor-pointer"
              >
                <IoIosArrowBack />
              </div>
              <div
                onClick={() => arrowRef.current.slickNext()}
                className="w-10 h-10 bg-white bg-opacity-10 border-none absolute -right-11 top-45 cursor-pointer"
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPost;
