import React from 'react';
import SVGTooltip from '../SVGTooltip';
import testImage from '../../assets/Map/30.webp';

export const LowerEastCarpark = ({ onClick }) => (
  <SVGTooltip pathId='LowerEastCarpark' imgSrc={testImage}>
    <g id='LowerEastCarpark' onClick={onClick}>
      <defs></defs>
    </g>
  </SVGTooltip>
);

export default LowerEastCarpark;
