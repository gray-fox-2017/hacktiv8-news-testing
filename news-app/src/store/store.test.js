
import store from './configureStore';

describe('Store ', () => {
  it('should get news initial state', () => {
    const expectedNews = [];
    const actualNews = store.getState().news;

    expect(actualNews).toEqual(expectedNews);
  });

  it('should add news when ADD_NEWS action dispatched', () => {
    const newTodo = {
      id: 1,
      title: 'test',
      article: 'article',
    };
    const expectedNewsState = [newTodo];

    store.dispatch({ type: 'ADD_NEWS', payload: newTodo });
    const actualNewsState = store.getState().news;

    expect(actualNewsState).toEqual(expectedNewsState);
  });

  it('should delete a news when DELETE_NEWS action dispatched', () => {
    const newsToDeleteId = 1;
    const expectedNewsState = [];

    store.dispatch({ type: 'DELETE_NEWS', payload: newsToDeleteId });
    const actualNewsState = store.getState().news;

    expect(actualNewsState).toEqual(expectedNewsState);
  });
})
