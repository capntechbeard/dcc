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
        str: 1,
        end: 1,
        agi: 1,
        kno: 1,
        wis: 1,
        cha: 1
      },
      currentPage: 'Splash'
    }

    this.navigateToPage = this.navigateToPage.bind(this)
    this.handleAbilityIncrement = this.handleAbilityIncrement.bind(this)
  }

  navigateToPage(page) {
    this.setState (
      {
        currentPage: page
      }
    )
  }

  handleAbilityIncrement(event) {
    const {id} = event.currentTarget;
    const { abilities } = this.state;
    let str = abilities.str;
    let end = abilities.end;
    let agi = abilities.agi;
    let kno = abilities.kno;
    let wis = abilities.wis;
    let cha = abilities.cha;

    if (id === 'increment-ability-str') {
      str++
    }

    this.setState (
      {
        abilities: {
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
