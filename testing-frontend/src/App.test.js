import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe('<App />', () => {
  const AppWrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(AppWrapper).toHaveLength(1);
  });

  it('renders an <img> as a logo', () => {
    const ImageLogo = AppWrapper.find('img');
    expect(ImageLogo).toHaveLength(1);
  });

  it('renders an <h5> as a web title', () => {
    const ImageLogo = AppWrapper.find('h5');
    expect(ImageLogo).toHaveLength(1);
  });
})
