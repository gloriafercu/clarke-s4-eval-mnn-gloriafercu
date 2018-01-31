import React from 'react';
import CardCharacter from './CardCharacter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      characters: [],
      valueInput:''
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
    const valueToShow = event.target.value;
    this.setState({
      valueInput: valueToShow.toLowerCase()
      })
    }

  paintCharacters() {
    const cardsToShow = this.state.characters.filter(item =>
      item.name.toLowerCase().includes(this.state.valueInput)
    );

    return (
      <ul className="card-listCharacter">
        { cardsToShow.map (list =>
            <li className="liCard">
              <CardCharacter
                name = {list.name}
                image = {list.image}
                house = {list.house.toLowerCase()}
                alive = {list.alive}
              />
            </li>
          )
        }
      </ul>);
    }

  render() {
    console.log(this.state.valueInput);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
        <main className="wrapper">
          <input className="inputSearch" type="text" name="search" placeholder="Search characters" onChange = { this.handleOnChange }/>
          { this.paintCharacters() }
        </main>
      </div>
    );
  }
}

export default App;
