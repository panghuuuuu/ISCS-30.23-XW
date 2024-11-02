import React, { useEffect, useState } from 'react';
import data from './BuildingDescriptions.json'; // Adjust the path to your data.json file
import SECA from '../assets/Map/31.webp';
import Arete from '../assets/Map/01 arete.webp';
import BellarminePic from '../assets/Map/02 bellarmine.webp';
import BerchmanPic from '../assets/Map/03 berchman.webp';
import BEGPic from '../assets/Map/04 blueeagle.webp';
import CTCPic from '../assets/Map/26 PLDT-CTC.webp';
import CerviniCanteenPic from '../assets/Map/CerviniCanteen.jpg';
import CerviniResidenceHall from '../assets/Map/CerviniResidenceHall.webp';
import CovCourtsPic from '../assets/Map/09 court.webp';
import DelaCostaPic from '../assets/Map/10 horacio.webp';
import EliazoHallPic from '../assets/Map/Eliazo.jpg';
import FaberHallPic from '../assets/Map/28 Faber.webp';
import FauraPic from '../assets/Map/12 faura.webp';
import GesuPic from '../assets/Map/08 gesu.webp';
import GonzPic from '../assets/Map/Gonzaga.webp';
import HenryLeeIrwinPic from '../assets/Map/Henry Lee Irwin.jpeg';
import SchmittPic from '../assets/Map/Schmitt.jpg';
import IRHPic from '../assets/Map/IRH-2020.jpg';
import ISOPic from '../assets/Map/ISO.jpg';
import JGSOMPic from '../assets/Map/16 jgsom.webp';
import JSECPic from '../assets/Map/17 jsec.webp';
import KostkaPic from '../assets/Map/Kostka.webp';
import LSTPic from '../assets/Map/LST.jpg';
import LeongPic from '../assets/Map/19 leong.webp';
import SEC from '../assets/Map/30.webp';
import MVPPic from '../assets/Map/21.webp';
import MatteoPic from '../assets/Map/22 matteo.webp';
import MoroPic from '../assets/Map/Moro.webp';
import NewRizalPic from '../assets/Map/23 NewRizal.webp';
import OldCommPic from '../assets/Map/FA Annex.jpg';
import OldRizalPic from '../assets/Map/27 OldRizal.webp';
import PIPACPic from '../assets/Map/25 PIPAC.webp';
import SocSciPic from '../assets/Map/SocSci.jpg';
import SwimmingPoolPic from '../assets/Map/SwimmingPool.JPG';
import UniversityDormPic from '../assets/Map/UnivDorm.jpg';
import XavierPic from '../assets/Map/36 Xavier.webp';
import ZenGardenPic from '../assets/Map/37 Zen.webp';

const BuildingContent = ({ pageId }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const pageContent = data?.pages.find((page) => page.id === pageId);
    setContent(pageContent);
  }, [pageId]);

  const hasFunFacts = content?.funFacts && content?.funFacts?.length > 0;
  const hasAteneanStories =
    content?.ateneanStories && content?.ateneanStories?.length > 0;
  const hasRooms = !!content?.rooms;

  const sectionClass = `${hasFunFacts && hasAteneanStories ? 'w-1/2' : 'w-full'} flex-grow text-justify flex flex-col gap-3`;

  if (!content) return <div>Loading...</div>;

  return (
    <div className='w-full justify-center place-items-center flex flex-col'>
      <div className='max-w-screen-lg flex justify-center'>
        <BuildingPic pageId={pageId} />
      </div>
      <div className='w-4/5 py-5 text-justify flex justify-center flex-col gap-3'>
        {content.mainDesc.map((desc, index) => (
          <span key={index}>{desc}</span>
        ))}
      </div>
      {hasRooms && <Rooms content={content} />}
      {(hasFunFacts || hasAteneanStories) && (
        <FunFactsAndStories
          content={content}
          hasFunFacts={hasFunFacts}
          hasAteneanStories={hasAteneanStories}
          sectionClass={sectionClass}
        />
      )}
    </div>
  );
};

