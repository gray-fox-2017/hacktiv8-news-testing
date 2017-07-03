import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content'

describe('<Content /> Component ', ()=>{
  it('renders correctly ', ()=>{
    const content = shallow(<Content />);
    expect(content).toHaveLength(1)
  })

  it('renders content based on initial state ', ()=>{
    const content = shallow(<Content />);
    const newsState = content.state('news');
    expect(newsState).toHaveLength(0)
  })

  it('renders content based on state news', ()=>{
    const content = shallow(<Content />);
    const newsResponse = {
      "author": "Jon Russell",
      "title": "Microsoft is laying off ‘thousands’ of staff in a major global sales reorganization",
      "description": "Microsoft is poised to layoff thousands of employees worldwide in a move to reorganize its salesforce. A source with knowledge of the planned downsizing told..",
      "url": "https://techcrunch.com/2017/07/02/microsoft-is-laying-off-thousands-of-staff/",
      "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-513711216.jpg?w=764&h=400&crop=1",
      "publishedAt": "2017-07-02T17:36:52Z"
    }

    content.instance().getNews(newsResponse);
    const newsState = content.state('news');
    expect(newsState).toHaveLength(1)
  });

})
