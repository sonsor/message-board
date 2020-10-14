import React, { Suspense } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import state from "./state";
import configureStore from './store';
import {Loading} from "./components/Loading";
const store = configureStore(state)

render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
