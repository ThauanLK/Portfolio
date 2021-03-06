import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from "./views/Home/index";
import * as serviceWorker from './serviceWorker';
import "./constants/reset.css";
import Lucas from "./views/Lucas/index";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/lucas" component={Lucas} exact/>
          <Route component={Pagina404} />
          </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
