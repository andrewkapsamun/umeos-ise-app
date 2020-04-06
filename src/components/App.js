import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Workspace from "./Workspace";
import Page from "./Page";


function App() {
  return (
      <div>
        <Header/>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Workspace} exact/>
                <Route path='/page/:id' component={Page} exact/>
            </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
      );

}

export default App;
