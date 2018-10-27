import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Distributor from '../components/Distributor/Distributor'
import Header from '../components/Header/Header'


class AAbilityScores extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('APersonality')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterCreateMenu')
  }

  render() {

    const {abilities, handleAbilityDecrement, handleAbilityIncrement} = this.props

    return (
      <Fragment>
        <Container>
          <Header title="Ability Scores" />

          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-str"
            value={abilities.str}
          />
          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-end"
            value={abilities.end}
          />
          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-agi"
            value={abilities.agi}
          />
          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-kno"
            value={abilities.kno}
          />
          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-wis"
            value={abilities.wis}
          />
          <Distributor
            cost={1}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-cha"
            value={abilities.cha}
          />
          

          <Button 
            className="back-button"
            onClick={this.handleBackNavigation}
            text="BACK" />
          <Button 
            className="next-button"
            onClick={this.handleNavigation}
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default AAbilityScores;
