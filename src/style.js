import styled, { css } from 'styled-components';

/**
 *
 * Variables
 * ---
 */

export const spacing = {
  full: '1rem',
  half: '0.5rem',
  double: '2rem',
};

export const vColors = {
  blue: '#0074D9',
  white: '#FFFFFF',
  black: '#111111',
};

export const vFontFamily = css`
  font-family: 'Nunito Sans', sans-serif;
`;

export const vFontBold = css`
  font-weight: 900;
`;

const sizes = {
  mobileSmall: 320,
  mobileLarge: 425,
  tablet: 768,
  desktopSmall: 1024,
  desktopLarge: 1440,
};

/**
 *
 * Helper functions
 * ---
 */

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
   @media (min-width: ${sizes[label]}px) {
     ${css(...args)}
   }
  `

  return acc
}, {})

/**
 *
 * Styles
 * ---
 */

export const sReset = css`
  * {
    all: unset;
    box-sizing: border-box;
  }

  title, script, style {
    display: none !important;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    overflow-y: scroll;
  }

  h1, h2. h3, p {
    margin: 0;
  }
`;

/**
 *
 * Blocks
 * ---
 */

export const Panel = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${vColors.white};
  display: block;
`;

export const PanelBlue = styled(Panel)`
  background-color: ${vColors.blue};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${media.desktopSmall`
    height: 100%;
  `}
`;

export const ContainerPadded = styled(Container)`
  padding: ${spacing.full};
`;

export const Hero = styled.header`
  width: 100%;
  display: block;
  background-color: ${vColors.blue};
  padding: ${spacing.full};
`;

export const HeroCopy = styled.h1`
  font-size: 136px;
  text-align: center;
  display: block;
  color: ${vColors.white};
  ${vFontBold}
  ${vFontFamily}

  ${media.tablet`
    font-size: 276px;
  `}
`;

export const SubheaderCopy = styled.h3`
  font-size: 18px;
  text-align: center;
  display: block;
  ${vFontFamily}

  ${media.tablet`
    font-size: 24px;
  `}
`;

export const SubheaderCopyBold = styled(SubheaderCopy)`
  font-size: 24px;
  text-transform: uppercase;
  ${vFontBold}

  ${media.tablet`
    font-size: 30px;
  `}
`;

export const CenterPosition = styled.div`
  ${media.desktopSmall`
    display: block;
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
  `}
`;

export const CenterOffsetPosition = styled.div`
  margin-top: 25%;
  display: block;

  ${media.desktopSmall`
    margin-top: 50%;
  `}
`;

export const ListHeaderCopy = styled(SubheaderCopyBold)`
  text-align: left;
  color: ${vColors.blue};
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 4px;
    background-color: ${vColors.blue};
  }
`;
