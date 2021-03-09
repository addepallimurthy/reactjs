import React, { Component } from 'react';
import './App.css';
import { Auxilary } from './Auxilary';
import { LifeCycleUpdate } from './LifeCycleUpdate';
import Header from './header';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { noOfCakes: 10, noOfIceCreams: 10, purchasedItems: 0, cakePrice: 10, iceCreamPrice: 30, totalPrice: 0,cake:0,icecreams:0 };
    console.log("constructor");
  }
  static getDerivedStateFromProps = (pros, state) => {
    console.log("getDerivedStateFromPros");
    return null;
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    return null;
  }
  clickHandler = () => {
    console.log("cc");
  }
  buyCake = () => {
    if (this.state.noOfCakes > 0)
      this.setState({ ...this.state, noOfCakes: this.state.noOfCakes - 1, purchasedItems: this.state.purchasedItems + 1, totalPrice: (this.state.totalPrice + this.state.cakePrice),cake:this.state.cake+1 });
    return null;
  }
  buyIceCream = () => {
    if (this.state.noOfIceCreams > 0)
      this.setState({ ...this.state, noOfIceCreams: this.state.noOfIceCreams - 1, purchasedItems: this.state.purchasedItems + 1, totalPrice: (this.state.totalPrice + this.state.iceCreamPrice),icecreams:this.state.icecreams+1 });
    return null;
  }
  render() {
    console.log("render", this.state);
    return (
      <Auxilary>
        <div className="App">
          <Header />          
          <div>
            <label>Number of Cakes : {this.state.noOfCakes}</label>
            <div><button onClick={this.buyCake}>Buy Cake</button></div>
          </div>

          <div>
            <label>Number of Ice Creams : {this.state.noOfIceCreams}</label>
            <div><button onClick={this.buyIceCream}>Buy Ice Cream</button></div>
          </div>
          <LifeCycleUpdate {...this.state} />
        </div>
      </Auxilary>

    )
  }
}
export default App;
