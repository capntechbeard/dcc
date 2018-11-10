import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Distributor from '../components/Distributor/Distributor'
import Header from '../components/Header/Header'
import AbilityPoints from '../components/AbilityPoints/AbilityPoints'


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

          <AbilityPoints 
            score={abilities.points}/>
          
          <Distributor
            ability="Strength"
            nextCost={abilities.str.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-str"
            value={abilities.str.val}
          />
          <Distributor
            ability="Endurance"
            nextCost={abilities.end.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-end"
            value={abilities.end.val}
          />
          <Distributor
            ability="Agility"
            nextCost={abilities.agi.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-agi"
            value={abilities.agi.val}
          />
          <Distributor
            ability="Knowledge"
            nextCost={abilities.kno.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-kno"
            value={abilities.kno.val}
          />
          <Distributor
            ability="Wisdom"
            nextCost={abilities.wis.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-wis"
            value={abilities.wis.val}
          />
          <Distributor
            ability="Charisma"
            nextCost={abilities.cha.nextCost}
            handleIncrement={handleAbilityIncrement}
            handleDecrement={handleAbilityDecrement}
            buttonClass="ability-cha"
            value={abilities.cha.val}
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
