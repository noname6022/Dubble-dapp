import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    width: 2.5vw;
    height: 4.3vh;
    transition: all .3s;
    @media (max-width: 600px){
      width: 10.5vw;
    height: 3.3vh;
    path{
     fill: black; 
    }
    }
`;

export const MediumIcon = () => {
  return (
<Svg width="45" height="23" viewBox="0 0 45 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.8125 11.5C44.8125 16.7031 43.8563 20.9219 42.5812 20.9219C41.3063 20.9219 40.35 16.7031 40.35 11.5C40.35 6.29688 41.3063 2.07813 42.5812 2.07813C43.8563 2.07813 44.8125 6.29688 44.8125 11.5ZM39.2344 11.5C39.2344 17.2656 36.3656 22.0469 33.0187 22.0469C29.6719 22.0469 26.8031 17.2656 26.8031 11.5C26.8031 5.73438 29.6719 0.953125 33.0187 0.953125C36.3656 0.953125 39.2344 5.73438 39.2344 11.5ZM25.3687 11.5C25.3687 17.6875 19.7906 22.75 12.7781 22.75C5.76562 22.75 0.1875 17.6875 0.1875 11.5C0.1875 5.3125 5.76562 0.25 12.7781 0.25C19.7906 0.25 25.3687 5.3125 25.3687 11.5Z" fill="white"/>
</Svg>
  )
}
export default MediumIcon