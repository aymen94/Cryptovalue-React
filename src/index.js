import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './navigation';
render(
 <BrowserRouter>
    <Navigation/>
</BrowserRouter>,
 document.getElementById('root'));
