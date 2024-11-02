import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../axiosApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../assets/Sponsors/ads-bg.png'

// double check spons title when adding new ads cuz i just put all
const CoPresenters = ['Almondkoka', 'Burtsbees', 'Clorox', 'Dermac', 'Face Republic', 'Gotbaked', 'Keds', 'Kotex', 'Old Spice', 'Oracare', 'Pocky', 'Richboyz', 'Sperry', 'Activations Advertising Inc. x GCash', 'Potencee', 'SMS Philippines', 'Glutaphos'];
const Minor = ['Getblued', 'Havaianas', 'Powermac', 'Converge'];
const SpecialMention = ['Cocacola', 'Del Monte: Fruity Zing', 'Luckyme', 'Thestampstudio', 'Studiopersona'];
const SpecialPartners = ['Delmontefruity', 'Doughnut', 'Mang Inasal', 'Pascual', 'Penshoppe', 'Sipplus', 'Sunnies Inc.', 'Unilab'];
const Concessionaries = ['Suncoast', 'Soviolisa Flowers', 'Dot Coffee', 'Bookwormcloset', 'Babe Formula'];

const Sponsors = () => {
  const [sponsor, setSponsor] = useState({});
  const [error, setError] = useState(null);
  const [sponsorType, setSponsorType] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    axiosInstance
      .get(`/sponsors/${slug}/`)
      .then((response) => {
        const data = response.data;
        console.log('Fetched Sponsor Data:', data);  
        setSponsor(data);
        setError(null);
        setSponsorType(getSponsorType(data.title));
      })
      .catch((error) => {
        setSponsor({});
        setError("Error fetching sponsor data.");
        console.log(error);
      });
  }, [slug]);

  const getSponsorType = (title) => {
    if (CoPresenters.includes(title)) return "CoPresenter";
    if (Minor.includes(title)) return "Minor Sponsor";
    if (SpecialMention.includes(title)) return "Special Mention";
    if (SpecialPartners.includes(title)) return "Special Partner";
    if (Concessionaries.includes(title)) return "Concessionaries";
    return "";
  };

  return (
  <div 
    className='post-detail-container bg-primaryViolet overflow-hidden'
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className='post-detail-header bg-primaryBlue relative mt-[75px] text-[#FFFFFF] w-full h-[10vh] md:h-[16vh] flex items-center mx-auto'>
      <Link to={'/home'} className='go-back-button'>
        <div className='flex items-center mt-0 ml-12 hover:text-opacity-80'>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className='text-[35px] lg:text-[20px]'
          />
          <p className='font-semibold mt-1 ml-2 text-md uppercase hidden lg:flex'>
            go back
          </p>
        </div>
      </Link>
      <div className="flex flex-col align-center justify-center p-8 md:p-10 lg:p-20">
        {sponsor && sponsor.title ? (
          <p className="font-bold text-[14px] md:text-[20px] lg:text-[38px] uppercase mt-0 md:mt-12">
            {sponsor.title}
          </p>
        ) : null}
        <p className="text-[10px] md:text-[14px] md:mt-1.5">
          {sponsorType}
        </p>
      </div>
    </div>
    <div className='post-media-container'>
      <div className="sponsor-images flex flex-wrap md:!p-10 !p-5 justify-evenly w-full space-x-8 space-y-4 md:space-y-4 lg:space-y-0">
        {sponsor && sponsor.media_1_image ? (
          <div className="post-media-wrapper">
            <img
              className="post-image max-h-[30rem] min-w-[300px] rounded-2xl"
              src={
                "https://res.cloudinary.com/dwsxynzjg/" +
                sponsor.media_1_image
              }
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        ) : null}

        {sponsor && sponsor.media_2_image ? (
          <div className="post-media-wrapper">
            <img
              className="post-image max-h-[30rem] min-w-[300px] rounded-2xl shadow-2xl"
              src={
                "https://res.cloudinary.com/dwsxynzjg/" +
                sponsor.media_2_image
              }
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        ) : null}

        {sponsor && sponsor.media_3_image ? (
          <div className="post-media-wrapper">
            <img
              className="post-image max-h-[30rem] min-w-[300px] rounded-2xl shadow-2xl"
              src={
                "https://res.cloudinary.com/dwsxynzjg/" +
                sponsor.media_3_image
              }
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        ) : null}

        {sponsor && sponsor.media_4_image ? (
          <div className="post-media-wrapper">
            <img
              className="post-image max-h-[30rem] rounded-2xl shadow-2xl"
              src={
                "https://res.cloudinary.com/dwsxynzjg/" +
                sponsor.media_4_image
              }
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        ) : null}
      </div>
      {sponsor && sponsor.embed_video_link ? (
        <div className="sponsor-video flex items-center justify-center mb-6 md:mb-12 mx-auto h-[200px] md:h-[58vh]">
          <iframe
            title="sponsorVid"
            className="post-video mx-auto rounded-2xl scale-1.2 md:scale-3 shadow-2xl"
            src={sponsor.embed_video_link}
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      ) : null}
    </div>
  </div>
  );
};

export default Sponsors;