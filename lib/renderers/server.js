import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from 'components/App';

import StateApi from '../stateApi';
import config from '../config';

const serverRender = async() => {
  const { port, host } = config;
  const response = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(response.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: response.data,
  }
}

export default serverRender;
