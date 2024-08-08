// 'use client'

// import { createTheme } from '@mantine/core';

// const theme = createTheme({
//   colors: {
//     dark: ['#04201D'],
//   },
// });

// export default theme;

'use client';

import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    dark: ['#04201D'],
  },
  components: {
    NavLink: {
      styles: (theme) => ({
        root: {
          color: '#04201D',
          borderRadius: '16px',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: theme.colors.dark[0],
          },
        },
      }),
    },
  },
});

export default theme;
