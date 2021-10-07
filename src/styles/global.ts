import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

export const GlobalStyles: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 300;
    src: local('Rowdies Light'),
      url('/fonts/rowdies-v5-latin-300.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 400;
    src: local('Rowdies Regular'),
      url('/fonts/rowdies-v5-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 700;
    src: local('Rowdies Bold'),
      url('/fonts/rowdies-v5-latin-700.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'),
      url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: local('Poppins Medium'),
      url('/fonts/poppins-v15-latin-500.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }
`;
