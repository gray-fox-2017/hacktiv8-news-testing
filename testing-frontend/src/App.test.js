import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

describe('<App />', () => {
  it('renders without crashing', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper).toHaveLength(1);
  });
})
