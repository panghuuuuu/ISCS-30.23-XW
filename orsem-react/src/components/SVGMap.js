import React from 'react';
import * as Buildings from './Buildings/index.js';

const SVGMap = ({ onPathClick }) => {
  const handlePathClick = (pathId) => {
    onPathClick(pathId); // Call the callback function passed as a prop
  };

  return (
    <svg
      viewBox='0 0 1815 1270'
      width='90vw'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xlink='http://www.w3.org/1999/xlink'
    >
      <Buildings.Roads />
      <Buildings.Arete onClick={() => handlePathClick('Arete')} />
      <Buildings.Bellarmine
        onClick={() => handlePathClick('Bellarmine Hall')}
      />
      <Buildings.Berchman onClick={() => handlePathClick('Berchman Hall')} />
      <Buildings.BlueEagleGym
        onClick={() => handlePathClick('Blue Eagle Gym')}
      />
      <Buildings.CerviniResidenceHall
        onClick={() => handlePathClick('Cervini Residence Hall')}
      />
      <Buildings.CerviniCanteen
        onClick={() => handlePathClick('Cervini Canteen')}
      />
      <Buildings.CovCourts
        onClick={() => handlePathClick('College Covered Courts')}
      />
      <Buildings.DelaCosta
        onClick={() => handlePathClick('Horacio de la Costa Hall')}
      />
      <Buildings.Eliazo onClick={() => handlePathClick('Eliazo Hall')} />
      <Buildings.Faura onClick={() => handlePathClick('Faura Hall')} />
      <Buildings.Gesu onClick={() => handlePathClick('Church of the Gesu')} />
      <Buildings.Gonzaga onClick={() => handlePathClick('Gonzaga Hall')} />
      <Buildings.ISO onClick={() => handlePathClick('ISO')} />
      <Buildings.JGSOM onClick={() => handlePathClick('JGSOM')} />
      <Buildings.JSEC onClick={() => handlePathClick('JSEC')} />
      <Buildings.Kostka onClick={() => handlePathClick('Kostka Hall')} />
      <Buildings.Leong onClick={() => handlePathClick('Leong Hall')} />
      <Buildings.LST onClick={() => handlePathClick('LST')} />
      <Buildings.OldRizalLibrary
        onClick={() => handlePathClick('Old Rizal Library')}
      />
      <Buildings.NewRizalLibrary
        onClick={() => handlePathClick('New Rizal Library')}
      />
      <Buildings.MoroLorenzo
        onClick={() => handlePathClick('Moro Lorenzo Football Field')}
      />
      <Buildings.HenryLeeIrwin
        onClick={() => handlePathClick('Henry Lee Irwin Theater')}
      />
      <Buildings.MVP
        onClick={() => handlePathClick('MVP Center for Student Leadership')}
      />
      <Buildings.Matteo
        onClick={() => handlePathClick('Matteo Ricci Study Hall')}
      />
      <Buildings.SECA onClick={() => handlePathClick('SEC A')} />
      <Buildings.SECB onClick={() => handlePathClick('SEC B')} />
      <Buildings.SECC onClick={() => handlePathClick('SEC C')} />
      <Buildings.CTC onClick={() => handlePathClick('CTC')} />
      <Buildings.Xavier onClick={() => handlePathClick('Xavier Hall')} />
      <Buildings.ZenGarden onClick={() => handlePathClick('Zen Garden')} />
      <Buildings.PIPAC onClick={() => handlePathClick('PIPAC')} />
      <Buildings.Schmitt onClick={() => handlePathClick('Schmitt Hall')} />
      <Buildings.SwimmingPool
        onClick={() => handlePathClick('Swimming Pool')}
      />
      <Buildings.Faber onClick={() => handlePathClick('Faber Hall')} />
      <Buildings.NorthCarpark />
      <Buildings.OldComm
        onClick={() => handlePathClick('Old Communications Building')}
      />
      <Buildings.SocSciBuilding
        onClick={() => handlePathClick('Social Sciences Building')}
      />
      <Buildings.UniversityDorm
        onClick={() => handlePathClick('University Dorm')}
      />
      <Buildings.IRH
        onClick={() => handlePathClick('International Residence Hall')}
      />
      <Buildings.Jeep />
      <g clip-path='url(#clip5_3664_3503)'>
        <rect
          x='1412'
          y='334'
          width='388.48'
          height='388.48'
          fill='url(#pattern1_3664_3503)'
        />
      </g>
      <rect
        x='1461'
        width='353.5'
        height='283'
        fill='url(#pattern8_3664_3503)'
      />
      <pattern
        id='pattern1_3664_3503'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <image
          href='https://res.cloudinary.com/dwsxynzjg/image/upload/v1722500607/lcgn12xxuinznxrthilo.webp'
          transform='scale(0.002123723)'
        />
      </pattern>
      <pattern
        id='pattern8_3664_3503'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
        style={{ scale: '4', transform: 'translateX(-39px)' }}
      >
        <image
          href='https://res.cloudinary.com/dwsxynzjg/image/upload/v1721632616/mnuv7ubfqpg7uwvt2ndl.png'
          transform='matrix(0.000667138 0 0 0.000833333 -0.000353607 0)'
        />
      </pattern>
    </svg>
  );
};

export default SVGMap;
