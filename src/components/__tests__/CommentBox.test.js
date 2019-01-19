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

// Show a text area and a button 
it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

/* Textarea

- Find the textarea element 
- Simulate a 'change event' itself, not the onChange() callback
- Provide a fake event object 
- Force the component to udpate 
- Assert that the textarea's value has changed

*/

it('has a textarea that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        // mock object
        target: { value: 'new comment' }
    });

    // force component to re-render as setState() is asynchronous and does not re-render instantly.
    wrapped.update();

});