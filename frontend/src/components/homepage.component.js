import React, { Component } from 'react';
import Navbar from './navbar.component';
import cookie from 'react-cookies';

export default class BookList extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:{
                userId:cookie.load('userId'),
                username:cookie.load('userName')
            }
        }
    }

    componentDidMount() {
        if(!this.state.user.userId){
            console.log("not logged in!");
            this.props.history.push('/');
        }
        else{
            console.log("logged in");
            console.log(this.state.user.userId);
        }
    }

    render(){
        return(
            <div>
            <Navbar history={this.props.history}/>
            <div className="container">
                <p>Here you can see all the books we have!</p>
            </div>
            </div>
        );
    };
}