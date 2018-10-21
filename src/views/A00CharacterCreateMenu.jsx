import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class ACharacterCreateMenu extends Component {
  render() {
    return (
      <Fragment>
        <Container title="Container Title">
          <Header title="Header A00" />
          <Button 
            className="next-button"
            isDisabled
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default ACharacterCreateMenu;
