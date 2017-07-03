import React from 'react';
import { shallow } from 'enzyme';

import ListNews from './ListNews';
describe('<ListNews /> Component', ()=>{
  //TEST PROPS
    it('renders props news', ()=>{
      const newsResponse = [{
        "author": "Jon Russell",
        "title": "Microsoft is laying off ‘thousands’ of staff in a major global sales reorganization",
        "description": "Microsoft is poised to layoff thousands of employees worldwide in a move to reorganize its salesforce. A source with knowledge of the planned downsizing told..",
        "url": "https://techcrunch.com/2017/07/02/microsoft-is-laying-off-thousands-of-staff/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-513711216.jpg?w=764&h=400&crop=1",
        "publishedAt": "2017-07-02T17:36:52Z"
      }]
      const listNewsProps = shallow(<ListNews news={newsResponse} />);

      const newsProp = listNewsProps.unrendered.props.news
      const isAObject = typeof newsProp === 'object';
      expect(isAObject).toBeTruthy();
    });
});
