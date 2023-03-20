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
    })
    .catch((err) => {
      console.log(err);
    });
  }

  newQuote = () => {
    this.componentDidMount();
    let firstVal = Math.floor(Math.random() * (9000000-1048575) + 1048575).toString(16);
    if(parseInt(firstVal.substring(0,2), 16) * 0.299 + parseInt(firstVal.substring(2,4), 16) * 0.587 + parseInt(firstVal.substring(4,6), 16) * 0.114 > 140) {
      document.querySelector(':root').style.setProperty("--main-color", "#432727");
    } else {
      document.querySelector(':root').style.setProperty("--main-color", "#bcd8d8");

    }
    document.getElementById("root").style.backgroundColor = "#" + firstVal;
  }
  
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">{this.state.author}</h2>
        <div id="links">
          <button id="new-quote" onClick={this.newQuote}>New Quote</button>
          <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&text=" + "\"" + this.state.quote  + "\"" + " - " + this.state.author} target="_blank"><span>tweet it</span></a>
          <button id="copy" onClick={() => {navigator.clipboard.writeText(this.state.quote)}} target="_blank"><span>copy it</span></button>
        </div>
      </div>
    );
  }
}

export default function App() {
  return(
    <Display />
  );
};
