import React from 'react';

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
    console.log("update life cycle render");
    return(
        <h2>life cycle 2</h2>
    )
}
}