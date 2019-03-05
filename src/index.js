import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import IRouter from "./router";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<IRouter />, document.getElementById("root"));
serviceWorker.unregister();


