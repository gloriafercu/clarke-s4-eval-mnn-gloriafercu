import React from 'react';
import CardCharacter from './CardCharacter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      characters: [],
      showOnlySearch: false
    };
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(json => {
        this.setState({
          characters: json
        });
        // console.log(json)
      });
    }

  handleOnChange(event) {
    this.setState({
      showOnlySearch: !this.state.showOnlySearch
  
    });
    console.log(event);
  }

  paintCharacters() {
    let cardsToShow = this.state.characters;
    if(this.state.showOnlySearch) {
      cardsToShow =
        this.state.characters.filter(list => list.name.toLowerCase().includes(this.state.showOnlySearch.toLowerCase()));
    }

    return (
      <ul className="card-listCharacter">
        { cardsToShow.map (list =>
            <li className="liCard">
              <CardCharacter
                name = {list.name}
                image = {list.image}
                house = {list.house}
                alive = {list.alive}
              />
            </li>
          )
        }
      </ul>);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
        <main className="wrapper">
          <input className="inputSearch" type="text" name="search" onChange = { this.handleOnChange }/>
          { this.paintCharacters() }
        </main>
      </div>
    );
  }
}

export default App;
