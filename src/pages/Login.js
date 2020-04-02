import React, { Component } from 'react'
import loginImg from '../login.svg'
import './App.scss'
import './style.scss'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);        
        this.state = {
          email:'',
          password:'',          
        };
      }
    handleClick() {
        axios.post('http://52.148.92.137:3000/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div className="App">
                <div className="login">
                    <div className="container">
                        <div className="base-container" ref={this.props.containerRef}>
                            <div className="header">Login</div>
                            <div className="content">
                                <div className="image">
                                    <img src={loginImg} alt="loginImg" />
                                </div>
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Email</label>
                                        <input onChange={this.handleEmailChange} type="text" name="username" placeholder="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.handlePasswordChange} type="password" name="password" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button onClick={this.handleClick} type="button" className="btn">
                                    Login
          </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
