import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Distributor from '../components/Distributor/Distributor'
import Header from '../components/Header/Header'
import PointDisplay from '../components/PointDisplay/PointDisplay'


class AAbilityScores extends Component {


  handleNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('APersonality')
  }
  handleBackNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterCreateMenu')
  }

  render() {

    const {abilities, handleAbilityDecrement, handleAbilityIncrement} = this.props

    return (
      <Fragment>
        <div className="text-align-center">
          <Container>
            <Header title="Ability Scores" />
            
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

            <PointDisplay 
            className="a01-score"
              score={abilities.points}/>

            <Button 
              className="next-button"
              // isDisabled={abilities.points !== 0}
              onClick={this.handleNavigation}
              text="NEXT" />



          </Container>
        </div>
      </Fragment>
        
    );
  }
}

export default AAbilityScores;
