import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./stylesheets/App.scss";
import { clarity } from "react-microsoft-clarity";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import axiosInstance from "./axiosApi";

// views/pages
// Lazy load components from the ./views/ directory
const Login = lazy(() => import("./views/Login"));
const Home = lazy(() => import("./views/Home"));
const Search = lazy(() => import("./views/Search"));
const ComingSoon = lazy(() => import("./views/ComingSoon"));
const Program = lazy(() => import("./views/Program"));
const ProgramOLaro = lazy(() => import("./views/ProgramOLaro"));
const ProgramOLaroLeaderboard = lazy(
  () => import("./views/ProgramOLaroLeaderboard")
);
const ProgramContestants = lazy(() => import("./views/ProgramContestants"));
const PostDetail = lazy(() => import("./views/PostDetail"));
const Sponsors = lazy(() => import("./views/Sponsors"));
const Faq = lazy(() => import("./views/Faq"));
const Merchandise = lazy(() => import("./views/Merchandise"));
const Contact = lazy(() => import("./views/Contact"));
const Block = lazy(() => import("./views/Block"));
const Map = lazy(() => import("./views/Map"));
const Event = lazy(() => import("./views/Event"));
const VirtualId = lazy(() => import("./views/VirtualId"));
const Concern = lazy(() => import("./views/Concern"));
const SLS = lazy(() => import("./views/SLS"));
const AdminTalks = lazy(() => import("./views/AdminTalks"));
const History = lazy(() => import("./views/History"));
const Journals = lazy(() => import("./views/Journals"));
const BlogPost = lazy(() => import("./views/BlogPost"));
const Category = lazy(() => import("./views/Category"));
const EntryPass = lazy(() => import("./views/EntryPass"));

const App = () => {
  clarity.init("ngefwwkr91");
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const location = useLocation();
  const showFooter = !["/", "/block"].includes(location.pathname);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const access = query.get("access");
    const refresh = query.get("refresh");
    axiosInstance.defaults.headers["Authorization"] = "JWT " + access;
    const email = query.get("email");
    const id_number = query.get("id");
    if (access && refresh) {
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("email", email);
      localStorage.setItem("id_number", id_number);
      console.log(email);

      axiosInstance.get(`/blockinfo/students/${id_number}`).then((val) => {
        const data = val?.data;
        localStorage.setItem("name", data?.name);
        localStorage.setItem("course", data?.course);
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        localStorage.setItem("email", email);
        localStorage.setItem("block", data?.block_info?.block);
        localStorage.setItem("school", data?.school);
        window.location.href = "/home";
      });
    }
  }, []);

  const handleCloseModal = () => {
    setIsPrivacyPolicyOpen(false);
  };

  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
      {showFooter && <Footer />}
    </div>
  );
};

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/comingsoon" element={<ComingSoon />} />
    <Route exact path="/program/day-:id" element={<Program />} />
    <Route exact path="/program/o-laro" element={<ProgramOLaro />} />
    <Route
      exact
      path="/program/o-laro/leaderboard"
      element={<ProgramOLaroLeaderboard />}
    />
    <Route exact path="/program/o-idol" element={<ProgramContestants />} />
    {/* <Route exact path='/program/o-idol/:id' element={<Contestants />} /> */}
    <Route exact path="/program/day-:id/:slug" element={<PostDetail />} />
    <Route exact path="/sponsor/:slug" element={<Sponsors />} />
    <Route exact path="/faq" element={<Faq />} />
    <Route exact path="/merch" element={<Merchandise />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/block" element={<Block />} />
    <Route exact path="/map" element={<Map />} />
    <Route exact path="/event" element={<Event />} />
    {/* <Route exact path="/virtual-id" element={<VirtualId />} /> */}
    <Route exact path="/concern" element={<Concern />} />
    <Route exact path="/program/SLS" element={<SLS />} />
    <Route exact path="/program/admintalks" element={<AdminTalks />} />
    <Route exact path="/history" element={<History />} />
    <Route exact path="/journals" element={<Journals />} />
    <Route exact path="/journals/category/:id" element={<Category />} />
    <Route exact path="/journals/:id" element={<BlogPost />} />
    {/* <Route exact path="/qrscan/:id" element={StudentEntry} />
    <Route exact path="/entry-pass/" element={EntryPass} /> */}
    <Route exact path="/entry-pass" element={<EntryPass />} />
  </Routes>
);

export default App;
