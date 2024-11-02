import React, { Component, useState } from "react";

// Sponsors
import CoPresenters from "../assets/Sponsors/CoPresenters";
import SpecialMention from "../assets/Sponsors/SpecialMention";
import SpecialPartners from "../assets/Sponsors/SpecialPartners";
import Concessionaries from "../assets/Sponsors/Concessionaries";
import Minor from "../assets/Sponsors/Minor";

// Privacy Policy
import PrivacyPolicy from "../components/PrivacyPolicy";

// Schedule
import sched from "../assets/sched.json";

// FAQs
import questions from "../assets/questions.json";
import "../stylesheets/faq-animation.scss";

// Merch
import lanyard from "../assets/04 Merch/ly.png";
import shirt1 from "../assets/04 Merch/s1.png";
import totebag from "../assets/04 Merch/tb.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPrivacyPolicyOpen: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCloseModal = () => {
    this.setState({ isPrivacyPolicyOpen: false });
    localStorage.setItem("privacyPolicyAccepted", "true");
  };

  render() {
    return (
      <div className="home bg-primaryWhite">
        <PrivacyPolicy
          isOpen={this.state.isPrivacyPolicyOpen}
          handleCloseModal={this.handleCloseModal}
        />
        <Landing />
        <About />
        <Sched schedule={this.state.apiData} />
        <Merch />
        <FAQs />
        {/* <Grid /> */}
        <Sponsors />
      </div>
    );
  }
}

const Landing = () => (
  <section className="home-container relative mt-[18%] md:mt-[7.5%] lg:mt-[3%]">
    <div className="flex w-100vw overflow-hidden bg-primaryBlue">
      <img
        className="object-cover rounded-t-none rounded-b-[32px]"
        src="https://ucarecdn.com/753d02ad-1b03-44b4-86c1-7d4eaea4b150/"
        alt="OrSem 2024: Mithi Banner"
      />
    </div>
  </section>
);

