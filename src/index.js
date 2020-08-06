import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from "./views/Home/index";
import Contact from "./views/Contact/index";
import About from "./views/About/index"
import * as serviceWorker from './serviceWorker';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contato" component={Contact} />
          <Route path="/sobre" component={About} />
          <Route path="/lucas" component={Pagina404}/>
          <Route component={Pagina404} />
          </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
