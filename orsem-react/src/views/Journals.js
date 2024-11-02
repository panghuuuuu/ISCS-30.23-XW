import React, { useState, useEffect } from "react";
import Card from "./Card";
import { categoryColors } from "./BlogPosts";
import "../stylesheets/Journals.scss";
import axiosInstance from "../axiosApi.js";

import outline1 from "../assets/09 Journals/outline-1.webp";
import outline2 from "../assets/09 Journals/outline-2.webp";
import outline3 from "../assets/09 Journals/outline-3.webp";
import butterfly1 from "../assets/09 Journals/pink-butterfly.webp";
import butterfly2 from "../assets/09 Journals/purple-butterfly.webp";
import wave1 from "../assets/09 Journals/wave-1.webp";
import wave2 from "../assets/09 Journals/wave-2.webp";

const Journals = () => {
  const [showAll, setShowAll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleReadMore = () => {
    setShowAll(true);
  };

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const getCategoryColor = (categoryName) => {
    const index = categories.findIndex((cat) => cat.name === categoryName);
    return categoryColors[index % categoryColors.length];
  };

  useEffect(() => {
    axiosInstance.get("/journals/categories").then((response) => {
      setCategories(response?.data);
    });

    axiosInstance.get("/journals/articles").then((response) => {
      setPosts(response?.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(
        posts.filter((post) => post.category.id === selectedCategory)
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-4 md:pb-[3rem] p-10 bg-[#E9EDFD] relative overflow-hidden text-center">
        <div className="freshie-journals text-5xl mt-4 md:mt-12 md:text-8xl font-extrabold leading-2 text-wrap">
          <span className="text-primaryPink uppercase">Freshie</span>
          <br />
          <span className="text-primaryBlue uppercase">Journals</span>
        </div>

        {/* Category buttons */}
        <div className="flex mx-auto max-w-screen-md justify-center my-6 sm:mt-6 flex-wrap z-10 relative">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`m-2 text-primaryWhite pt-2 pb-1 px-3 sm:pt-3 sm:pb-2 sm:px-5 text-[10px] sm:text-sm font-medium rounded-full transition duration-300 uppercase hover:scale-105 ${selectedCategory === cat.id ? "bg-opacity-70" : ""}`}
              style={{ backgroundColor: getCategoryColor(cat.name) }}
              onClick={() => handleCategoryClick(cat.id)}
            >
              {cat?.name}
            </button>
          ))}
        </div>

        <div className="combined-section">
          <div className="butterfly1-container">
            <img src={butterfly1} alt="Butterfly" className="butterfly-image" />
          </div>
          <div className="butterfly2-container">
            <img src={butterfly2} alt="Butterfly" className="butterfly-image" />
          </div>
          <div className="outline1-container">
            <img src={outline1} alt="Outline" className="outline-image" />
          </div>
          <div className="outline2-container">
            <img src={outline2} alt="Outline" className="outline-image" />
          </div>
          <div className="outline3-container">
            <img src={outline3} alt="Outline" className="outline-image" />
          </div>
          <div className="wave1-container">
            <img src={wave1} alt="Wave" className="wave-image" />
          </div>
          <div className="wave2-container">
            <img src={wave2} alt="Wave" className="wave-image" />
          </div>
        </div>
      </section>

      <section className="bg-[#fffaed] px-4 lg:px-12 my-20">
        <h1 className="text-primaryViolet text-3xl md:text-5xl mb-2 sm:mb-4 text-center uppercase">
          Recent Posts
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center">
          {filteredPosts.map((article) => (
            <Card
              thumbnail={
                "https://res.cloudinary.com/dwsxynzjg/" + article?.thumbnail_img
              }
              title={article.title}
              category={article?.category?.name}
              description={article.content}
              author={article?.authors.map((author) => author.name).join(", ")}
              date={article?.date_published}
              color={getCategoryColor(article?.category?.name)}
              link={`/journals/${article.id}`}
              key={article.id}
            />
          ))}
        </div>

        {/* Read more button */}
        {!showAll && (
          <div className="text-center mt-6">
            <button
              className="bg-primaryOrange px-8 text-lg sm:text-base text-[#FFFFFF] pt-3 pb-2 rounded-full font-medium items-center justify-center hover:bg-[#d1802e] hover:text-[#f4f4f4] hover:transition hover:ease-in-out"
              onClick={handleReadMore}
            >
              Read More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Journals;
