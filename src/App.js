import React from 'react';
import User from './component/User';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      langauge: 'All',
    };
  }

  checkData = () => {
    if (this.state.data) {
      return true;
    }
  };

  handleUser = () => {
    return (
      <div className="flex user">
        {this.state.data.map((user, index) => {
          return <User key={index} user={user} index={index} />;
        })}
      </div>
    );
  };

  componentDidMount() {
    console.log(this.state.langauge);
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.langauge}&sort=stars&order=desc&type=Repositories`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.items }));
  }
  

  handleLanguage = (event) => {
    event.preventDefault();
    return this.setState({
      langauge: event.target.innerText,
    });
  };

  render() {
    return (
      <div>
        <h3>Popular</h3>
        <h3>Battle</h3>
        <div>
          <ul className="flex">
            <li>
              <a onClick={this.handleLanguage} href="">
                All
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="">
                Javascript
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="">
                Ruby
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="">
                Java
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="">
                CSS
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="">
                Python
              </a>
            </li>
          </ul>
        </div>
        {this.checkData() ? this.handleUser() : <div className="loader"></div>}
      </div>
    );
  }
}

export default App;
