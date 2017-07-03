import React from 'react';

export default class NewsCard extends React.Component {
  render () {
    return (
      <div className="col s12 m4" key={this.props.news._id}>
        <div className="card">
          <div className="card-image">
            { this.props.news.multimedia.length !== 0 ?
              <img src={`https://nytimes.com/${this.props.news.multimedia[0].url}`} alt="credit: NYT" /> :
              <img src="https://dummyimage.com/300x200" alt="no-pic"/>
            }
            <h5 className="card-title">{this.props.news.headline.main}</h5>
          </div>
          <div className="card-content">
            <p className="content-card">{this.props.news.lead_paragraph}</p>
          </div>
        </div>
      </div>
    )
  }
}
