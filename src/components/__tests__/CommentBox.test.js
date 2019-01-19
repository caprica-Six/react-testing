import React from 'react'
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

/* Test expectations with FULL DOM Enzyme method:

- Show a text area and a button 
- Users can enter input into the text area and submit 
- When the input is submitted, textarea should get emptied 
*/

it('has a text area and a button', () => {
    const wrapped = mount(<CommentBox />);

    // console.log(wrapped.find('textarea'));
    // console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});