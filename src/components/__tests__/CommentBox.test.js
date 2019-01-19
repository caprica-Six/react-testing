import React from 'react'
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

/* Test expectations with FULL DOM Enzyme method:

- Show a text area and a button 
- Users can enter input into the text area and submit 
- When the input is submitted, textarea should get emptied 
*/

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

// cleanup with jest helper afterEach() 
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});