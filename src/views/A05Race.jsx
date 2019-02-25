import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import ZagSelector from '../components/ZagSelector/ZagSelector'

class ARace extends Component {

  handleNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('ASkills')
  }
  handleBackNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('AClass')
  }

  render() {

    const {handleToggleRace, racesSelected} = this.props

    const races = [
      {
          race: "Human",
          description: "PLACEHOLDER",
          imagePath: "/images/svgs/general_skills.svg",
          imagePathActive: "/images/svgs/general_skills_active.svg",
          active: racesSelected.includes(1),
          onClick: () => {
            handleToggleRace(1);
          }
      },
      {
          race: "Elf",
          description: "PLACEHOLDER",
          imagePath: "/images/svgs/spiritualist.svg",
          imagePathActive: "/images/svgs/spiritualist_active.svg",
          active: racesSelected.includes(2),
          onClick: () => {
            handleToggleRace(2);
          }
      },
      {
          race: "Dwarf",
          description: "PLACEHOLDER",
          imagePath: "/images/svgs/warrior.svg",
          imagePathActive: "/images/svgs/warrior_active.svg",
          active: racesSelected.includes(3),
          onClick: () => {
            handleToggleRace(3);
          }
      },
      {
          race: "Gnome",
          description: "PLACEHOLDER",
          imagePath: "/images/svgs/arcanist.svg",
          imagePathActive: "/images/svgs/arcanist_active.svg",
          active: racesSelected.includes(4),
          onClick: () => {
            handleToggleRace(4);
          }
      },
      {
          race: "Orc",
          description: "PLACEHOLDER",
          imagePath: "/images/svgs/warrior.svg",
          imagePathActive: "/images/svgs/warrior_active.svg",
          active: racesSelected.includes(5),
          onClick: () => {
            handleToggleRace(5);
          }
      },
      {
        race: "Orge",
        description: "PLACEHOLDER",
        imagePath: "/images/svgs/warrior.svg",
        imagePathActive: "/images/svgs/warrior_active.svg",
        active: racesSelected.includes(6),
        onClick: () => {
          handleToggleRace(6);
        }
    }
    ]

    return (
      <Fragment>
        <Container>
          <Header title="Race" />

          <div className="race-select">
            <ZagSelector zagButtons={races}/>
          </div>

          <div className="race-text">

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

export default ARace;
