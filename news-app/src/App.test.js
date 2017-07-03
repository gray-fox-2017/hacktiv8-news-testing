import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import App from './App';

describe('<App> component ', () => {
  const appWarper = shallow(<App />)
  ////////////////// OUTPUT TESTS //////////////////
  it('renders correctly', () => {
    // by having 1 length, it means <App /> component has rendered 1 time
    expect(appWarper).toHaveLength(1)
  })
  it('renders 2 div', () => {
    const appDiv = appWarper.find('div')
    expect(appDiv).toHaveLength(2)
  })
  it('renders an img', () => {
    const appDiv = appWarper.find('img')
    expect(appDiv).toHaveLength(1)
  })
  it('renders a h2', () => {
    const appDiv = appWarper.find('h2')
    expect(appDiv).toHaveLength(1)
  })
  ////////////////// STATE TESTS ////////////////////
  it('have news state', () => {
    const newsState = appWarper.state('news')
    expect(newsState).toBeDefined()
  })
  it('have news state as an object', () => {
    const newsState = appWarper.state('news')
    const isAnObject = typeof newsState === 'object'
    expect(isAnObject).toBeTruthy()
  })
  //////////////// EVENTS TESTS //////////////////
  it('adds a new news to the state when addNews function called', () => {
    appWarper.instance().addNews('newArticle')
    const todoState = appWarper.state('news')
    expect(todoState).toHaveLength(4)
  })
  it('remove a news to the state when removeNews function called', () => {
    const id = 1
    appWarper.instance().removeNews(id)
    const todoState = appWarper.state('news')
    expect(todoState).toHaveLength(3)
  })

})
