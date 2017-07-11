const initialState = []

export const addNews = (news, newNews) => {
  return news.concat(newNews)
}

export const deleteNews = (news, id) => {
  return news.filter(news => news.id !== id)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEWS': return addNews(state, action.payload)
    case 'DELETE_NEWS': return deleteNews(state, action.payload)
    default: return state
  }
}
