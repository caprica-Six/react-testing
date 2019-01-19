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

// groups together some common behaviour, avoids repitition
describe('the text area', () => {
    beforeEach(()=> {
        wrapped.find('textarea').simulate('change', {
            // mock object
            target: { value: 'new comment' }
        });

        // force component to re-render as setState() is asynchronous and does not re-render instantly.
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        // assertion
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    /* When the input is submitted, textarea should get emptied */

    it('when form is submitted text area gets empty', () => {
        // simulate the submit event on the form not click event on the button 
        wrapped.find('form').simulate('submit');
        // force update
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});