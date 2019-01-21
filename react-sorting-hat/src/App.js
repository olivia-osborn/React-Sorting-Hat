import React, { Component } from 'react';
import './App.css';
import ChallengePage from "./Components/ChallengePage";
import QuestionPage from "./Components/QuestionPage";

const questionData = [
  {
    question1: "During the end-of-year exams, you notice that one of your classmates was using an enchanted quill. You come top of the class anyway, but they are second. What do you do?",
    answerGryf: "Tell the professor immediately – cheating is wrong, no matter what.",
    answerHuf: "Encourage the other student to admit what they'd done to the professor.",
    answerRav: "Nothing, but if I hadn't come top of the class, I'd definitely tell the professor.",
    answerSlyt: "Give them a high five for managing to sneak the quill into the exam."
  },
  {
    question1: "You would be most hurt if a person called you...",
    answerGryf: "Weak",
    answerHuf: "Unkind",
    answerRav: "Ignorant",
    answerSlyt: "Boring"
  },
  {
    question1: "It's your fifth year at Hogwarts, and you've just received a Howler from your parents. What for?",
    answerGryf: "Sneaking into the Forbidden Forest at night on a dare.",
    answerHuf: "Nothing! I'd never do anything to warrant a Howler.",
    answerRav: "Being put in detention after I was caught in the library after hours.",
    answerSlyt: "Getting caught cheating in my Divination O.W.L."
  },
  {
    question1: "Which of these Dumbledore quotations speaks to you?",
    answerGryf: "It matters not what someone is born, but what they grow to be.",
    answerHuf: "Pity the living, and above all, those who live without love.",
    answerRav: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
    answerSlyt: "It does not do to dwell on dreams and forget to live."
  },

]

class App extends Component {
  constructor() {
    super()
    this.state = {
      questionData: questionData,
      acceptedChallenge: false
    }
  }

  toggleAccept= e => {
    this.setState({acceptedChallenge: true})
  }

  render() {
    return (
      <div className="App">
        {this.state.acceptedChallenge === true ? <QuestionPage/> : <ChallengePage toggleAccept={this.toggleAccept}/>}
      </div>
    );
  }
}

export default App;
