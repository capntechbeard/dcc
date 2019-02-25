import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class Splash extends Component {


  handleNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterCreateMenu')
  }

  render() {
    return (
      <Fragment>
        <Container title="Subtitle?">
          <Header title="Table-Top RPG Content Creator" />
          <Button 
            className="next-button"
            onClick={this.handleNavigation}
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default Splash;
