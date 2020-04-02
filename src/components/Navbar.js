import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'
// import logo from '../images/logo.svg'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            {/* <img src={logo} alt="logo"></img> */}
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight />
                        </button>
                    </div>
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}

                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
