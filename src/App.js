import "./App.css";
import CardEditor from "./components/CardEditor";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

const App = () => {
  const [cardsData, setCardsData] = useState([]);

  const addNewCard = (newCardData) => {
    setCardsData((prevState) => {
      return [...prevState, newCardData];
    });
  };

  const updateCardColour = (id, colour) => {
    setCardsData((prevState) => {
      // for (const obj of prevState) {
      //   if (obj.id === id) {
      //     obj.colour = colour;
      //   }
      //   break;
      // }
      const newState = prevState.map((cardData) => {
        if (cardData.id === id) {
          return { ...cardData, colour: colour };
        }
        return cardData;
      });
      return newState;
    });
  };

  return (
    <div className="a-main-container">
      <div className="a-container-1">
        <CardEditor onAddNewCard={addNewCard} edit={true} />
      </div>
      <div className="a-container-2">
        <CardContainer
          colour="red"
          cardsData={cardsData}
          onUpdateCardColour={updateCardColour}
        />
        <CardContainer
          colour="green"
          cardsData={cardsData}
          onUpdateCardColour={updateCardColour}
        />
        <CardContainer
          colour="black"
          cardsData={cardsData}
          onUpdateCardColour={updateCardColour}
        />
        <CardContainer
          colour="blue"
          cardsData={cardsData}
          onUpdateCardColour={updateCardColour}
        />
      </div>
    </div>
  );
};

export default App;
