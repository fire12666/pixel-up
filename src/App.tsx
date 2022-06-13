import { AppClient } from './clients'
import Authentication from './components/Authentication';
import Session from './components/Session';
import { AppContext } from './contexts';


function App() {
  const appClient = new AppClient();
  appClient.user = null;

  return (
    <AppContext.Provider value={appClient}>
      { appClient.user ? <Session /> : <Authentication /> }
    </AppContext.Provider >
  )
}

export default App;
