import React, { PureComponent } from 'react'
import ParentComponent from './ParentComponent'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
       name:"Murthy"
    }
  }
  componentDidMount = () => {
    this.timer();
  }
  timer = () => {
    setInterval(() => {
      
      this.setState({
        name:"Murthy"
      })
    }, 10000);
  }
  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
console.log('app render');
    return (
      <div>
        <ParentComponent name={this.state.name} />
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />

      </div>
    )
  }
}

export default App
