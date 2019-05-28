import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import BadgeNew  from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, 
    container);
