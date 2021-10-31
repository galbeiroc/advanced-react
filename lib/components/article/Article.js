import React from 'react';

import './styles.css';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div className="article">
      <h3 className="title">{article.title}</h3>
      <span className="date">{article.date}</span>
      <div className="author">
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <p className="body">{article.body}</p>
    </div>
  )
}

export default Article;
