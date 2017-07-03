import React from 'react';
import { shallow } from 'enzyme';

import AddNews from './AddNews';

describe('<AddNews /> Component', ()=>{
  it('renders correctly', ()=>{
    const addNewsTest = shallow(<AddNews />);
    expect(addNewsTest).toHaveLength(1);
  });

  it('renders Form ', ()=>{
    const addNewsTest = shallow(<AddNews />);
    const formTest = addNewsTest.find('Form');
    expect(formTest).toHaveLength(1);
  });

  it('renders Form Field', ()=>{
    const addNewsTest = shallow(<AddNews />);
    const formTest = addNewsTest.find('Form');
    const formFieldTest = formTest.find('FormField');
    expect(formFieldTest).toHaveLength(4)
  })

  it('renders Button', ()=>{
    const addNewsTest = shallow(<AddNews />);
    const formTest = addNewsTest.find('Form');
    const buttonSaveTest = formTest.find('Button');
    expect(buttonSaveTest).toHaveLength(1)
  })
  
});
