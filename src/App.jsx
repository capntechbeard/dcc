import React, { Component } from 'react';
import './App.scss';
import Splash from './views/00Splash'
import ACharacterCreateMenu from './views/A00CharacterCreateMenu'
import AAbilityScores from './views/A01AbilityScores'
import APersonality from './views/A02Personality'
import ACharacterTraits from './views/A03CharacterTraits'
import AClass from './views/A04Class'
import ARace from './views/A05Race'
import ASkills from './views/A06Skills'
import AShop from './views/A07Shop'
import ACharacterSheet from './views/A08CharacterSheet'
import BCharacterLibrary from './views/B00CharacterLibrary'

import traits from './lib/constants/traits'



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      abilities: {
        points: 50,
        str: {
          nextCost: 1,
          val: 1
        },
        end: {
          nextCost: 1,
          val: 1
        },
        agi: {
          nextCost: 1,
          val: 1
        },
        kno: {
          nextCost: 1,
          val: 1
        },
        wis: {
          nextCost: 1,
          val: 1
        },
        cha: {
          nextCost: 1,
          val: 1
        }
      },
      traits,
      currentPage: 'Splash',
      personality: 3,
      pCClass: 1,
      racesSelected: [],
      raceHighlighted: 0,
    }


  }

  navigateToPage = (page) => {
    this.setState (
      {
        currentPage: page
      }
    )
  }

  calcAbilityPoints = (current, isInc) => {
    // Increment
    if(current < 3 && isInc) {
      return 1;
    }
    else if ((current >= 3 && current <=6 ) && isInc) {
      return 2;
    }
    else if ((current === 7 ) && isInc) {
      return 3;
    }
    else if ((current === 8 ) && isInc) {
      return 4;
    }
    else if (current === 9 && isInc) {
      return 5;
    }
    else if (current === 10 && isInc) {
      return ;
    }
    // Decrement
    else if (current < 4 && !isInc) {
      return -1;
    }
    else if ((current >= 4 && current <=7 ) && !isInc) {
      return -2;
    }
    else if (current === 8  && !isInc) {
      return -3;
    }
    else if (current === 9  && !isInc) {
      return -4;
    }
    else if (current === 10 && !isInc) {
      return -5;
    }
  }

  handleAbilityChange = (event, isInc)  => {
    const {className} = event.currentTarget;
    const { abilities } = this.state;
    let { points, str, end, agi, kno, wis, cha } = abilities
    let newPoints

    if (className.indexOf('ability-str') > -1) {
      let { val } = str
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      str = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    if (className.indexOf('ability-end') > -1) {
      let { val } = end
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      end = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    if (className.indexOf('ability-agi') > -1) {
      let { val } = agi
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      agi = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    if (className.indexOf('ability-kno') > -1) {
      let { val } = kno
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      kno = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    if (className.indexOf('ability-wis') > -1) {
      let { val } = wis
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      wis = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    if (className.indexOf('ability-cha') > -1) {
      let { val } = cha
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 10 && isInc ) { return }
      isInc ? val++ : val--;
      cha = { 
        val, 
        nextCost: val === 10 ?  'X' : Math.abs(this.calcAbilityPoints(val, true))  
      }
    }

    this.setState (
      {
        abilities: {
          points: newPoints,
          str,
          end,
          agi,
          kno,
          wis,
          cha
        }
      }
    )
  }

  handleAbilityIncrement = (event) => {
    this.handleAbilityChange(event, true);
  }

  handleAbilityDecrement = (event) => {
    this.handleAbilityChange(event, false);
  }

  handlePersonalityChange = (personality) => {
    this.setState ({ personality });
  }

  handlePCClassChange = (pCClass) => {
    this.setState({ pCClass });
  }

  handleSelectedTraitCategoryChange = (category) => {
    this.setState ({ 
      traits: { 
        ...this.state.traits,
        category 
      }
    });
  }

  handleTraitSelection = (traitKey, traitValue) => {
    const { traits } = this.state
    const { categories } = traits
    const newState = {
      traits: {
        ...traits,
        categories: {
          ...categories,
          [traits.category]: {
            ...categories[traits.category],
            [traitKey]: {
              ...categories[traits.category][traitKey],
              selected: traitValue
            }
          }
        }
      }
    }
    this.setState (newState)
  }

  handleToggleRace = (raceKey) => {
    let {racesSelected} = this.state
    if (racesSelected.includes(raceKey)) {
      this.setState(prevState => {
        const tempRaces = prevState.racesSelected.filter(race => race !== raceKey)
        return {
          raceHighlighted:raceKey,
          racesSelected:tempRaces
        }
      })
    } else {
      if (racesSelected.length >= 5) {
        alert('Maximum of 5 races selected.')
        return
      }
      this.setState(prevState => ({
        raceHighlighted:raceKey,
        racesSelected: [...prevState.racesSelected, raceKey]
      }))
    }
  }


  
  render() {
    const {abilities, currentPage, pCClass, personality,raceHighlighted, racesSelected, traits} = this.state
    return (
      <div className="App">
        {
          currentPage === 'Splash' &&
            <Splash
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'ACharacterCreateMenu' &&
            <ACharacterCreateMenu
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'AAbilityScores' &&
            <AAbilityScores
              abilities={abilities}
              handleAbilityIncrement={this.handleAbilityIncrement}
              handleAbilityDecrement={this.handleAbilityDecrement}
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'APersonality' &&
            <APersonality
              handlePersonalityChange={this.handlePersonalityChange}
              navigateToPage={this.navigateToPage}
              personality={personality}
            />
        }
        {
          currentPage === 'ACharacterTraits' &&
            <ACharacterTraits
              handleTraitSelection={this.handleTraitSelection}
              handleSelectedTraitCategoryChange={this.handleSelectedTraitCategoryChange}
              navigateToPage={this.navigateToPage}
              traits={ traits }
            />
        }
        {
          currentPage === 'AClass' &&
            <AClass
              navigateToPage={this.navigateToPage}
              handlePCClassChange={this.handlePCClassChange}
              pCClass={pCClass}
            />
        }
        {
          currentPage === 'ARace' &&
            <ARace
              navigateToPage={this.navigateToPage}
              handleToggleRace={this.handleToggleRace}
              racesSelected={racesSelected}
              raceHighlighted={raceHighlighted}
            />
        }
        {
          currentPage === 'ASkills' &&
            <ASkills
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'AShop' &&
            <AShop
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'ACharacterSheet' &&
            <ACharacterSheet
              navigateToPage={this.navigateToPage}
            />
        }
        
      </div>
    );
  }
}

export default App;
