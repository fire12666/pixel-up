import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { routes } from '../../config';
import { Route as AppRoute } from '../../types'
import { ThemeModeContext } from '../../contexts';
import { getAppTheme } from '../../styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../../utils/constants';
import { Layout } from './Layout';
import { PageDefault } from './PageDefault';


function Session() {
  const [mode, setMode] = useState<typeof DARK_MODE_THEME | typeof LIGHT_MODE_THEME>(DARK_MODE_THEME);

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME))
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path ? route.path : "/"} element={route.component ? <route.component /> : <PageDefault />} />
  );

  return (
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Layout>
              <Routes>
                {
                  routes.map((route: AppRoute) =>
                    route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                  )
                }
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
  );
}

export default Session;
