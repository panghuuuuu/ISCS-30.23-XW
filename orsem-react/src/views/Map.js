import React from 'react';
// import '../stylesheets/map.scss';
import xavier from '../assets/Map/36 Xavier.webp';
import SVGMap from '../components/SVGMap';
import BuildingContent from '../components/BuildingContent';
import '../stylesheets/_variables.scss';
import { useEffect, useState, useRef } from 'react';
// import {
//   Sheet,
//   Header,
//   Content,
//   Footer,
//   detents,
//   Portal,
// } from 'react-sheet-slide';
// import 'react-sheet-slide/style.css';
import { Sheet, SheetRef } from 'react-modal-sheet';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import LEGEND from '../assets/Legend.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Map = () => {
  const [building, setBuilding] = useState(null);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  const isMobile = width <= 991;
  const ref = useRef();

  return (
    <div className='map rss-backdrop bg-primaryWhite min-h-fit mt-36 mb-14 md:mt-40 md:mb-[68px]' id='map'>
      <p className='text-primaryPink text-center text-sm font-medium uppercase mb-4'>
        Ateneo de Manila University
      </p>
      <h1 className='text-primaryBlue text-3xl md:text-5xl text-center uppercase'>
        Campus Map
      </h1>
      <div className='map-container flex justify-center'>
        <div>
          <TransformWrapper>
            <TransformComponent>
              <SVGMap onPathClick={setBuilding} />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      <Sheet
        isOpen={building}
        onClose={() => {
          setOpen(false);
          setBuilding(null);
        }}
        rootId='map'
      >
        <Sheet.Container>
          <Sheet.Header>
            <div className='flex justify-center bg-primaryOrange py-4'>
              <div className='flex-1'></div>
              <h1 className='text-primaryWhite text-2xl font-bold'>
                {building}
              </h1>
              <div className='flex-1 flex place-items-center justify-center'>
                <FontAwesomeIcon
                  icon={faX}
                  className='cursor-pointer'
                  color='white'
                  onClick={() => {
                    setBuilding(null);
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <Sheet.Scroller>
              <BuildingContent pageId={building} />
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      {/* <div className='extra-info flex flex-row flex-wrap justify-between h-2/5 my-10 max-w-full overflow-hidden'> */}
      {/*   <img */}
      {/*     src={LEGEND} */}
      {/*     alt='legend' */}
      {/*     className='legend max-h-40 max-w-4/5 place-self-center' */}
      {/*   /> */}
      {/* </div> */}
      <div className='extra-info flex flex-row flex-wrap justify-around place-content-center h-2/5 my-14 max-w-full overflow-hidden gap-4 px-4 md:px-0'>
        <img
          src={LEGEND}
          alt='legend'
          className='legend max-w-xs md:max-w-sm object-contain'
        />
        <div className='tutorial mt-4 place-self-center gap-2 border-primaryBlue border-2 rounded-lg'>
          <div class="bg-primaryBlue p-3 text-[#FFFFFF]">
            <h3 className='text-lg md:text-xl uppercase text-center font-bold'>
              How to Navigate the Map
            </h3>
          </div>
          <div className='text-base text-left p-4'>
            <p>1. Press a building for more information!</p>
            <p>2. On desktop, scroll to zoom.</p>
            <p>3. On mobile, swipe down to close the building popup.</p>
            <p>
              4. You may pan and zoom by pinching, swiping, or clicking and dragging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  //}
};

export default Map;
