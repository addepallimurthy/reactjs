import React from 'react';
import { Auxilary } from './Auxilary';

export class LifeCycleUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        console.log("update life cycle constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("update life cycle getderivedstatefromprops")
        return null;
    }
    shouldComponentUpdate(){
        console.log("update life cycle shouldcomponent update")
        return true;
    }
    componentDidUpdate(props){
        console.log("update life cycle component did update");
    }
    getSnapshotBeforeUpdate(props,state){
        console.log("update life cycle snapshot");
        return null;
    }
render(){
    console.log("update life cycle render",this.props);
    return(
        <Auxilary>
        <ul style={{listStyle:"none",padding:"0px"}}>
            <li><u><strong>List of Items</strong></u></li>
            <li>Cake:{this.props.cake}</li>
            <li>Icecream:{this.props.icecreams}</li>
        </ul>
        <h2>Total Items Purchased:{this.props.purchasedItems}</h2>
        <h2>Total Price:{this.props.totalPrice}</h2>
        </Auxilary>
    )
}
}