import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './navigation';
import './style/bootstrap.min.css';
import './style/style.css';
render(
 <BrowserRouter>
    <Navigation/>
</BrowserRouter>,
 document.getElementById('root'));
