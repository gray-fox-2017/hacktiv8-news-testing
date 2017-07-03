import React from 'react';
import NewsCard from './NewsCard';

import { shallow } from 'enzyme';

describe('<NewsCard />', () => {
  const initialState = {
    headline: "CNN, Chris Christie, Tesla: Your Monday Briefing",
    multimedia: [{
      url: "images/2017/07/04/world/03USBriefing-Wimbledon/04USBriefing-Wimbledon-articleLarge.jpg",
    }],
    lead_paragraph: "Welcome to second edition of the Smarter Living newsletter."
  }
  const NewsCardWrapper = shallow(<NewsCard news={initialState} />);

  it('should render without crashing', () => {
    expect(NewsCardWrapper).toHaveLength(1);
  });

  it('should render a Title', () => {
    const TitleWrapper = NewsCardWrapper.find('.card-title')
    expect(TitleWrapper).toHaveLength(1);
  });

  it('should render an image for thumbnail preview', () => {
    const ImageWrapper = NewsCardWrapper.find('img')
    expect(ImageWrapper).toHaveLength(1);
  })

  it('should render content excerpt for preview', () => {
    const ContentExcerptWrapper = NewsCardWrapper.find('.content')
    expect(ContentExcerptWrapper).toHaveLength(1);
  })

  it('should render call-to-action link', () => {
    const CallToActionWrapper = NewsCardWrapper.find('.card-action')
    expect(CallToActionWrapper).toHaveLength(1);
  })

})
