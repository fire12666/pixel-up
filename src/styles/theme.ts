import { createTheme, responsiveFontSizes } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      mode,
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};