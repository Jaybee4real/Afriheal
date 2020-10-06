import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="logo-text">HealthStack</div>
                </div>
                <div className="links-container left">
                    <a href="#." className="link active">Home</a>
                    <a href="#." className="link">Forums</a>
                    <a href="#." className="link">Discussions</a>
                </div>
                <div className="links-container right">
                    <a href="#." className="link btn">Sign In</a>
                    <a href="#." className="link btn-reverse">Sign Up</a>
                </div>
                <div className="mobile-nav-toggle"></div>
            </div>
        )
    }
}
