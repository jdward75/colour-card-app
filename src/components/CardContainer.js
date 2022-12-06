import styles from "./CardContainer.module.css";
import CardEditor from "./CardEditor";

const CardContainer = (props) => {
  const filteredCards = props.cardsData.filter((cardData) => {
    return cardData.colour === props.colour;
  });

  console.log(props.cardsData);

  return (
    <div className={styles["main-container"]}>
      {filteredCards.map((card) => {
        return (
          <CardEditor
            key={card.id}
            cardData={card}
            edit={false}
            onUpdateCardColour={props.onUpdateCardColour}
            colour={props.colour}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
