import React from 'react';
import SVGTooltip from '../SVGTooltip';
import testImage from '../../assets/Map/Moro.webp';

export const MoroLorenzo = ({ onClick }) => (
  <SVGTooltip pathId='Moro Lorenzo Football Field' imgSrc={testImage}>
    <g id='MoroLorenzo' onClick={onClick}>
      <path
        d='M1292.72 1016.91H1139.68C1117.73 1016.91 1099.93 1034.71 1099.93 1056.66V1104.26C1099.93 1126.21 1117.73 1144.01 1139.68 1144.01H1292.72C1314.67 1144.01 1332.47 1126.21 1332.47 1104.26V1056.66C1332.47 1034.71 1314.67 1016.91 1292.72 1016.91Z'
        fill='url(#paint168_linear_3664_3503)'
      />
      <path
        d='M1284.74 1029.97H1147.66C1129.29 1029.97 1114.4 1044.86 1114.4 1063.23V1098.75C1114.4 1117.12 1129.29 1132.01 1147.66 1132.01H1284.74C1303.11 1132.01 1318 1117.12 1318 1098.75V1063.23C1318 1044.86 1303.11 1029.97 1284.74 1029.97Z'
        fill='url(#paint169_linear_3664_3503)'
      />
      <linearGradient
        id='paint168_linear_3664_3503'
        x1='1099.93'
        y1='1080.46'
        x2='1332.47'
        y2='1080.46'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#46FF66' />
        <stop offset='0.51' stop-color='#CDFF70' />
        <stop offset='1' stop-color='#FEFF99' />
      </linearGradient>
      <linearGradient
        id='paint169_linear_3664_3503'
        x1='1114.4'
        y1='1080.98'
        x2='1318'
        y2='1080.98'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FEFF99' />
        <stop offset='0.49' stop-color='#CDFF70' />
        <stop offset='1' stop-color='#46FF66' />
      </linearGradient>
    </g>
  </SVGTooltip>
);

export default MoroLorenzo;
