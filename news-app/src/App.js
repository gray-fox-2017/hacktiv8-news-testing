import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Content } from './components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [
        { id: 1, title: 'puasa setelah lebaran', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
        { id: 2, title: 'lebaran sudah lewat', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
        { id: 3, title: 'snack lebaran sudah habis', article: 'Candy halvah croissant sugar plum donut chocolate cheesecake chocolate bar dessert. Brownie chocolate dessert caramels topping caramels. Pudding bonbon sugar plum soufflé liquorice sesame snaps donut toffee. Halvah jelly liquorice toffee. Dragée cheesecake cookie chocolate candy muffin chupa chups gummies muffin. Tiramisu gummies bear claw gummies cotton candy lemon drops icing powder. Pastry gingerbread gummies bonbon halvah marshmallow halvah. Ice cream cupcake tootsie roll pie sweet.'},
      ]
    }

    this.addNews = this.addNews.bind(this)
    this.removeNews = this.removeNews.bind(this)
  }

  removeNews(id) {
    this.setState({
      news: this.state.news.filter(newss => newss.id !== id),
    })
  }

  addNews(newArticle) {
    const { news } = this.state
    const latestId = news[news.length -1].id
    const newNews = {
      id: latestId + 1,
      title: 'unTitle',
      article: newArticle,
    }

    this.setState({
      news: news.concat(newNews),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Today News</h2>
        </div>

        <Content news={ this.state.news } addNews={ this.addNews } removeNews={ this.removeNews } />
      </div>
    );
  }
}

export default App;
