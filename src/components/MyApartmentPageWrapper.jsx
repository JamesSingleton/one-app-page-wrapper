import React from 'react';
import { connectAsync } from 'iguazu';
import { queryModule } from 'iguazu-holocron';
import {
  shape, func, string, node,
} from 'prop-types';

const MyApartmentPageWrapper = ({
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

MyApartmentPageWrapper.propTypes = {
  loadStatus: shape({
    all: string,
  }).isRequired,
  Header: func.isRequired,
  Footer: func.isRequired,
  children: node.isRequired,
};

const loadDataAsProps = ({ store: { dispatch } }) => ({
  Header: () => dispatch(queryModule('my-apartment-header')),
  Footer: () => dispatch(queryModule('my-apartment-footer')),
});

export default connectAsync({ loadDataAsProps })(MyApartmentPageWrapper);
