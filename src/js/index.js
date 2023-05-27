//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import { ReactDOM } from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));



//include your index.scss file into the bundle
import "../styles/index.css";

serviceWorker.unregister(); 





