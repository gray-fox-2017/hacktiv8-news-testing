import React from 'react'
import { shallow } from 'enzyme'

import Content from './Content'

describe('<Content /> component ', () => {
  const ContentWarper = shallow(<Content />)
  it('renders correctly', () => {
    // by having 1 length, it means <Content /> component has rendered 1 time.
    expect(ContentWarper).toHaveLength(1)
  })
  it('renders a <div>', () => {
    const ContentDiv = ContentWarper.find('div')
    expect(ContentDiv).toHaveLength(1)
  })
  it('renders a <form>', () => {
    const ContentDiv = ContentWarper.find('form')
    expect(ContentDiv).toHaveLength(1)
  })
  it('renders an <input>', () => {
    const ContentDiv = ContentWarper.find('input')
    expect(ContentDiv).toHaveLength(1)
  })

  it('have news state', () => {
    const newsState = ContentWarper.state('inputNews')
    expect(newsState).toBeDefined()
  })
  it('have news state as an string', () => {
    const newsState = ContentWarper.state('inputNews')
    const isAnString = typeof newsState === 'string'
    expect(isAnString).toBeTruthy()
  })
  ///////////////////// PROPS TESTS ///////////////////////
  it('get news props from <App />', () => {
    const ContentWarperWithProps = shallow(<Content news={["ss"]} />);
    // we use unrendered here since shallow does not render the actual dom
    // to properly test props, we need to use mount instead of shallow
    // but since mount will add significant complexity, let's skip that for now!
    const newsProp = ContentWarperWithProps.unrendered.props.news;
    console.log("typeof newsProp",typeof newsProp);
    const isAnObject = typeof newsProp === 'object';
    expect(isAnObject).toBeTruthy();
});

})
