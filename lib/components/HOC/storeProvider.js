import React from 'react';
import ProtoTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {

  return class extends React.Component {
    static displayName = `${Component.name}Wrapper`;
    static contextTypes = {
      store: ProtoTypes.object,
    }
    render() {
      return <Component {...this.props} {...extraProps(this.context.store, this.props)} store={this.context.store} />
    }
  }
};

export default storeProvider;
