import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
    // shallow renders just the component, none of its children
    // use wrapped as per the documentation, same as const component = shallow();
    // ref: https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html

    const wrapped = shallow(<App />);

    // make an expectation & find all the instances of the CommentBox inside
    expect(wrapped.find(CommentBox).length).toEqual(1);
    
});

it('shows a comment list', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
});