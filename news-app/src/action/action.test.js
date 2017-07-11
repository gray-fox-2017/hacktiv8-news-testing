import * as actions from './index'

describe('News actions ', () => {
  it('should create an ADD_NEWS action', () => {
    const newArticle = 'test'
    const expectedAction = { type: 'ADD_NEWS', payload: newArticle }
    const actualAction = actions.addNews(newArticle)

    expect(actualAction).toEqual(expectedAction)
  })
  it('should create a DELETE_NEWS action', () => {
    const id = 1
    const expectedAction = { type: 'DELETE_NEWS', payload: id }
    const actualAction = actions.deleteNews(id)

    expect(actualAction).toEqual(expectedAction)
  })
})