const FunFactsAndStories = ({
  content,
  hasFunFacts,
  hasAteneanStories,
  sectionClass,
}) => (
  <>
    <div className='fun-facts-stories-container flex md:flex-nowrap flex-wrap gap-4 w-full px-16 py-4 border-x-8 mt-4 border-primaryOrange bg-[#FFB172] bg-opacity-20'>
      {hasFunFacts && (
        <div className={`fun-facts ${sectionClass}`}>
          <h3 className='fun-facts-header font-bold text-2xl text-primaryOrange'>
            {content.funFacts.length > 1 ? 'Fun Facts' : 'Fun Fact'}
          </h3>
          <div className='fun-facts-content flex gap-4 flex-col'>
            {content.funFacts?.map((fact, index) => (
              <span key={index}>{fact}</span>
            ))}
          </div>
        </div>
      )}
      {hasAteneanStories && (
        <div className={`atenean-stories ${sectionClass}`}>
          <h3 className='atenean-stories-header font-bold text-2xl text-primaryOrange text-right'>
            Atenean Stories
          </h3>
          <div className='atenean-stories-content flex gap-4 flex-col text-right'>
            {content.ateneanStories?.map((story, index) => (
              <span key={index}>{story}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  </>
);

const Rooms = ({ content }) => (
  <>
    <div className='rooms w-full px-16 py-4 text-left border-l-8 border-primaryOrange bg-[#FFB172] bg-opacity-20'>
      <h3 className='rooms-header font-bold text-2xl text-primaryOrange'>
        ROOMS
      </h3>
      <br />
      <div className='rooms-buildings flex w-full justify-between flex-wrap gap-3'>
        {content.rooms?.map((building, index) => (
          <div className='building' key={index}>
            <h3 className='font-bold'>{building.building}</h3>
            <ul className='list-disc pl-8'>
              {building.rooms?.map((room, index) => (
                <li key={index}>{room}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
);

const BuildingPic = ({ pageId }) => (
  <>
    {pageId === 'Arete' ? (
      <img src={Arete} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Bellarmine Hall' ? (
      <img src={BellarminePic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Berchman Hall' ? (
      <img src={BerchmanPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Blue Eagle Gym' ? (
      <img src={BEGPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Cervini Residence Hall' ? (
      <img
        src={CerviniResidenceHall}
        alt=''
        className='w-4/5 rounded-3xl mt-8'
      />
    ) : pageId === 'Cervini Canteen' ? (
      <img src={CerviniCanteenPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'College Covered Courts' ? (
      <img src={CovCourtsPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Horacio de la Costa Hall' ? (
      <img src={DelaCostaPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Eliazo Hall' ? (
      <img src={EliazoHallPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Faura Hall' ? (
      <img src={FauraPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Church of the Gesu' ? (
      <img src={GesuPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Gonzaga Hall' ? (
      <img src={GonzPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'ISO' ? (
      <img src={ISOPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'JGSOM' ? (
      <img src={JGSOMPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'JSEC' ? (
      <img src={JSECPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Kostka Hall' ? (
      <img src={KostkaPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Leong Hall' ? (
      <img src={LeongPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'LST' ? (
      <img src={LSTPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Old Rizal Library' ? (
      <img src={OldRizalPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'New Rizal Library' ? (
      <img src={NewRizalPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Moro Lorenzo Football Field' ? (
      <img src={MoroPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Henry Lee Irwin Theater' ? (
      <img src={HenryLeeIrwinPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'MVP Center for Student Leadership' ? (
      <img src={MVPPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Matteo Ricci Study Hall' ? (
      <img src={MatteoPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'SEC A' ? (
      <img src={SECA} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'SEC B' ? (
      <img src={SEC} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'SEC C' ? (
      <img src={SEC} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'CTC' ? (
      <img src={CTCPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Xavier Hall' ? (
      <img src={XavierPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Zen Garden' ? (
      <img src={ZenGardenPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'PIPAC' ? (
      <img src={PIPACPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Schmitt Hall' ? (
      <img src={SchmittPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Swimming Pool' ? (
      <img src={SwimmingPoolPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Faber Hall' ? (
      <img src={FaberHallPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Old Communications Building' ? (
      <img src={OldCommPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'Social Sciences Building' ? (
      <img src={SocSciPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'University Dorm' ? (
      <img src={UniversityDormPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : pageId === 'International Residence Hall' ? (
      <img src={IRHPic} alt='' className='w-4/5 rounded-3xl mt-8' />
    ) : null}
  </>
);

export default BuildingContent;
