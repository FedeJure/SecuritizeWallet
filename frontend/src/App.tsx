import 'semantic-ui-css/semantic.min.css'
import { ErrorBoundary } from "react-error-boundary"
import { Provider } from 'react-redux';
import { Button, Header, Icon, Segment } from "semantic-ui-react";

import { store } from "./store"
import Home from './screens/Home/Home';

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }: any) => {
  return (
<Segment placeholder style={{minHeight: "100vh"}}>
    <Header icon>
      <Icon name="bug" />
      Ups! Unexpected Error. Please update
    </Header>
    <Button primary onClick={resetErrorBoundary}>Recargar</Button>
  </Segment>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </ErrorBoundary>

  );
}

export default App;