const About = () => {
  return (
    <section className="bg-primaryBlue text-white px-4 pb-16 pt-4 md:pb-28 md:px-8 min-h-fit rounded-t-none rounded-b-[32px]">
      <div className="max-w-6xl mx-auto mt-[52px] md:mt-28">
        <p className="text-primaryYellow text-xs md:text-sm font-medium mb-4 text-center uppercase">
          Welcome Freshie!
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-7 text-center uppercase text-primaryWhite">
          What is OrSem?
        </h1>
        <p className="text-base md:text-lg mb-9 md:mb-12 px-1 md:px-12 text-center max-w-4xl mx-auto text-primaryWhite">
          The Ateneo Freshman Orientation Seminar (OrSem) initiates the freshies
          and transferees, integrates them into the school's community, and
          develops a deeper relationship between them and the university in
          their new journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3864E4] p-4 rounded-lg overflow-hidden">
            <img
              src="https://theguidon.com/1112/main/wp-content/uploads/2022/08/04-08092022-OrSem-Tindig-Day-5-Caoile-4-1400x933.jpeg"
              alt="OrSem activity 1"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-primaryWhite text-opacity-90">
              Onsite Modality
            </h3>
          </div>

          <div className="bg-[#3864E4] p-4 rounded-lg overflow-hidden">
            <img
              src="https://theguidon.com/1112/main/wp-content/uploads/2022/08/02-08092022-OrSem-Tindig-Day-5-Fernando-15-scaled-1400x788.jpeg"
              alt="OrSem activity 2"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-primaryWhite">
              Block Bonding
            </h3>
          </div>

          <div className="bg-[#3864E4] p-4 rounded-lg overflow-hidden">
            <img
              src="https://theguidon.com/1112/main/wp-content/uploads/2022/08/03-081022-OrSem-Tindig-Day-2-Cuan-10-1400x933.jpeg"
              alt="OrSem activity 3"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-primaryWhite">
              OrSem Dance
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-[#3864E4] p-4 rounded-lg overflow-hidden text-primaryWhite">
            <img
              src="https://theguidon.com/1112/main/wp-content/uploads/2022/08/06-080922-OrSem-Tindig-Day-1-Villalon-30-1400x933.jpeg"
              alt="OrSem activity 4"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold">Campus Tour</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const products = [
  { name: "Shirt - White", price: "250.00", image: shirt1 },
  { name: "Tote Bag", price: "₱160.00", image: totebag },
  { name: "Lanyard", price: "₱75.00", image: lanyard },
];

const Merch = () => {
  return (
    <section className="px-4 md:px-24 mb-24">
      <p className="text-primaryViolet text-sm font-medium mb-4 uppercase">
        Official Merch
      </p>
      <h1 className="text-primaryPink text-3xl md:text-5xl font-bold mb-6 uppercase">
        Magis in Style
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div key={index}>
            <div className="h-100 flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight text-[#000000] text-opacity-80">
              {item.name}
            </h3>
            <p className="text-base font-medium text-primaryPink">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      <div class="mt-10 sm:mt-12 flex items-center justify-center text-[#FFFFFF]">
        <a
          href="/merch"
          class="flex bg-primaryPink px-8 text-lg sm:text-base pt-3 pb-2 rounded-full font-medium items-center justify-center hover:bg-[#d156ca] hover:text-[#f4f4f4] hover:transition hover:ease-in-out"
        >
          See more
          <svg
            className="ml-2 mb-[1px]"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-primaryWhite pt-14 pb-20 md:py-20 px-4 md:px-24">
      <div className="relative">
        <h1 className="text-primaryViolet text-4xl md:text-5xl font-bold mb-6 uppercase">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg">
          Got specific concerns? Feel free to email{" "}
          <a
            href="mailto:orsem.college@student.ateneo.edu"
            className="text-primaryPink hover:text-[#d156ca] font-medium"
          >
            orsem.college@student.ateneo.edu{" "}
          </a>
          or message the{" "}
          <a
            href="https://www.facebook.com/OrSem2024"
            className="text-primaryPink hover:text-[#d156ca] font-medium"
          >
            OrSem Mithi Facebook page
          </a>
          !
        </p>
        <img
          src="https://ucarecdn.com/69b764df-8512-475c-baa3-1e496a6ed214/Sparkle1.png"
          alt="Sparkle"
          className="hidden lg:block absolute -bottom-52 left-1/2 !w-90 !h-90 transform -translate-x-1/2"
        />
      </div>
      <div className="space-y-4">
        {questions.FAQs.map((item, index) => (
          <div
            key={index}
            className="bg-primaryOrange rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left font-semibold text-base md:text-lg p-6 md:p-7 text-[#FFFFFF] flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="ml-4 transform transition-transform duration-200 ease-in-out">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <div
              className={`accordion-content ${openIndex === index ? "open" : ""}`}
            >
              <div className="bg-primaryOrange text-base md:text-lg px-7 pb-6 text-[#FFFFFF]">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const Grid = () => (
//   <section className="grid">
//     <div className="grid-container">
//       <div className="grid-wrapper">
//         <div className="text-container">
//           <h1>O-Laro</h1>
//           <p>
//             Hey, freshies! 👋 Excited to meet and get to know your blockmates?
//             We are too, and we have a set of challenges coming your way! 👀 Show
//             your block and team spirit by participating in our O-Laro games as
//             you compete with other blocks. Also, don’t forget to make your Block
//             IG account where you will be posting your submissions 📸 Strengthen
//             the bond within your block as you progress together throughout
//             O-Laro 🎯🎮
//           </p>
//           <a href="program/o-laro">
//             <button className="btn freshie-journal">register now</button>
//           </a>
//         </div>
//         <div className="img-container">
//           <img src={olaro} alt=""></img>
//         </div>
//       </div>
//       <div className="second grid-wrapper">
//         <div className="text-container">
//           <h1>OrSem 2023: Muli Merchandise</h1>
//           <div>
//             <p>
//               Don’t be supershy 🐰✨, and make these yours ASAP ⏰! Still
//               thinking of how to rock your first day? Fret not as OrSem Muli is
//               here to help! Consider sporting our exclusive Muli shirts in
//               either black or white! And if you want to subtly commemorate the
//               OrSem experience with your freshly-laminated IDs, consider
//               availing our OrSem Muli lanyards! Customize your water jugs or
//               laptops with the OrSem Muli Sticker Packs!
//             </p>
//           </div>
//           <a href="/merch">
//             <button className="btn">go to merch</button>
//           </a>
//         </div>
//         <div className="img-container">
//           <img src={merch} alt=""></img>
//         </div>
//       </div>
//       <div className="grid-wrapper">
//         <div className="text-container">
//           <h1>Yugto Talks</h1>
//           <p>
//             YUGTO is a brand-new online talk series that aims to provide
//             incoming freshmen and transferees with a comprehensive and
//             streamlined picture of what life at Ateneo can look like, with a
//             special emphasis on student life and its exciting aspects.
//           </p>
//           <NavLink className="grid-btn" exact to="program/SLS">
//             <button className="btn">register now</button>
//           </NavLink>
//         </div>
//         <div className="img-container">
//           <img src={yugto} alt=""></img>
//         </div>
//       </div>
//     </div>
//   </section>
// );

const Sponsors = () => (
  <section className="w-full h-full pt-4 md:pt-10 pb-20 px-4 md:px-24">
    <div className="py-10">
      <div className="flex flex-col items-center">
        <p className="text-primaryViolet text-xs md:text-sm font-medium mb-4 text-center uppercase">
          Special thanks to
        </p>
        <h1 className="text-3xl md:text-5xl text-primaryPink uppercase mb-4">
          Sponsors & Partners
        </h1>
        <p className="text-primaryViolet text-xs md:text-sm font-medium mb-4 text-center uppercase">
          Click on the logos for more information{" "}
        </p>
        <div className="w-full max-w-8xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Co-presenters */}
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="bg-[#000000] bg-opacity-[0.02] pb-10 px-10 rounded-2xl border-2 border-primaryBlue">
                <div className="bg-primaryBlue pt-4 pb-3 -mx-10 mb-6 rounded-t-xl">
                  <h2 className="text-lg font-bold text-[#FFFFFF] uppercase text-center">
                    Co-presenters
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {CoPresenters.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center p-2"
                    >
                      {sponsor.href ? (
                        <a href={`/sponsor/${sponsor.href}`}>
                          <img
                            src={sponsor.logo}
                            alt={`Co-presenter ${index + 1}`}
                            className="max-w-full h-auto max-h-[10rem]"
                          />
                        </a>
                      ) : (
                        <img
                          src={sponsor.logo}
                          alt={`Co-presenter ${index + 1}`}
                          className="max-w-full h-auto max-h-[10rem]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-7">
              {/* Minor sponsors */}
              <div className="bg-[#000000] bg-opacity-[0.02] pb-10 px-10 rounded-2xl border-2 border-primaryBlue">
                <div className="bg-primaryBlue pt-4 pb-3 -mx-10 mb-6 rounded-t-xl">
                  <h2 className="text-lg font-medium text-[#FFFFFF] uppercase text-center mb-4">
                    Minor Sponsors
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Minor.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center p-2"
                    >
                      {sponsor.href ? (
                        <a href={`/sponsor/${sponsor.href}`}>
                          <img
                            src={sponsor.logo}
                            alt={`Minor ${index + 1}`}
                            className="max-w-full h-auto max-h-[8rem]"
                          />
                        </a>
                      ) : (
                        <img
                          src={sponsor.logo}
                          alt={`Minor ${index + 1}`}
                          className="max-w-full h-auto max-h-[8rem]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Special partners */}
              <div className="bg-[#000000] bg-opacity-[0.02] pb-10 px-10 rounded-2xl border-2 border-primaryBlue">
                <div className="bg-primaryBlue pt-4 pb-3 -mx-10 mb-6 rounded-t-xl">
                  <h2 className="text-lg font-medium text-[#FFFFFF] uppercase text-center mb-4">
                    Special Partners
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-2">
                  {SpecialPartners.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      {sponsor.href ? (
                        <a href={`/sponsor/${sponsor.href}`}>
                          <img
                            src={sponsor.logo}
                            alt={`Special Partner ${index + 1}`}
                            className="max-w-full h-auto max-h-[10rem]"
                          />
                        </a>
                      ) : (
                        <img
                          src={sponsor.logo}
                          alt={`Special Partner ${index + 1}`}
                          className="max-w-full h-auto max-h-[10rem]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Special mention */}
              <div className="bg-[#000000] bg-opacity-[0.02] pb-10 px-10 rounded-2xl border-2 border-primaryBlue">
                <div className="bg-primaryBlue pt-4 pb-3 -mx-10 mb-6 rounded-t-xl">
                  <h2 className="text-lg font-medium text-[#FFFFFF] uppercase text-center mb-4">
                    Special Mentions
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-3 md:gap-8">
                  {SpecialMention.map((sponsor, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center p-2"
                    >
                      {sponsor.href ? (
                        <a href={`/sponsor/${sponsor.href}`}>
                          <img
                            src={sponsor.logo}
                            alt={`Special Mention ${index + 1}`}
                            className="max-w-full h-auto max-h-[8rem]"
                          />
                        </a>
                      ) : (
                        <img
                          src={sponsor.logo}
                          alt={`Special Mention ${index + 1}`}
                          className="max-w-full h-auto max-h-[8rem]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Concessionaries */}
          <div className="concessionaires mt-4">
            <div className="bg-[#000000] bg-opacity-[0.02] pb-10 px-10 rounded-2xl border-2 border-primaryBlue">
              <div className="bg-primaryBlue pt-4 pb-3 -mx-10 mb-6 rounded-t-xl">
                <h2 className="text-lg font-medium text-[#FFFFFF] uppercase text-center mb-4">
                  Concessionaries
                </h2>
              </div>
              <div className="sm:!flex sm:!flex-row justify-evenly !grid !grid-cols-2 !gap-4">
                {Concessionaries.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center p-4"
                  >
                    {sponsor.href ? (
                      <a href={`/sponsor/${sponsor.href}`}>
                        <img
                          src={sponsor.logo}
                          alt={`Concessionary ${index + 1}`}
                          className="max-w-full h-auto max-h-[10rem]"
                        />
                      </a>
                    ) : (
                      <img
                        src={sponsor.logo}
                        alt={`Concessionary ${index + 1}`}
                        className="max-w-full h-auto max-h-[10rem]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Sched = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [fadeOut, setFadeOut] = React.useState(false);

  const handleDateClick = (index) => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      setActiveIndex(index);
    }, 300);
  };

  const renderSchedItems = () => {
    const activeSched = Object.values(sched)[activeIndex];

    return activeSched.map((val, index) => (
      <tr
        key={`row${index}`}
        className="border-b border-[#70A4F3] last:border-b-0"
      >
        <td className="p-6 md:p-8 text-base md:text-lg w-1/3 text-primaryWhite">
          {val.time}
        </td>
        <td className="p-6 md:p-8 text-base md:text-lg w-2/3 text-primaryWhite">
          {val.title}
        </td>
      </tr>
    ));
  };

  return (
    <section className="bg-primaryWhite mt-20 sm:mt-36 mb-20 sm:mb-36 px-4 md:px-24">
      <p className="text-primaryPink text-center text-sm font-medium uppercase mb-4">
        OrSem 2024: Mithi
      </p>
      <h1 className="text-primaryBlue text-center text-3xl md:text-5xl font-bold uppercase mb-6 md:mb-7">
        List of Activities
      </h1>
      {/* <p className="text-base md:text-lg px-1 md:px-12 text-center max-w-4xl mx-auto text-[#000000] mb-8 md:mb-10"> */}
      {/*   Specific details and activities will be announced soon. Stay tuned! */}
      {/* </p> */}

      <div className="md:grid md:grid-cols-4 md:gap-6">
        <div className="md:col-span-1 mb-4 md:mb-0">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal">
            {Object.keys(sched).map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(index)}
                className={`flex-1 min-w-[150px] md:w-auto text-center py-3 md:py-[22px] px-4 md:px-6 font-medium rounded-lg text-sm md:text-lg mb-1 md:mb-2 ${
                  activeIndex === index
                    ? "bg-primaryBlue text-primaryWhite"
                    : "bg-[#D4E5FB] text-[#263FA9]"
                } ${index === 0 ? "mr-2" : "ml-2"} md:mr-0 md:ml-0`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 overflow-x-auto">
          <table className="w-full bg-primaryBlue text-[#FFFF] rounded-lg">
            <tbody
              className={`transition-opacity duration-200 ease-in-out ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              {renderSchedItems()}
            </tbody>
          </table>
        </div>
      </div>
      <span className="text-center text-base w-full"></span>
      <p className="text-sm md:text-base px-1 md:px-12 text-center max-w-4xl mx-auto text-[#000000] mt-8 md:mt-10">
        Schools not assigned to their respective day are not allowed to
        participate in OrSem activities. All incoming freshmen are allowed to
        attend O-Night for free.
      </p>
    </section>
  );
};

export default Home;
