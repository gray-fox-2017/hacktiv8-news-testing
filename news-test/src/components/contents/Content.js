import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import ListNews from './ListNews';
import AddNews from './AddNews'

class Content extends Component {
  constructor(){
    super();
    this.state = {
      news : []
    }
    this.getNews = this.getNews.bind(this)
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path="/add-news" component={()=>{
            return(
              <div>
                <AddNews />
              </div>
            )
          }}/>
          <Route path="/" component={()=>{
            return(
              <div>
                <ListNews news={this.state.news} />
              </div>
            )
          }}/>
        </Switch>
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
