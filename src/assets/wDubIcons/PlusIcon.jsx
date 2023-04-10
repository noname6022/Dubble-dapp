import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    width: 1vw;
    height: 1vmin;
    `
export const PlusIcon = () => {
  return (
    <Svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="6.5" x2="13" y2="6.5" stroke="black"/>
    <line x1="6.5" y1="13" x2="6.5" stroke="black"/>
    </Svg>
  )
}
export default PlusIcon
