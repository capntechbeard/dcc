import React, { Component } from 'react';
import './App.css';
import Splash from './views/00Splash'
import ACharacterCreateMenu from './views/A00CharacterCreateMenu'
import AAbilityScores from './views/A01AbilityScores'
import APersonality from './views/A02Personality'
import ACharacterTraits from './views/A03CharacterTraits'
import AProfession from './views/A04Profession'
import ARace from './views/A05Race'
import ASkills from './views/A06Skills'
import AShop from './views/A07Shop'
import ACharacterSheet from './views/A08CharacterSheet'
import BCharacterLibrary from './views/B00CharacterLibrary'



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      abilities: {
        points: 50,
        str: {
          cost: 1,
          val: 1
        },
        end: {
          cost: 1,
          val: 1
        },
        agi: {
          cost: 1,
          val: 1
        },
        kno: {
          cost: 1,
          val: 1
        },
        wis: {
          cost: 1,
          val: 1
        },
        cha: {
          cost: 1,
          val: 1
        }
      },
      currentPage: 'Splash'
    }

    this.navigateToPage = this.navigateToPage.bind(this)
    this.handleAbilityIncrement = this.handleAbilityIncrement.bind(this)
    this.handleAbilityDecrement = this.handleAbilityDecrement.bind(this)
  }

  navigateToPage(page) {
    this.setState (
      {
        currentPage: page
      }
    )
  }

  calcAbilityPoints(current, isInc) {
    if(current < 7 && isInc) {
      return 1;
    }
    else if (current >= 7 && isInc) {
      return 2;
    }
    else if (current < 8 && !isInc) {
      return -1;
    }
    else if (current >= 8 && !isInc) {
      return -2;
    }
  }

  handleAbilityChange(event, isInc) {
    const {className} = event.currentTarget;
    const { abilities } = this.state;
    let { points, str, end, agi, kno, wis, cha } = abilities
    let newPoints

    if (className.indexOf('ability-str') > -1) {
      let { val } = str
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      str = { 
        val, 
        cost: Math.abs(cost)
      }
    }

    if (className.indexOf('ability-end') > -1) {
      let { val } = end
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      end = { 
        val, 
        cost: Math.abs(cost)
      }
    }

    if (className.indexOf('ability-agi') > -1) {
      let { val } = agi
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      agi = { 
        val, 
        cost: Math.abs(cost)
      }
    }

    if (className.indexOf('ability-kno') > -1) {
      let { val } = kno
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      kno = { 
        val, 
        cost: Math.abs(cost)
      }
    }

    if (className.indexOf('ability-wis') > -1) {
      let { val } = wis
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      wis = { 
        val, 
        cost: Math.abs(cost)
      }
    }

    if (className.indexOf('ability-cha') > -1) {
      let { val } = cha
      if (!isInc && val === 1) { return }
      const cost = this.calcAbilityPoints(val, isInc)
      newPoints = points - cost;
      if (newPoints < 0 || val === 15 && isInc ) { return }
      isInc ? val++ : val--;
      cha = { 
        val, 
        cost: Math.abs(cost)
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

  handleAbilityIncrement(event) {
    this.handleAbilityChange(event, true);
  }

  handleAbilityDecrement(event) {
    this.handleAbilityChange(event, false);
  }

  render() {
    const {abilities, currentPage} = this.state
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
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'ACharacterTraits' &&
            <ACharacterTraits
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'AProfession' &&
            <AProfession
              navigateToPage={this.navigateToPage}
            />
        }
        {
          currentPage === 'ARace' &&
            <ARace
              navigateToPage={this.navigateToPage}
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
