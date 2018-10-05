import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class Splash extends Component {
  render() {
    return (
      <Fragment>
        <Container title="it's anything else he said">
          <Header title="HEADER!" />
          <Button 
            className="next-button"
            isDisabled
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default Splash;
