import React, { useState, useEffect } from "react";
import questions from "../assets/questions.json"
import '../stylesheets/faq-animation.scss'


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-primaryWhite mt-20 md:mt-28 mb-20 py-20 px-4 md:px-24">
      <div className="relative">
        <h1 className="text-primaryViolet text-4xl md:text-5xl font-bold mb-6 uppercase">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg">
          Got specific concerns? Feel free to email{' '}
          <a href="mailto:orsem.college@student.ateneo.edu" className="text-primaryPink hover:text-[#d156ca] font-medium">
            orsem.college@student.ateneo.edu{' '}
          </a>
          or message the{' '}
          <a href="https://www.facebook.com/OrSem2024" className="text-primaryPink hover:text-[#d156ca] font-medium">
            OrSem Mithi Facebook page
          </a>
          .
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
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
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

export default Faq;
