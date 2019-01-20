// as Redux tests are fialing, we have to extracta  helper function and extract the Provider in this Root.js

import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from "redux";
// reducers will import reducers/index - webpack takes care of this
import  reducers from 'reducers';

export default (props) => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    )
}