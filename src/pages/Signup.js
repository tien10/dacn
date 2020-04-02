import React, { Component } from 'react'
import loginImg from '../login.svg'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernaneChange = this.handleUsernaneChange.bind(this);
        this.state = {
          email:'',
          password:'',
          username: ''
        };
      }
    handleClick() {
        axios.post('http://52.148.92.137:3000/signup', {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
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
    handleUsernaneChange(e) {
        this.setState({ username: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Signup</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} alt="signUpImg" />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input onChange={this.handleUsernaneChange} type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={this.handleEmailChange} type="text" name="email" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onChange={this.handlePasswordChange} type="password" name="password" placeholder="password" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={this.handleClick} type="button" className="btn">
                            Signup
          </button>
                    </div>
                </div>
            </div>
        )
    }
}
