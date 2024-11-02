import React from 'react';
import SVGTooltip from '../SVGTooltip';
import testImage from '../../assets/Map/30.webp';

export const UpperEastCarpark = ({ onClick }) => (
  <SVGTooltip pathId='UpperEastCarpark' imgSrc={testImage}>
    <g id='UpperEastCarpark' onClick={onClick}>
      <defs></defs>
    </g>
  </SVGTooltip>
);

export default UpperEastCarpark;
