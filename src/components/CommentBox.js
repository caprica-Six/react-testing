import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState ({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        // 1. make sure form does not try to submit itself
        event.preventDefault();

        // 2. Clear out text once form is submitted
        // 3. Call an action creatior  - REDUX.
        this.props.saveComment(this.state.comment);
        
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

export default connect(null, actions)(CommentBox);