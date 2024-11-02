import React from 'react';
import SVGTooltip from '../SVGTooltip';
import GesuPic from '../../assets/Map/08 gesu.webp';

export const Gesu = ({ onClick }) => (
  <SVGTooltip pathId='Church of the Gesu' imgSrc={GesuPic}>
    <g id='Gesu' onClick={onClick}>
      <path
        d='M482 309.96H456.02V315.33H482V309.96Z'
        fill='url(#paint207_linear_3664_3503)'
      />
      <path
        d='M364.22 421.29V431.71H573.8V421.29C550.78 409.51 527.76 397.73 504.73 385.95C492.87 373.23 481 360.5 469.14 347.78C457.38 360.5 445.62 373.23 433.86 385.95C410.65 397.73 387.43 409.51 364.22 421.29Z'
        fill='url(#paint208_linear_3664_3503)'
      />
      <path
        d='M471.8 300.94H466.22V385.5H471.8V300.94Z'
        fill='url(#paint209_linear_3664_3503)'
      />
      <path
        d='M573.8 421.29H364.22V431.71H573.8V421.29Z'
        fill='url(#paint210_linear_3664_3503)'
      />
      <path
        d='M398.529 421.28H539.489L495.229 392.34H444.829L398.529 421.28Z'
        fill='url(#paint211_linear_3664_3503)'
      />
      <path
        d='M442.01 385.62H466.18V356.71L442.01 385.62Z'
        fill='url(#paint212_linear_3664_3503)'
      />
      <path
        d='M495.999 385.62H471.819V356.71L495.999 385.62Z'
        fill='url(#paint213_linear_3664_3503)'
      />
      <linearGradient
        id='paint207_linear_3664_3503'
        x1='479.91'
        y1='318.93'
        x2='458.1'
        y2='306.34'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#5CFFFE' />
        <stop offset='1' stop-color='#2631D4' />
      </linearGradient>
      <linearGradient
        id='paint208_linear_3664_3503'
        x1='573.8'
        y1='389.74'
        x2='364.22'
        y2='389.74'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#5CFFFE' />
        <stop offset='1' stop-color='#2631D4' />
      </linearGradient>
      <linearGradient
        id='paint209_linear_3664_3503'
        x1='469.01'
        y1='300.94'
        x2='469.01'
        y2='385.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#5CFFFE' />
        <stop offset='1' stop-color='#2631D4' />
      </linearGradient>
      <linearGradient
        id='paint210_linear_3664_3503'
        x1='573.8'
        y1='426.5'
        x2='364.22'
        y2='426.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2631D4' />
        <stop offset='1' stop-color='#5CFFFE' />
      </linearGradient>
      <linearGradient
        id='paint211_linear_3664_3503'
        x1='398.529'
        y1='406.81'
        x2='539.489'
        y2='406.81'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.51' stop-color='#FEFF99' />
        <stop offset='1' stop-color='#F69839' />
      </linearGradient>
      <linearGradient
        id='paint212_linear_3664_3503'
        x1='442.01'
        y1='371.17'
        x2='466.18'
        y2='371.17'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.51' stop-color='#FEFF99' />
        <stop offset='1' stop-color='#F69839' />
      </linearGradient>
      <linearGradient
        id='paint213_linear_3664_3503'
        x1='471.819'
        y1='371.17'
        x2='495.999'
        y2='371.17'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFFAED' />
        <stop offset='0.51' stop-color='#FEFF99' />
        <stop offset='1' stop-color='#F69839' />
      </linearGradient>
    </g>
  </SVGTooltip>
);

export default Gesu;
