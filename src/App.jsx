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
      currentPage: 'Splash'
    }

    this.navigateToPage = this.navigateToPage.bind(this)
  }

  navigateToPage(page) {
    console.log (page)
    this.setState (
      {
        currentPage: page
      }
    )
  }

  render() {
    const {currentPage} = this.state
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
