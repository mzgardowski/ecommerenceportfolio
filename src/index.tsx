import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const renderApp = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
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
