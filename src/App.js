import React from 'react';
import User from './component/User';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      langauge: 'All',
      mode: 'Popular',
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.langauge !== this.state.langauge) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.langauge}&sort=stars&order=desc&type=Repositories`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ data: data.items }));
    }
  }

  handleLanguage = (event) => {
    event.preventDefault();
    return this.setState({
      data: null,
      langauge: event.target.innerText,
    });
  };

  render() {
    return (
      <div>
        <div>
          <ul className="flex nav-links">
            <li>
              <a onClick={this.handleLanguage} href="#a">
                All
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="#a">
                Javascript
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="#a">
                Ruby
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="#a">
                Java
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="#a">
                CSS
              </a>
            </li>
            <li>
              <a onClick={this.handleLanguage} href="#a">
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
