import React, { Component } from 'react';

import { Button,  Form } from 'semantic-ui-react'


class AddNews extends Component {
  render(){
    return(
      <Form>
        <Form.Field>
          <label>Author</label>
          <input placeholder='Author' />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <Form.TextArea label='Description' placeholder='Tell us more about Description...' />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' />
        </Form.Field>
        <Button type='submit'>Save</Button>
      </Form>
    )
  }
}
export default AddNews
