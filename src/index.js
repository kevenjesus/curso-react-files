import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login'; 
import Routes from './rotas';
import ListUser from './listUser';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListUser />, document.getElementById('root'));
registerServiceWorker();
