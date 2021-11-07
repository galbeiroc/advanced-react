import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from '../article/ArticleList';

const testProps = {
  articles: {
    a: { id: 'a' },
    b: { id: 'b' }
  },
  articleActions: {
    lookupAuthor: jest.fn(() => ({}))
  }
}

describe('ArticleList', () => {
  it('render correctly', () => {
    const tree = renderer.create(
      <ArticleList {...testProps} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  });
});
