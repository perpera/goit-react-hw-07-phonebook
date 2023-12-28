import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { theme } from 'components/GlobalStyled';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
