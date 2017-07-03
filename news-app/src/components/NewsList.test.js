import React from 'react'
import { shallow } from 'enzyme'

import NewsList from './NewsList'

describe('<NewsList /> component', () => {
  const arr = [
    { id: 1, title: 'puasa setelah lebaran', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
    { id: 2, title: 'lebaran sudah lewat', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
    { id: 3, title: 'snack lebaran sudah habis', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
  ]
  const NewsListWarper = shallow(<NewsList news={arr} />)

  it('renders props news', () => {
    const newProp = NewsListWarper.unrendered.props.news
    const isAnObject = typeof newProp == 'object'
    expect(isAnObject).toBeTruthy()
  })
  ////////////// EVENTS TESTS /////////////////
  // it('deletes a news when delete button clicked', () => {
  //   const buttonToClick = NewsListWarper.find('.delete-btn').at(0)
  //   buttonToClick.simulate('click')
  //   const
  // })
})
