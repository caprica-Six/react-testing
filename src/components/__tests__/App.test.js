import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App';

it('shows a comment box', () => {
    // fake div that exists only inside the memory with JSDOM (react by default)
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Looks inside the fake div
    // Checks to see if the CommentBox is in there
    //console.log(div.innerHTML);

    //make sure the COmmentBox exists
    expect(div.innerHTML).toContain('Comment Box');

    // cleanup after the test runs
    ReactDOM.unmountComponentAtNode(div);
});
