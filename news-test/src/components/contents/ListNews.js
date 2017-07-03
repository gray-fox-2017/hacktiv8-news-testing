import React from 'react'
import { Header, Divider, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ListNews = (props) => {
  if(props){
    return(
      <div>
        <Button primary style={{marginTop:'10px', marginBottom:'10px'}}>Add News</Button>
      {
        props.news.map((newInfo, index) => {
          return(
            <div key={index}>
              <Header as='h2'>{newInfo.title}</Header>
                <p>{newInfo.description}</p>
                <a href={newInfo.url}>{newInfo.url}</a> <br />
              <small>{newInfo.author} || {newInfo.publishedAt}</small> <br />
              <Button color='red' style={{margin:'10px'}}>Delete</Button>
              <Button color='yellow' style={{margin:'10px'}}>Edit</Button>
              <Divider />
            </div>
          )
        })
      }
      </div>
    )
  }else{
    return(
      <div>
        <div>Loading ... </div>
      </div>
    )
  }
}
export default ListNews;
