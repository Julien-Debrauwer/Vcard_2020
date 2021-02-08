import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import Projects from './components/Projects';
import reportWebVitals from './reportWebVitals';


import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom"


export const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/projets" component={Projects} />
      </Switch>
    </HashRouter>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
