import React from 'react';
import { connectAsync } from 'iguazu';
import { queryModule } from 'iguazu-holocron';
import {
  shape, func, string, node,
} from 'prop-types';

const OneAppPageWrapper = ({
  loadStatus, Header, Footer, children,
}) => {
  if (loadStatus.all === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

OneAppPageWrapper.propTypes = {
  loadStatus: shape({
    all: string,
  }).isRequired,
  Header: func.isRequired,
  Footer: func.isRequired,
  children: node.isRequired,
};

const loadDataAsProps = ({ store: { dispatch }, ownProps }) => {
  const { header, footer } = ownProps.route;

  return {
    Header: () => dispatch(queryModule(header)),
    Footer: () => dispatch(queryModule(footer)),
  };
};

export default connectAsync({ loadDataAsProps })(OneAppPageWrapper);
