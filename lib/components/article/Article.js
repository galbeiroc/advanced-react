import React from 'react';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <h3>{article.title}</h3>
      <span>{article.date}</span>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <p>{article.body}</p>
    </div>
  )
}

export default Article;
