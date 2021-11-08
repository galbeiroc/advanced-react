import React from 'react';

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const styles = {
  article: {
    paddingBottom: 10,
    paddingBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontsize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20
  }
}

const Article = (props) => {
  const { article, store } = props;

  const author = store.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <h3 style={styles.title}>{article.title}</h3>
      <span style={styles.date}>{dateDisplay(article.date)}</span>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <p style={styles.body}>{article.body}</p>
    </div>
  )
}

export default Article;
