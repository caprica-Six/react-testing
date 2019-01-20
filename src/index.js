import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// reducers will import reducers/index - webpack takes care of this
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App /> 
    </Provider>, 
    document.querySelector('#root')
);
