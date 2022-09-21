import React, { Component } from 'react';
import MyContext from './MyContext';
//ONDE O ESTADO GLOBAL MORA!!!!!!!!

export class Provider extends Component {
  handleClick = () => {
    let { num } = this.state;
    num += 1;
    if ( num > 2) {
      this.setState({
        num: 0
      });
    } else {
      this.setState({
        num: num
      });
    }
  };


  state = {
    colors: [
      'blue',
      'red',
      'yellow',
    ],
    handleClick: this.handleClick,
    num: 0,
  }
  

  render() {
    const { Provider } = MyContext;
    const { children } = this.props;
    return (
      <Provider value={ {...this.state} }>
        { children }
      </Provider>
    );
  }
}

export default Provider;
