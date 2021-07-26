import React from 'react';
import '../battle.css';

class Battle extends React.Component {
  constructor() {
    super();

    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneLink: '',
      playerTwoLink: '',
      playerOneImage: '',
      playerTwoImage: '',
      imagePlaceholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAAMFBMVEX39/fMzMzW1tbJycn6+vr29vby8vLNzc3l5eXs7Ozh4eHQ0NDY2NjX19ft7e3w8PBMVMCuAAAEjUlEQVR4nO2d25qqMAxGKQTkpLz/2+5CHbc6yrRNMTHJupq5k//LuaeqMgzDMAzDMAzDMAx1QFW1Xde1/i+g/i28gPYyztPkXOPcNM3j0JpAV6DtZ9d4XW74f+reBPJAN7t7ZW4KufmiXR+vzStprgLVi259xrfSBH3mlvoXkgHL9N5wrvKcBqXmA/1f2mz6jCrlgZ2I8xh9NHpXHSeO56RPnnhxvDwd9a/9LJAijjbriY05NybqX/xBYEwUxxc+ejLXkCqOl6dXI0+yNqs8SiIzzDnquEmH8WT41WY8KnwLsrRZUZDW47qrl2jIW9mm4xrxxpNe6mgynvyoo8F48qOOkz/rgRpjO9Jrng5jOt54FuoPOBJUTF4R7Vow4cRxJ8nqIB1LeC+KylibOj31JxxHZnd+z1mua8EJrY7gwNNiHUt0uZw52XlQZ6D+iMNAB2XJYRn+2HERhdh6sEDKEjzFQLaggVqsOtg+YkVsm16g3BFc8KDmgjdMHY3qIJYjFKhjtrOHReU9LKPvYdXgHtZJ7IFekXCiF/xsgrGHTb/2QC/YyF6yKaAO9SccR4GCR2y549U5o9WRvJ6FTumCE3qBpCU4Zdkug33wMwzBjoXvQwUHZXxYFh2U0WG5uVB/wKEgd2EIrpRXkNWy2NFXABd4BI8vAheUOpKrnRVUxSO4BQ1gZsvC8/kKIqeLdyyUa4l3LEzWEp+xVrL7dOGlYCC7E5Ufk1dyz6PL3cd9T+ZWDLFLxE9kLYkqSOeBLOPRYjp5kUdH1FlJT1s6rgi5kjwEEz7YeST1qhA1ITmQ5luNuus8E/KWgsnFM128OHqS+X+WWHUUDC5+ExuZVSXz/yyR6ujKVz9EFj0qHSu63dIYk6vYdVGF6XwjriJUMU1+QaQ6kvfC7RCpjuxNKW8x29kjMiorVSeuEdUalSOrQaX1TuR0WWetHLtXRWmfFSeOlhXiRxJGy3oWa260sdoI3+D+kpSxu7pGNO2pFm3ypD3y45qa+gd/DuiSd7w3U6fEfGBI1WZDx4pf7oMSOoLPOXtXpfgH/OCCuqFI+OuzqW+uPZvPSP0BxwH9CX2mWOrrqjD8+bJslD61vNwOVV9Em02fs6jwA9Xw+pXvbH0mIa+nQ3gbvqA0QR8v0AJfrZD/9cM4NcWl+RHIzf1SfadEAN1YH6XMnUL1OFTfJpCX5jCj+aVQU/fd95gQQH+41TwrNI3fEad98kYXfVkC1V9QKEJfPkPFCjQx32Lou0wqbYI+rO0H2WUW0GfmOuaAhdRwfuBpPlDgos4SsNzgjHhitzAMZ6x8xGEoDxe3CnBzrvgjMx+B117MIhfal+TEKLGXuJO8LJwOdRW4Vro0fB7tLXLZf2nYHENmaDp8jIdf1NngEnmodXgDj7TFqEq+h8cu+QK3tR8Di7hc4H3dY2Bx2xOrDuseDq7FstgJcNjoXOJFtYOglib60D0F9J06p6nXL8inYEWemzsK8rNdCadBPg/52S62+XyFesDMOJ+vULsW9f',
    };
  }

  handleSubmit = (event, playerName) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${event.target[0].value}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          [`${playerName}Link`]: data,
          [playerName]: event.target[0].value,
          // imagePlaceholder: '',
          [`${playerName}Image`]: data['avatar_url'],
        })
      );
    event.target[0].value = '';
  };

  handleBattleButton = () => {
    let playerOneStats =
      this.state.playerOneLink.followers * 20 +
      this.state.playerOneLink.public_repos;
    let playerTwoStats =
      this.state.playerTwoLink.followers * 20 +
      this.state.playerTwoLink.public_repos;
    console.log(playerOneStats, playerTwoStats);
    if (playerOneStats > playerTwoStats) {
      return this.setState({
        playerOneWinner: 'Winner',
        playerTwoWinner: 'Loser',
      });
    } else if (playerTwoStats > playerOneStats) {
      return this.setState({
        playerTwoWinner: 'Winner',
        playerOneWinner: 'Loser',
      });
    }
  };

  handleReset = () => {
    this.setState({
      playerOneWinner: '',
      playerTwoWinner: '',
      playerOneImage: '',
      playerTwoImage: '',
      playerOneLink: '',
      playerTwoLink: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <div className="flex icons">
          <div>
            <h3>Step 1</h3>
            <p>Enter Two Github User</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              class="bg-light"
              color="rgb(255, 191, 116)"
              size="140"
              height="140"
              width="140"
            >
              <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
            </svg>
          </div>
          <div>
            <h3>Step2 </h3>
            <p>Battle</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              class="bg-light"
              color="#727272"
              size="140"
              height="140"
              width="140"
              // style="color: rgb(114, 114, 114);"
            >
              <path d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z"></path>
            </svg>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>See the winner</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              class="bg-light"
              color="rgb(255, 215, 0)"
              size="140"
              height="140"
              width="140"
            >
              <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
            </svg>
          </div>
        </div>
        <h2>Players</h2>
        <div className="players">
          <div className="player-one">
            <h4>Player One</h4>
            <form onSubmit={(event) => this.handleSubmit(event, 'playerOne')}>
              <input type="text" placeholder="Github Username" />
              <input type="submit" value="SUBMIT" />
            </form>
            <div>
              <img
                src={this.state.playerOneImage || this.state.imagePlaceholder}
                alt="Placeholder"
              />
            </div>
            <h1>{this.state.playerOneWinner}</h1>
          </div>
          <div className="player-two">
            <h4>Player Two</h4>
            <form onSubmit={(event) => this.handleSubmit(event, 'playerTwo')}>
              <input type="text" placeholder="Github Username" />
              <input type="submit" value="SUBMIT" />
            </form>
            <img
              src={this.state.playerTwoImage || this.state.imagePlaceholder}
              alt="Placeholder"
            />
            <h1>{this.state.playerTwoWinner}</h1>
          </div>
        </div>
        {this.state.playerOneImage && this.state.playerTwoImage ? (
          <div>
            <button onClick={this.handleBattleButton} className="battle-button">
              Battle
            </button>
            <button onClick={this.handleReset} className="reset-button">
              Reset
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Battle;
