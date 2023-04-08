import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    width: 2.2vw;
    height: 4vh;
    transition: all .3s;
`;

export const TwitterIcon = () => {
  return (
    <Svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.1767 4.24992C37.765 4.84784 36.2433 5.24075 34.6667 5.42867C36.28 4.52325 37.5267 3.08825 38.1133 1.36284C36.5917 2.217 34.905 2.81492 33.1267 3.15659C31.6783 1.68742 29.6433 0.833252 27.3333 0.833252C23.025 0.833252 19.505 4.11325 19.505 8.162C19.505 8.74284 19.5783 9.30659 19.7067 9.83617C13.18 9.52867 7.36833 6.60742 3.5 2.18284C2.82167 3.25909 2.43667 4.52325 2.43667 5.85575C2.43667 8.40117 3.81167 10.6562 5.93833 11.9374C4.63667 11.9374 3.42667 11.5958 2.36333 11.0833V11.1345C2.36333 14.6878 5.07667 17.6603 8.67 18.3266C7.51633 18.6208 6.30517 18.6617 5.13167 18.4462C5.62961 19.9025 6.60482 21.1768 7.9202 22.0899C9.23558 23.0031 10.825 23.5091 12.465 23.537C9.68499 25.5877 6.23899 26.6962 2.69333 26.6803C2.07 26.6803 1.44667 26.6462 0.823334 26.5778C4.30667 28.662 8.45 29.8749 12.8867 29.8749C27.3333 29.8749 35.2717 18.7024 35.2717 9.01617C35.2717 8.69159 35.2717 8.38408 35.2533 8.0595C36.7933 7.0345 38.1133 5.73617 39.1767 4.24992Z" fill="white"/>
    </Svg>
  )
}
export default TwitterIcon

