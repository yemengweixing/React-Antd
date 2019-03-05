import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Info from "./info";

import About from "./../route1/about";
import Topic from "./../route1/topic";
import Home from "./Home";
import NoMatch from "./NoMatch";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route path='/main' render={() =>
              <Main>
                <Route path="/main/:value" component={Info} > </Route>
              </Main>
            }></Route>
            <Route path="/about" component={About} > </Route>
            <Route path="/topics" component={Topic}> </Route>
            <Route component={NoMatch}> </Route>
          </Switch>
          
        </Home>
      </HashRouter>
    );
  }
}
