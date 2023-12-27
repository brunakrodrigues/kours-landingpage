// theme.js ou theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#017EF4',
    text: '#141924',
    gray: {
      500: '#616161',
      600: '#7B7E84',
      300: '#E6E6E6',
      400: '#AEAEAE',
      200: '#BDC8D3',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
});

export default theme;
