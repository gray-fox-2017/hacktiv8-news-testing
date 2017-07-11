export const addNews = (newArticle) => {
  return {
    type: 'ADD_NEWS',
    payload: newArticle,
  }
}

export const deleteNews = (id) => {
  return {
    type: 'DELETE_NEWS',
    payload: id,
  }
}
