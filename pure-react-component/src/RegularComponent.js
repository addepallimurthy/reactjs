import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("Regular component render");
        return (
            <div>
                regular component : {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
