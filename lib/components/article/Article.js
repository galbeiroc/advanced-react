import React from 'react';
import ProtoTypes from 'prop-types';
import storeProvider from '../HOC/storeProvider';

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
  const { article, author } = props;

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
};

Article.protoTypes = {
  article: ProtoTypes.shape({
    id: ProtoTypes.string.isRequired,
    date: ProtoTypes.string.isRequired,
    title: ProtoTypes.string,
    authorId: ProtoTypes.string.isRequired, 
    body: ProtoTypes.string,
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  }
};

export default storeProvider(extraProps)(Article);
