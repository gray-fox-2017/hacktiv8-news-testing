import React from 'react'
// import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button } from 'react-bootstrap';

import NewsList from './NewsList'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputNews: '',
    }
  }

  setInputNews(inputNews) {
    this.setState({
      inputNews,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={
          e => {
            e.preventDefault()
            this.props.addNews(this.state.inputNews)
            this.setInputNews('')
          }
        }>
          <input
            type='text'
            onChange={ e => this.setInputNews(e.target.value) }
            value={this.state.inputNews}
            placeholder='input new News'
            style={{ padding: 20, fontSize: 20, border: 1, borderRadius: 10, }}
          />
        </form>

        <NewsList news={ this.props.news } removeNews={ this.props.removeNews }/>
      </div>
    )
  }
}



// <Form horizontal onSubmit={
//   e => {
//     e.preventDefault()
//     this.props.addNews(this.state.inputNews)
//     this.setInputNews('')
//   }
// }>
// <FormGroup controlId="formHorizontalTitle">
// <Col componentClass={ControlLabel} sm={2}>
// Title
// </Col>
// <Col sm={10}>
// <FormControl type="text" placeholder="Title" />
// </Col>
// </FormGroup>
//
// <FormGroup controlId="formHorizontalArticle">
// <Col componentClass={ControlLabel} sm={2}>
// Article
// </Col>
// <Col sm={10}>
// <FormControl type="text" placeholder="Article" />
// </Col>
// </FormGroup>
//
// <FormGroup>
// <Col smOffset={2} sm={10}>
// <Button type="submit">
// Submit
// </Button>
// </Col>
// </FormGroup>
// </Form>
