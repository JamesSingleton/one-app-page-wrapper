import React from 'react';
import { shallow } from 'enzyme';

import { ComponentUnderTest as OneAppPageWrapper, loadDataAsProps } from '../../src/components/OneAppPageWrapper';

jest.mock('iguazu-holocron', () => ({
  queryModule: jest.fn((moduleName) => `queryModule result for ${moduleName}`),
}));

const Header = () => <div>Mock Header</div>;
const Footer = () => <div>Mock Footer</div>;
const MockChild = () => <div>Mock Child</div>;

describe('OneAppPageWrapper', () => {
  const { NODE_ENV } = process.env;

  afterEach(() => {
    process.env.NODE_ENV = NODE_ENV;
  });

  it('should render the correct loading', () => {
    const props = {
      loadStatus: {
        all: 'loading',
      },
      Header,
      Footer,
      children: <MockChild />,
    };
    const renderedModule = shallow(<OneAppPageWrapper {...props} />);
    expect(renderedModule).toMatchSnapshot();
  });

  it('should render the correct loaded state', () => {
    const props = {
      loadStatus: {
        all: 'complete',
      },
      Header,
      Footer,
      children: <MockChild />,
    };
    const renderedModule = shallow(<OneAppPageWrapper {...props} />);
    expect(renderedModule).toMatchSnapshot();
  });
});

describe('loadDataAsProps', () => {
  const dispatch = jest.fn((x) => x);
  const ownProps = {
    route: {
      header: <Header />,
      footer: <Footer />,
    },
  };
  const loadFuncMap = loadDataAsProps({ store: { dispatch }, ownProps });

  beforeEach(() => dispatch.mockClear());

  it('should load the Header', () => {
    const headerAsyncState = loadFuncMap.Header();
    expect(dispatch).toHaveBeenCalledWith(headerAsyncState);
  });

  it('should load the Footer', () => {
    const footerAsyncState = loadFuncMap.Footer();
    expect(dispatch).toHaveBeenCalledWith(footerAsyncState);
  });
});
