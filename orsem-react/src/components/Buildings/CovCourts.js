import React from 'react';
import SVGTooltip from '../SVGTooltip';
import CovCourtsPic from '../../assets/Map/09 court.webp';

export const CovCourts = ({ onClick }) => (
  <SVGTooltip pathId='Covered Courts' imgSrc={CovCourtsPic}>
    <g id='CovCourts' onClick={onClick}>
      <path
        d='M1260.62 600.46H1150.38V631.27H1260.62V600.46Z'
        fill='url(#paint181_linear_3664_3503)'
      />
      <path
        d='M1150.38 600.46L1206.54 569.9L1260.62 600.46H1243.85C1231.27 594.06 1218.68 587.66 1206.1 581.25C1193.38 587.66 1180.65 594.08 1167.93 600.49C1162.08 600.48 1156.23 600.47 1150.39 600.46H1150.38Z'
        fill='url(#paint182_linear_3664_3503)'
      />
      <path
        d='M1226.56 600.46H1150.4V621.88H1226.56V600.46Z'
        fill='url(#paint183_linear_3664_3503)'
      />
      <path
        d='M1252.52 611.81H1240.16V631.26H1252.52V611.81Z'
        fill='url(#paint184_linear_3664_3503)'
      />
      <linearGradient
        id='paint181_linear_3664_3503'
        x1='1150.38'
        y1='615.87'
        x2='1260.62'
        y2='615.87'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2631D4' />
        <stop offset='1' stop-color='#5CFFFE' />
      </linearGradient>
      <linearGradient
        id='paint182_linear_3664_3503'
        x1='1246.84'
        y1='576.6'
        x2='1164.16'
        y2='624.33'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2631D4' />
        <stop offset='1' stop-color='#5CFFFE' />
      </linearGradient>
      <linearGradient
        id='paint183_linear_3664_3503'
        x1='1202.64'
        y1='635.7'
        x2='1174.32'
        y2='586.65'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.51' stop-color='#FEFF99' />
        <stop offset='1' stop-color='#F69839' />
      </linearGradient>
      <linearGradient
        id='paint184_linear_3664_3503'
        x1='1255.19'
        y1='616.43'
        x2='1237.5'
        y2='626.65'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.51' stop-color='#FEFF99' />
        <stop offset='1' stop-color='#F69839' />
      </linearGradient>
    </g>
  </SVGTooltip>
);

export default CovCourts;
