

import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    width: 1.4vw;
    height: 1vmin;
`;

export const DropdownArrow = ({ className }) => {
  return (
    <Svg className={className} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.00005 6.55C5.86672 6.55 5.73738 6.525 5.61205 6.475C5.48672 6.425 5.38272 6.35833 5.30005 6.275L0.700048 1.675C0.516715 1.49167 0.425049 1.25833 0.425049 0.974999C0.425049 0.691666 0.516715 0.458333 0.700048 0.275C0.883382 0.0916663 1.11672 0 1.40005 0C1.68338 0 1.91672 0.0916663 2.10005 0.275L6.00005 4.175L9.90005 0.275C10.0834 0.0916663 10.3167 0 10.6 0C10.8834 0 11.1167 0.0916663 11.3 0.275C11.4834 0.458333 11.575 0.691666 11.575 0.974999C11.575 1.25833 11.4834 1.49167 11.3 1.675L6.70005 6.275C6.60005 6.375 6.49172 6.446 6.37505 6.488C6.25838 6.53 6.13338 6.55067 6.00005 6.55Z" fill="black"/>
    </Svg>
  )
}
