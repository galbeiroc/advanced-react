import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from 'components/App';

import DataApi from '../dataApi';
import config from '../config';

const serverRender = async() => {
  const { port, host } = config;
  const response = await axios.get(`http://${host}:${port}/data`);
  const store = new DataApi(response.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: response.data,
  }
}

export default serverRender;
