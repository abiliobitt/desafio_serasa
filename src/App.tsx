import { ComponentsProvider } from 'web-components'
import Providers from './providers';
import Routes from './Routes';

function App() {
  return (
    <Providers>
      <ComponentsProvider>
        <Routes />
      </ComponentsProvider>
    </Providers>
  );
}

export default App;
