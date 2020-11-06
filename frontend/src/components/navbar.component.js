import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

export default class Navbar extends Component{

    handleLogout = e =>{
        e.preventDefault();
        cookie.remove("userId", { path: "/" } );
        cookie.remove("userName", { path: "/" } );
        this.props.history.push("/");
      }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/homepage" className="navbar-brand">BookStore</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/homepage" className="nav-link">BookLists</Link>
                </li>
                <li className="navbar-item">
                <Link to="/homepage" className="nav-link">Orders</Link>
                </li>
                </ul>
                </div>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.handleLogout}>Log out</button>
            </nav>
        );
    };
}