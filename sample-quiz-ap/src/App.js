import './App.css';
import { React, Component } from 'react';
import axios from 'axios';
import { Question } from './question';
import './question.css';
import { Provider } from './UserContext';
class App extends Component {
  correctAnswers = {};

  constructor(props) {
    super(props)
    console.log('consturctor', props);
    this.state = {
      questions: [],
      correctAnswers: 0
    }
  }
  static getDerivedStateFromProps = (porps, state) => {
    console.log("derived", state);
    return null;
  }

  componentDidMount = () => {
    console.log("mount");
    axios.get("https://quizapi.io/api/v1/questions?apiKey=ZrbIVTCV24UsGAh8KfsE7kPirbFHZrV7aU0z5joT&limit=10")
      .then(response => {
        const data = response.data;
        this.setState({ questions: data });
      }).catch(err => {

      });
  }

  clickHandler = (e) => {
    const selectedQesAndAns = this.state.questions.find(question => question.id === Number(e.target.name));
    this.correctAnswers[e.target.name] = selectedQesAndAns.correct_answers[e.target.value + "_correct"].toLowerCase() === "true" ? 1 : 0;
    console.log(this.correctAnswers);
  }


  render() {
    const button = ["button", "hide"];
    if (this.state.questions.length > 0) {
      button.pop();
      button.push("show");
    }
    const loadContent = () => {
      return this.state.questions.length ? this.state.questions.map(question => {
        return <Question key={question.id} {...question} />
      }) : <div className="loading">Loading....</div>
    }


    return (
      <div className="App">
        <header>
          <h1>QUIZ</h1>
        </header>
        <Provider value={this.clickHandler}>{loadContent()}</Provider>
        <button className={button.join(" ")}> submit</button>
      </div>
    );
  }
}
export default App;
