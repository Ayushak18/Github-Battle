import React from 'react';
import '../user.css';

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-comp">
        <p className="user-index"># {this.props.index + 1}</p>
        <img src={this.props.user.owner.avatar_url} alt="" />
        <h1>{this.props.user.name}</h1>
        <p>Username - {this.props.user.owner.login}</p>
        <p>Stars - {this.props.user.stargazers_count}</p>
        <p>Forks - {this.props.user.forks_count}</p>
        <p>Open Issue - {this.props.user.open_issues}</p>
      </div>
    );
  }
}

export default User;
