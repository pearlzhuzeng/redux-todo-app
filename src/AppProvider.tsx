import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'redux/reducers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from 'App';

const theme = createMuiTheme({});

const store = createStore(reducers);

function AppProvider() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

export default AppProvider;
