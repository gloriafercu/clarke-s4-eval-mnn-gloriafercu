import React from 'react';

class CardCharacter extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.image})`
    }

    return (
      <div className="card">
        <h2 className="name">{ this.props.name }</h2>
        <div className="image" style = { style }></div>
        <p className="house">{ this.props.house }</p>
        <p className="alive">Está { this.props.alive? 'vivo':'muerto' }</p>
      </div>
    );
  }
}

export default CardCharacter;
