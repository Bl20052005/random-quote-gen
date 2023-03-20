import './App.css';
import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      this.setState({
        quote: data.content,
        author: data.author
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  newQuote = () => {
    this.componentDidMount();
  }
  
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">{this.state.author}</h2>
        <button id="new-quote" onClick={this.newQuote}>New Quote</button>
        <a href={"twitter.com/intent/tweet?text=" + this.state.quote} target="_blank"><span>tweet it</span></a>
        <button onClick={() => {navigator.clipboard.writeText(this.state.quote)}} target="_blank"><span>copy it</span></button>
      </div>
    );
  }
}

export default function App() {
  return(
    <Display />
  );
};
