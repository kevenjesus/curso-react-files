import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login'; 
import Routes from './rotas';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
