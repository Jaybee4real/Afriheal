import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className={`${this.props.active === true ? "slide-in" : "" }`}>
                This Is The Messages Screen
            </div>
        )
    }
}
