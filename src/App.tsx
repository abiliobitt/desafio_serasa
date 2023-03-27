import { ComponentsProvider } from 'web-components'
import Routes from './Routes';

function App() {
  return (
    <ComponentsProvider>
      <Routes />
    </ComponentsProvider>
  );
}

export default App;
