export default {
  grid: {
    container: '123.8rem',
    gutter: '3.2rem',
  },
  borderRadius: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
  },
  font: {
    family: {
      primary:
        "Poppins Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secondary:
        "Rowdies Light, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      '2xs': '1rem',
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      '2lg': '2.2rem',
      xlg: '2.0rem',
      '2xlg': '2.8rem',
      hg: '5.2rem',
    },
  },
  colors: {
    primary: '#5200FF',
    secondary: '#07CD6E',
    mainBg: '#1D1D1D',
    lightBg: '#F1F1F1',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#E0E0E0',
    gray: '#4A4A4A',
    red: '#FF6347',
  },
  spacings: {
    '2xs': '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xlg: '4.8rem',
    '2xlg': '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
