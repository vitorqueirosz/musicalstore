import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

export const GlobalStyles: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Rowdies Light';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/rowdies-v5-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Rowdies Regular';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/rowdies-v5-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Rowdies Bold';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/rowdies-v5-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins Regular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins Medium';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-500.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

   ${({ theme }) => css`
     &::-webkit-scrollbar,
     &::-webkit-scrollbar-thumb {
       border-radius: ${theme.borderRadius.xs};
     }

     &::-webkit-scrollbar {
       width: 4px;
     }

     &::-webkit-scrollbar-track {
       -webkit-box-shadow: inset 0 0 6px ${theme.colors.lightGray};
     }

     &::-webkit-scrollbar-thumb {
       background-color: ${theme.colors.gray};
     }
   `}

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family.primary};
      background: ${theme.colors.mainBg};
      font-size: ${theme.font.sizes.md};
    `}
  }

  html {
    font-size: 62.5%;
  }
`;
