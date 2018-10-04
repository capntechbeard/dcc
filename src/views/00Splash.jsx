import React, { Component, Fragment } from 'react';
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Header from '../components/Header.jsx'

class Splash extends Component {
  render() {
    return (
      <Fragment>
        <Container title="it's anything else he said" />
        <Button title="You can't click me yet" />
        <Header title="I am also a title thingy" />
      </Fragment>
    );
  }
}

export default Splash;
