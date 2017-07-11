import newsReducer, { addNews, deleteNews } from './newsReducer'

describe('News reducer function', () => {
  it('addNews fungction should add one more news to news', () => {
    const news = []
    const newArticle = {
      id: 4,
      title: 'test',
      article: 'article',
    }
    const expectedNewsLength = news.length +1

    const addedNews = addNews(news, newArticle)
    expect(addedNews.length).toEqual(expectedNewsLength)
  })

  it('deleteNews function should remove one news', () => {
    const news = [{
      id: 4,
      title: 'test',
      article: 'article',
    }];
    const newsToDeleteId = 4;
    const expectedNewsLength = news.length - 1;

    const deletedNews = deleteNews(news, newsToDeleteId);
    expect(deletedNews.length).toEqual(expectedNewsLength);
  });
})

describe('News reducer based on actions ', () => {
  it('should add new news when ADD_NEWS dispatched', () => {
    const initialState = [];
    const newNews = {
      id: 4,
      title: 'test',
      article: 'article',
    };
    const expectedState = initialState.concat(newNews);

    const action = { type: 'ADD_NEWS', payload: newNews };
    const actualState = newsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should delete a news when DELETE_NEWS dispatched', () => {
    const initialState = [
      {
        id: 1,
        title: 'test',
        article: 'article',
      },
      {
        id: 2,
        title: 'test 2',
        article: 'article',
      },
    ];
    const newsToDeleteId = 1;
    const expectedState = initialState.filter(news => news.id !== newsToDeleteId);

    const action = { type: 'DELETE_NEWS', payload: newsToDeleteId };
    const actualState = newsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
