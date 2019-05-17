import React, { Component, Fragment } from "react";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import ZagSelector from "../components/ZagSelector/ZagSelector";

class ARace extends Component {
  handleNavigation = () => {
    const { navigateToPage } = this.props;
    navigateToPage("ASkills");
  };
  handleBackNavigation = () => {
    const { navigateToPage } = this.props;
    navigateToPage("AClass");
  };

  render() {
    const { handleToggleRace, raceHighlighted, racesSelected } = this.props;

    const races = [
      {
        race: "Amal",
        description:
          "Amalgamates are the result of life in a melting pot over the course of a few millennia. By technicality, amalgamates are not a race of their own. Instead, they contain the DNA of many multiple races which has been diluted to the point that no specific origin can be traced. Still, one can be 'half Amal' should one of their parents be of a traditional race. Amals have no specific home to call their own, but now dominate the highest majority of races on the planet. This has allowed amals to hold most powers and kingdoms of the lands.",
        lifespan:
          "Amals have a shorter lifespan than traditional races, living to only about 100 years.",
        imagePath: "/images/svgs/race_amal.svg",
        imagePathActive: "/images/svgs/race_amal_active.svg",
        active: racesSelected.includes(0),
        onClick: () => {
          handleToggleRace(0);
        }
      },
      {
        race: "Elf",
        description:
          "Elves are reclusive by nature, often preferring to live in small woodland communities where they can worship and protect the powers of nature. Elves feel most at home surrounded by greenery and fresh, lively air. Elves are widely believed to be the most populous traditional race, however this assumes the majority of elven societies are hidden. Even most elven clans are unaware of each other.",
        lifespan:
          "Elves boast the longest natural lifespan of the traditional races. The average elf lives nearly 300 years.",
        imagePath: "/images/svgs/race_elf.svg",
        imagePathActive: "/images/svgs/race_elf_active.svg",
        active: racesSelected.includes(1),
        onClick: () => {
          handleToggleRace(1);
        }
      },
      {
        race: "Dwarf",
        description:
          "Dwarves are often very family oriented, taking great pride in supporting their immediate and extended relatives. Most dwarves regard other dwarven clans with respect and reverence, despite their often competitive nature. Dwarven strongholds are few and far between, however they are undeniable marvels of engineering and masonry. Many dwarves take to a life of adventure in the hopes of strengthening the reputation of their clan, and for personal bragging rights.",
        lifespan:
          "Dwarves live for approximently 220 years, however it is quite rare that a dwarf would die of old age. Most dwarves prefer to die in battle, or on grand adventures.",
        imagePath: "/images/svgs/race_dwarf.svg",
        imagePathActive: "/images/svgs/race_dwarf_active.svg",
        active: racesSelected.includes(2),
        onClick: () => {
          handleToggleRace(2);
        }
      },
      {
        race: "Gnome",
        description:
          "Gnomes are credited with most of the world's mechanical and technological advances. Encouraged by a culture that praises adventure and discovery equally, gnomes often persue scientific interests almost entirely for enjoyment. Hobby and work often overlap. Gnomes have very tightly-knit home communities, however, and seldom stray far from them unless coaxed away with some promise of adventure.",
        lifespan:
          "Gnomes live to be upwards of 260 years of age, often devoting their venerable years to research, and hobbies.",
        imagePath: "/images/svgs/race_gnome.svg",
        imagePathActive: "/images/svgs/race_gnome_active.svg",
        active: racesSelected.includes(3),
        onClick: () => {
          handleToggleRace(3);
        }
      },
      {
        race: "Orc",
        description:
          "Orcs have a bloody family history. In tribal Orcish culture, the word of law is only as strong as your sword arm. Heirarchies are determined by contest and blood, and often result in death to the loser. Still, both near and far away from secluded tribes, Orcish folk thrive in professions of enduring labor and strength. Despite the racial predjudices against them, there are plenty of pure-blooded Orcs living fufilled, prosperous lives.",
        lifespan:
          "Orcs can live for about 140 years. However, their often reckless and violent nature set the average lifespan at about 70 years of age in tribal settings.",
        imagePath: "/images/svgs/race_orc.svg",
        imagePathActive: "/images/svgs/race_orc_active.svg",
        active: racesSelected.includes(4),
        onClick: () => {
          handleToggleRace(4);
        }
      },
      {
        race: "Ogre",
        description: "Ogres ogres ogres ogres ogres.",
        lifespan:
          "Ogres live to be about 160. While often associated with orcish culture, most Ogres live out the majority of their natural lifespan due to their hardy, yet fearful nature.",
        imagePath: "/images/svgs/race_ogre.svg",
        imagePathActive: "/images/svgs/race_ogre_active.svg",
        active: racesSelected.includes(5),
        onClick: () => {
          handleToggleRace(5);
        }
      }
    ];

    let race = races[raceHighlighted];

    return (
      <Fragment>
        <Container>
          <Header title="Race" />

          <div className="race-select">
            <ZagSelector zagButtons={races} />
          </div>

          <div className="class-flex">
            <div className="race-description">
              <h3>{race.race}</h3>
              <p>{race.description}</p>
            </div>
            <div className="race-details">
              <p>{race.lifespan}</p>
            </div>
          </div>

          <Button
            className="back-button"
            onClick={this.handleBackNavigation}
            text="BACK"
          />
          <Button
            className="next-button"
            onClick={this.handleNavigation}
            text="NEXT"
          />
        </Container>
      </Fragment>
    );
  }
}

export default ARace;
