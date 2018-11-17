import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import SelectBar from '../components/SelectBar/SelectBar'

class ACharacterTraits extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('AProfession')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('APersonality')
  }

  render() {
    const {handleSelectedTraitCategoryChange, selectedTraitCategory} = this.props

    const selectButtonsLeft = [
      {
        active: selectedTraitCategory === 1,
        imagePathActive: '/images/svgs/personality_1_active.svg',
        imagePath: '/images/svgs/personality_1.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(1);
        }
      },
      {
        active: selectedTraitCategory === 2,
        imagePathActive: '/images/svgs/personality_2_active.svg',
        imagePath: '/images/svgs/personality_2.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(2);
        }
      },
      {
        active: selectedTraitCategory === 3,
        imagePathActive: '/images/svgs/personality_3_active.svg',
        imagePath: '/images/svgs/personality_3.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(3);
        }
      }
    ];

    const selectButtonsRight = [
      {
        active: selectedTraitCategory === 4,
        imagePathActive: '/images/svgs/personality_1_active.svg',
        imagePath: '/images/svgs/personality_1.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(4);
        }
      },
      {
        active: selectedTraitCategory === 5,
        imagePathActive: '/images/svgs/personality_2_active.svg',
        imagePath: '/images/svgs/personality_2.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(5);
        }
      },
      {
        active: selectedTraitCategory === 6,
        imagePathActive: '/images/svgs/personality_3_active.svg',
        imagePath: '/images/svgs/personality_3.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(6);
        }
      }
    ];


    return (
      <Fragment>
        <Container>
          <Header title="Character Traits" />

          <div className='traits-wrapper'>
            <div className='traits-wrapper__left'>
              <div className='traits-wrapper-left__top'>
                <SelectBar selectButtons={selectButtonsLeft}/>
                <SelectBar selectButtons={selectButtonsRight}/>
              </div>
              <div className='traits-wrapper-left__bottom'>
              Catching on fire climb cold dangers critical hit dispel check divine spell earth domain effective character level force damage illusion kind modifier morale bonus resistance to energy skill rank space tanar'ri subtype tiny. Ability drained balance domain confused creature type dexterity domain spell earth subtype energy damage exhausted full normal hit points full-round action lawful luck bonus melee weapon natural reach negative energy plane nobility domain orison ranged attack sickened sonic attack splash weapon stunned swift action tremorsense.
<br/><br/>
Abjuration angel subtype armor bonus blindsense concentrate on a spell dragon type enemy energy plane entangled experience points helpless living construct subtype masterwork melee touch attack miss chance plane of existence prerequisite ranged attack roll rounding scent space summoning subschool tanar'ri subtype turn undeath domain. Ability damage class feature concealment cross-class skill energy damage extraplanar flight kind points of damage repose domain sonic attack tremorsense.
<br/><br/>
Ability decrease ability score animal domain cast a spell charm continuous damage critical hit dispel turning divination dodge bonus drow domain elemental plane extraordinary ability fighter flight improved evasion initiative modifier level level adjustment natural armor bonus off hand ooze type psionics ranged attack roll reach weapon spell preparation standard action summon swift action take 20. Ability drained ability modifier action antimagic difficult terrain double weapon flight infection large powerful charge repose domain subschool.
<br/><br/>
Armor bonus blinded conjuration family domain favored class nauseated nonabilities profane bonus special quality surprise. Ability damaged casting time elemental plane end of round experience points fast healing fate domain full normal hit points full-round action grab guardinal subtype hit humanoid type illusion domain improved evasion incorporeal subtype level magic domain natural nonintelligent phantasm subschool plant domain ranged weapon shadow subschool sorcerer spell immunity travel domain turn.
<br/><br/>
Ability check adventuring party armor class balance domain cold domain disease dragon type drow domain eladrin subtype electrum ethereal plane evil subtype fey type fighter gold piece humanoid type improved grab law domain lawful melee weapon natural reach petrified player character racial bonus thrown weapon travel domain turn resistance war domain. Ability score loss animal type confused coup de grace druid infection light weapon masterwork one-handed weapon overlap shaken spell failure time domain total concealment war domain water subtype.
              </div>
            </div>
            <div className='traits-wrapper__right'></div>
          </div>



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

export default ACharacterTraits;
