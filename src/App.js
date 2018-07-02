import React from 'react';
import './App.css';

const url = `https://andruxnet-random-famous-quotes.p.mashape.com/`;
// const user_key="84b1d48c7ebc175c4dbed2484965de0a";
class App extends React.Component {

  state = {
    name: "click here",
    quote: [],

  }
  getFunction = async (e) => {

    const data = await fetch(url, {
      headers: {
        'X-Mashape-Key': 'BdEqSUZTqfmshvf0BgphFmL4mBhtp1K2bfajsn891I1IXV7XqV',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": "application/json",

      },
    });
    const result1 = await data.json();
    console.log(result1);

    this.setState({
      // name:"clicked",
      quote: result1[0].quote
    });
    return result1[0].quote;
  }
  render() {
    const rev = this.getFunction();
    setInterval(() => {
      return this.setState({
        quote: rev.quote
      });

    }, 8000);

    return (
      <div className="App">
        <div>
          <button className="button" onClick={this.getFunction}>{this.state.name}</button>       </div>

        <div>
          {this.state.quote}</div>

        {/* { this.state.result.map((reu)=>{
          return        <div key={reu} className="button" onClick={this.getFunction}>{reu}</div>

        })} */}


      </div>
    );
  }
}

export default App;
