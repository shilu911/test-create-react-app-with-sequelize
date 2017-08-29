import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Sequelize from 'sequelize';

const sequelize = new Sequelize('database_name', 'user_name', 'password', {
    host: 'host',
    dialect: 'mssql',
    encrypt: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
