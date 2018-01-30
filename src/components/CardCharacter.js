import React from 'react';

class CardCharacter extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="name">{ this.props.name }</h2>
        <div>
          <img className="image" src= { this.props.image } />
        </div>
        <p className="house">{ this.props.house }</p>
        <p className="alive">Está { this.props.alive? 'vivo':'muerto' }</p>
      </div>
    );
  }
}

export default CardCharacter;
