import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App /> Component', ()=>{
  it('renders without crashing or is correctly', () => {
    const appWrapper = shallow(<App />);
    const appHeader = appWrapper.find('Header');
    const appContainer = appWrapper.find('Container');
    expect(appWrapper).toHaveLength(1);
    expect(appHeader).toHaveLength(1);
    expect(appContainer).toHaveLength(1);
  });
});
