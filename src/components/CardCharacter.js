import React from 'react';

class CardCharacter extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.image})`
    }

    return (
      <div className="card">
        <h2 className="name">{ this.props.name }</h2>
        <div className="image" style = { style }>
        <img src={ this.props.image } alt="Harry Potter characters" width="0" height="0" />
        </div>
        <div className="icons">
          <div className={`house house--${ this.props.house }`}>{ this.props.house }</div>
          <div className={`alive alive--${ this.props.alive? 'vivo':'muerto' }`}>{ this.props.alive? 'vivo':'muerto' }</div>
          </div>
      </div>
    );
  }
}

export default CardCharacter;
