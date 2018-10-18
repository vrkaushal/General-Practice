import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
import './sass/App.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
