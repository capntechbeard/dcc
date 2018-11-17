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
      traits: {
        category: 1,
        negative: 0,
        positive: 0
      },
      currentPage: 'Splash',
      personality: 3
    }

    this.navigateToPage = this.navigateToPage.bind(this)
    this.handleAbilityIncrement = this.handleAbilityIncrement.bind(this)
    this.handleAbilityDecrement = this.handleAbilityDecrement.bind(this)
    this.handlePersonalityChange = this.handlePersonalityChange.bind(this)
    this.handleSelectedTraitCategoryChange = this.handleSelectedTraitCategoryChange.bind(this)
  }

  navigateToPage(page) {
    this.setState (
      {
        currentPage: page
      }
    )
  }

  calcAbilityPoints(current, isInc) {
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

  handleAbilityIncrement(event) {
    this.handleAbilityChange(event, true);
  }

  handleAbilityDecrement(event) {
    this.handleAbilityChange(event, false);
  }

  handlePersonalityChange(personality) {
    this.setState ({ personality });
  }

  handleSelectedTraitCategoryChange(category) {
    this.setState ({ 
      traits: { 
        ...this.state.traits,
        category 
      }
    });
  }

  render() {
    const {abilities, currentPage, personality, traits} = this.state
    const {category} = traits
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
              category={category}
              handleSelectedTraitCategoryChange={this.handleSelectedTraitCategoryChange}
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
