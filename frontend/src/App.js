import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import "react-toastify/dist/ReactToastify.css"

import homepage from "./components/homepage.component";
import LoginPage from "./components/login.component";
import RegisterPage from "./components/register.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/homepage" component={homepage}></Route>
    </Router>
  );
}
      //<Route path="/" exact component={homepage} />
      //<Route path="/edit/:id" exact component={EditBook} />
      //<Route path="/create" exact component={CreateBook} />
export default App;
