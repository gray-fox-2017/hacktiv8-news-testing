import React from 'react';
import News from './News';

import { shallow } from 'enzyme';

describe('<News />', () => {
  const initialState = {
    listNews: null,
  }
  const data = [{
      headline: "CNN, Chris Christie, Tesla: Your Monday Briefing",
      multimedia: [{
        url: "images/2017/07/04/world/03USBriefing-Wimbledon/04USBriefing-Wimbledon-articleLarge.jpg",
      }],
      lead_paragraph: "Welcome to second edition of the Smarter Living newsletter.",
      _id: "asdgekw"
    }]
  const NewsWrapper = shallow(<News state={initialState} />);

  it('should render without crashing', () => {
    expect(NewsWrapper).toHaveLength(1);
  });

  it('should render loading.. sign when fetching data', () => {
    const NewsWrapper = shallow(<News />);
    const LoadingWrapper = NewsWrapper.find('.loading')
    expect(LoadingWrapper).toHaveLength(1);
  });

  it('should get data form api', () => {
    NewsWrapper.instance().setData(data)
    expect(NewsWrapper.state('listNews')).toEqual(data)
  })

  it('should get one data "dummy" form api', () => {
    NewsWrapper.instance().setData(data)
    expect(NewsWrapper.state('listNews')).toHaveLength(1)
  })

  it('should render a Title', () => {
    const TitleWrapper = NewsWrapper.find('h5')
    expect(TitleWrapper).toHaveLength(1);
  });

})
