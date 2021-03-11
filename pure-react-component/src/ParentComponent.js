import React, { Component } from 'react'

export class ParentComponent extends Component {
    render() {
        console.log("Parent component render");
        return (
            <div>
                parent Component : {this.props.name}
            </div>
        )
    }
}

export default ParentComponent
