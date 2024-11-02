import React from 'react';
import SVGTooltip from '../SVGTooltip';
import testImage from '../../assets/Map/30.webp';

export const CentralCarpark = ({ onClick }) => (
  <SVGTooltip pathId='Central Carpark' imgSrc={testImage}>
    <g id='CentralCarpark' onClick={onClick}>
      <defs></defs>
    </g>
  </SVGTooltip>
);

export default CentralCarpark;
