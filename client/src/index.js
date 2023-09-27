import React from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App';
import './Components/css/loginStyle.css'
import {BrowserRouter} from 'react-router-dom'

const el =document.getElementById('root');
const root =ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
<App/></BrowserRouter>)