import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    console.log(this.props.selectGif);
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://i.giphy.com/${this.props.id}.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
