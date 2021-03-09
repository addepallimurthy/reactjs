import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from './redux/Action';
export class App extends Component {
  render() {
    console.log(this.props.backery);
    return (
      <div>
        <h1>Bakery Shop</h1>
        <ul>
          {
            Object.keys(this.props.backery).map(item => {
              return buildBakeryItems(item, this.props);
            })
          }
        </ul>
      </div>

    )
  }
}
const buildBakeryItems = (item, props) => {
  return (<li key={item} style={{ listStyle: "none" }}>
    <label>{item === "cake" ? `No Of Cakes : ${props.backery[item][item]["noOfCakes"]}` : `No Of IceCreams : ${props.backery[item][item]["noOfIceCreams"]}`}
    </label>
    <div><button key={item} onClick={item==="cake"?props.buyCake:props.buyIceCream}>{item === "cake" ? `Buy Cake` : `Buy IceCream`}</button></div>
  </li>);
}
const mapStateToProps = (state) => ({
  backery: state
})

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () =>
      dispatch(buyCake()),
    buyIceCream: () => {
      dispatch(buyIceCream())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
