import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    width: 2.5vw;
    height: 3.5vmin;
    @media (max-width: 600px){
      width: 4.57vw;
    height: 4.5vmin;
    }
`;

export const WDubIcon = () => {
  return (
    <Svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 0V1.7H32V3.4H34V5.1H36V6.8H38V10.2H40V23.8H38V27.2H36V28.9H34V30.6H32V32.3H28V34H12V32.3H8V30.6H6V28.9H4V27.2H2V23.8H0V10.2H2V6.8H4V5.1H6V3.4H8V1.7H12V0H28ZM26 3.4H14V5.1H10V6.8H8V8.5H6V11.9H4V22.1H6V25.5H8V27.2H10V28.9H14V30.6H26V28.9H30V27.2H32V25.5H34V22.1H36V11.9H34V8.5H32V6.8H30V5.1H26V3.4ZM14 8.5H24V10.2H26V11.9H28V22.1H26V23.8H24V25.5H14V8.5ZM18 11.9V22.1H22V20.4H24V13.6H22V11.9H18Z" fill="#3A86D8"/>
    </Svg>
  )
}
export default WDubIcon

