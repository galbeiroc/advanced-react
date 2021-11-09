import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ArticleList from '../article/ArticleList';

const testProps = {
  articles: {
    a: { id: 'a' },
    b: { id: 'b' }
  },
}

describe('ArticleList', () => {
  it('render correctly', () => {
    const wrapper = new ShallowRenderer();
    wrapper.render(<ArticleList {...testProps} />);
    const result = wrapper.getRenderOutput();

    expect(result).toMatchSnapshot();
    expect(result.props.children.length).toBe(2);
  });
});
