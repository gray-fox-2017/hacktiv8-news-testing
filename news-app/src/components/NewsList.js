import React from 'react'

export default (props) => (
    <div className='container'>
      { props.news.map( newss => (
        <div key={newss.id}>
          <h2>{ newss.title }</h2>
          <p>{ newss.article }</p>
          <button
            className="delete-btn"
            onClick={() => props.removeNews(newss.id)}>
            Delete
          </button>
        </div>
      )) }
    </div>
)
