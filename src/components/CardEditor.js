import "./CardEditor.css";
import { useState } from "react";

const CardEditor = (props) => {
  const [title, setTitle] = useState("Enter a title here");
  const [colour, setColour] = useState("red");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onColourChangeHandler = (event) => {
    if (props.edit) {
      setColour(event.target.value);
    } else {
      props.onUpdateCardColour(props.cardData.id, event.target.value);
    }
  };

  const addNewCard = () => {
    const newCardData = {
      id: Math.random(),
      title: title,
      colour: colour,
    };
    props.onAddNewCard(newCardData);
  };

  if (props.edit) {
    return (
      <div className="b-main-container">
        <div>Title:</div>
        <input type="text" value={title} onChange={onTitleChangeHandler} />
        <div>Column:</div>
        <select value={colour} onChange={onColourChangeHandler}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
        </select>
        <button onClick={addNewCard}>Add Card</button>
      </div>
    );
  }

  return (
    <div
      className="b-main-container non-edit"
      style={{ backgroundColor: props.colour }}
    >
      <div>Title:</div>
      <span>{props.cardData.title}</span>
      <div>Column:</div>
      <select value={props.cardData.colour} onChange={onColourChangeHandler}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="black">black</option>
        <option value="blue">blue</option>
      </select>
    </div>
  );
};

export default CardEditor;
