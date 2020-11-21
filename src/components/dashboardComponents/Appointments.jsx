import React, { Component } from 'react'

export default class Appointments extends Component {
    render() {
        return (
            <div className={`${this.props.active === true ? "slide-in" : ""}`}>
                This Is The Appointments Screen
            </div>
        )
    }
}
