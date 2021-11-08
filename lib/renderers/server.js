import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from 'components/App';

import DataApi from '../dataApi';
import config from '../config';

const serverRender = async() => {
  const { port, host } = config;
  const response = await axios.get(`http://${host}:${port}/data`);
  const data = new DataApi(response.data);

  const initialData = {
    articles: data.getArticles(),
    authors: data.getAuthors(),
  };

  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
    initialData,
  }
}

export default serverRender;
