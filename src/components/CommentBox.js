import React, { Component } from 'react'

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState ({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        // 1. make sure form does not try to submit itself
        event.preventDefault();

        // 2. Clear out text once form is submitted
        // TODO - call an action creatior  - REDUX.
        
        this.setState({ comment: '' });
    }

    render() {
        return  (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;