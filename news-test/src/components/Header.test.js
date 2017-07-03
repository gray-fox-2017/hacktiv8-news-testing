import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header /> Component', ()=>{
  it('renders without crashing', () => {
    const headerComponent = shallow(<Header />);
    const logoReact = headerComponent.find('img');
    const titleApp = headerComponent.find('h3');

    expect(headerComponent).toHaveLength(1);
    expect(logoReact).toHaveLength(1);
    expect(titleApp).toHaveLength(1);

  });
});
