import React from 'react';

import './styles.css';

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, actions } = props;

  const author = actions.lookupAuthor(article.authorId);

  return (
    <div className="article">
      <h3 className="title">{article.title}</h3>
      <span className="date">{dateDisplay(article.date)}</span>
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
