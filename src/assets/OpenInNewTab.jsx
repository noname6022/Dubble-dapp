
import React from 'react'
import styled from 'styled-components';
const Svg = styled.svg`
    width: 2vw;
    height: 2.6vmin;
    margin-left: 0.6vw;
`

export const OpenInNewTab = () => {
  return (
<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 0.75V3.25H18.9875L6.7 15.5375L8.4625 17.3L20.75 5.0125V9.5H23.25V0.75M20.75 20.75H3.25V3.25H12V0.75H3.25C2.58696 0.75 1.95107 1.01339 1.48223 1.48223C1.01339 1.95107 0.75 2.58696 0.75 3.25V20.75C0.75 21.413 1.01339 22.0489 1.48223 22.5178C1.95107 22.9866 2.58696 23.25 3.25 23.25H20.75C21.413 23.25 22.0489 22.9866 22.5178 22.5178C22.9866 22.0489 23.25 21.413 23.25 20.75V12H20.75V20.75Z" fill="#8A79CE"/>
</Svg>
  )
}

export default OpenInNewTab

