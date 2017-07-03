import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';


class Content extends Component {
  constructor(){
    super();
    this.state = {
      news : []
    }
  }

  render(){
    return(
      <div>
        {this.state.news.map(newInfo => (
          <div key={newInfo.publishedAt}>
            <Header as='h2'>{newInfo.title}</Header>
              <p>{newInfo.description}</p>
              <a href={newInfo.url}>{newInfo.url}</a> <br />
              <small>{newInfo.author} || {newInfo.publishedAt}</small>
            <Divider />
        </div>
        ))}
      </div>
    )
  }

  getNews(news){
    this.setState({
      news : this.state.news.concat(news),
    })
  }

  getNewsFromNewsApi(){
    axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56`)
    .then(response=>{
      this.getNews(response.data.articles)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  componentDidMount(){
  this.getNewsFromNewsApi()
  }
}

export default Content;
