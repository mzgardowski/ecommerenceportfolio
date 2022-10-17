import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById('root');
const renderApp = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    </Provider>,
    rootElement,
  );
};

renderApp(App);
if (module?.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
