import React from 'react';
import '../styles/box.css';
import MyContext from '../context/MyContext';

class ColorBox extends React.Component {
  render() {
    const { handleClick, colors, num } = this.context;
    return(
      <button
        type="button"
        className="box"
        onClick={ handleClick }
        style={ { backgroundColor: colors[num] } }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;