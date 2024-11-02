// Category.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosApi";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import { blogposts, categoryColors } from "./BlogPosts";
import "../stylesheets/Category.scss";

import butterfly from "../assets/10 Category/butterfly.webp";
import person from "../assets/10 Category/orange-person.webp";

const Category = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const currentCategory = categories.find((cat) => cat.id === parseInt(id));
  const otherCategories = categories.filter((cat) => cat.id !== parseInt(id));

  useEffect(
    function initializeCategoriesAndPosts() {
      axiosInstance.get(`/journals/categories`).then((response) => {
        setCategories(response?.data);
      });

      axiosInstance.get("/journals/articles").then((response) => {
        setPosts(
          response?.data.filter((post) => post.category.id === parseInt(id))
        );
      });
    },
    [id]
  );
  console.log(id);

  return (
    <>
      <section className="pt-40 p-10 bg-primaryWhite relative overflow-hidden">
        <div className="relative z-[5] max-w-7xl mx-auto my-0">
          <h1
            className="text-6xl font-black p-6 text-center uppercase"
            style={{ color: categoryColors[currentCategory?.id] || "#000" }}
          >
            {currentCategory?.name} Posts
          </h1>
          <div className="flex flex-wrap justify-center">
            {posts.map((article) => (
              <div key={article?.id}>
                <Card
                  thumbnail={
                    "https://res.cloudinary.com/dwsxynzjg/" +
                    article?.article_img
                  }
                  title={article?.title}
                  category={article?.category?.name}
                  description={article?.content}
                  author={article?.authors[0]?.name}
                  date={article?.date_published}
                  color={categoryColors[article?.category?.id] || "#000"}
                  link={`/journals/${article?.id}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-start flex-wrap gap-4">
            {otherCategories.map((cat, idx) => (
              <Link
                to={`/journals/category/${cat?.id}`}
                key={idx}
                className="category-button"
              >
                <button
                  className="text-primaryWhite py-2 px-4 rounded-full transition duration-300 uppercase hover:scale-105"
                  style={{ backgroundColor: categoryColors[cat?.id] || "#000" }}
                >
                  {cat?.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="butterfly-container">
          <img src={butterfly} alt="Butterfly" className="butterfly-image" />
        </div>
        <div className="person-container">
          <img src={person} alt="Person" className="person-image" />
        </div>
      </section>
    </>
  );
};

export default Category;
