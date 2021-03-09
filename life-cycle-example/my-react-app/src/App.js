import React,{Component} from 'react';
import './App.css';
import { Auxilary } from './Auxilary';
import { LifeCycleUpdate } from './LifeCycleUpdate';
class App extends Component{
  constructor(props){
    super(props);
    this.state={fname:"murthy",lname:"Addepalli",noOfCakes:0,nofOfIceCreams:0};
  console.log("constructor");
  }
  static getDerivedStateFromProps = (pros,state)=>{
    console.log("getDerivedStateFromPros");
    return null;
  }
  componentDidMount = ()=>{
    console.log("componentDidMount");
    return null;
  }
  clickHandler = ()=>{
    console.log("cc");
    const newState = {...this.state};
    newState.fname = "Alekhya";
    newState.lname = "Alekhya";
    this.setState(newState);
  }
  buyCake = ()=>{
    this.setState({...this.state,noOfCakes:this.state.noOfCakes+1});
  }
  buyIceCream = ()=>{
    this.setState({...this.state,nofOfIceCreams:this.state.nofOfIceCreams+1});
  }
render(){
  console.log("render",this.state);
  return (
    <Auxilary>
      <div className="App">
      <h1 onClick={this.clickHandler}>Hello world</h1>
      <LifeCycleUpdate/>
      <div>
      <label>Number of Cakes : {this.state.noOfCakes}</label>
      <div><button onClick={this.buyCake}>Buy Cake</button></div>
      </div>

      <div>
      <label>Number of Ice Creams : {this.state.nofOfIceCreams}</label>
        <div><button onClick={this.buyIceCream}>Buy Ice Cream</button></div>
      </div>
      </div>
    </Auxilary>
    
  )
}
}
export default App;
