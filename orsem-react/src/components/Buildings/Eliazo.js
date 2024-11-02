import React from 'react';
import SVGTooltip from '../SVGTooltip';
import testImage from '../../assets/Map/Eliazo.jpg';

export const Eliazo = ({ onClick }) => (
  <SVGTooltip pathId='Eliazo Hall' imgSrc={testImage}>
    <g id='Eliazo' onClick={onClick}>
      <path
        d='M1116.5 327.43H978.43V392.53H1116.5V327.43Z'
        fill='url(#paint193_linear_3664_3503)'
      />
      <path
        d='M990.95 324.71V389.72H1018.68V366.45H1076.86V389.28H1103.97V324.7H1077.49V352.97H1018.27C1018.27 343.54 1018.29 334.11 1018.3 324.67C1009.19 324.67 1000.07 324.69 990.96 324.7L990.95 324.71Z'
        fill='url(#paint194_linear_3664_3503)'
      />
      <path
        d='M1116.47 388.77H978.46V392.53H1116.47V388.77Z'
        fill='url(#paint195_linear_3664_3503)'
      />
      <path
        d='M969.16 327.36H1125.77L1114.16 311.98H980.77L969.16 327.36Z'
        fill='url(#paint196_linear_3664_3503)'
      />
      <path
        d='M973.5 321.64C1022.81 321.64 1072.12 321.64 1121.43 321.65C1119.01 318.43 1116.6 315.2 1114.18 311.98H980.79C978.36 315.2 975.93 318.42 973.5 321.64Z'
        fill='url(#paint197_linear_3664_3503)'
      />
      <path
        d='M1055.87 370.81H1039.05V388.79H1055.87V370.81Z'
        fill='url(#paint198_linear_3664_3503)'
      />
      <linearGradient
        id='paint193_linear_3664_3503'
        x1='981.59'
        y1='398.01'
        x2='1113.34'
        y2='321.95'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#F268E7' />
        <stop offset='1' stop-color='#FB0002' />
      </linearGradient>
      <linearGradient
        id='paint194_linear_3664_3503'
        x1='1103.97'
        y1='357.2'
        x2='990.95'
        y2='357.2'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#F268E7' />
        <stop offset='1' stop-color='#FEFF99' />
      </linearGradient>
      <linearGradient
        id='paint195_linear_3664_3503'
        x1='1065.53'
        y1='359.36'
        x2='1029.4'
        y2='421.94'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.53' stop-color='#F5459A' />
        <stop offset='1' stop-color='#FB0002' />
      </linearGradient>
      <linearGradient
        id='paint196_linear_3664_3503'
        x1='1024.13'
        y1='286.94'
        x2='1067.04'
        y2='361.26'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FB0002' />
        <stop offset='0.47' stop-color='#F5459A' />
        <stop offset='1' stop-color='#FFFAED' />
      </linearGradient>
      <linearGradient
        id='paint197_linear_3664_3503'
        x1='973.5'
        y1='316.81'
        x2='1121.43'
        y2='316.81'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#F268E7' />
        <stop offset='1' stop-color='#FEFF99' />
      </linearGradient>
      <linearGradient
        id='paint198_linear_3664_3503'
        x1='1041.47'
        y1='369.42'
        x2='1053.46'
        y2='390.19'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#F268E7' />
        <stop offset='1' stop-color='#FEFF99' />
      </linearGradient>
    </g>
  </SVGTooltip>
);

export default Eliazo;
