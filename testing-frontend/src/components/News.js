import React from 'react';
import Axios from 'axios';

import NewsCard from './NewsCard'

export default class News extends React.Component {
  constructor() {
    super()
    this.state = {
      listNews: null,
    }
  }

  getData = (loc) => {
    Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
      params: {
        'api-key': "6bfa079ba439477ead940b11ec70b476",
        'fq': loc,
        'sort': 'newest',
      }
    })
      .then ((response) => {
        let news = response.data.response.docs
        let latestNews = news.slice(0, 9)
        this.setData(latestNews);
      })
      .catch ((error) => {
        console.log(error);
      })
  }

  setData = (data) => {
    this.setState({
      listNews: data,
    })
    console.log(this.state.listNews);
  }

  componentWillMount () {
    this.getData('US')
  }

  render() {
    if(this.state.listNews !== null) {
      return (
        <div className="container">
          <h5 style={{textAlign: 'left'}}>Latest News</h5>
          <div className="row">
            { this.state.listNews.map(news => {
              return (
                <NewsCard news={news} />
              )
            })}
          </div>
        </div>
      )
    }
    return (
      <h3>Loading...</h3>
    )
  }
}
