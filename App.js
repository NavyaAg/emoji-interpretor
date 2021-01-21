import React, { useState } from "react";
import "./styles.css";

const emojiDictionery = {
  "🥭": "Mango",
  "🍎": "Apple",
  "🍅": "Tomato",
  "🍓": "Strawberry",
  "🍒": "Cherry",
  "🍉": "Watermelon"
};
var emojiWeKnow = Object.keys(emojiDictionery);

export default function App() {
  var [userInput, setUserInput] = useState(
    <em>Translation will apper here</em>
  );
  function clickHandler(event) {
    var output = event.target.value;
    if (output in emojiDictionery) setUserInput(emojiDictionery[output]);
    else setUserInput("Not in our DataBase");
  }
  function emojiClickHandler(emoji) {
    setUserInput(emojiDictionery[emoji]);
  }
  return (
    <div className="App">
      <h1>Em😮jipret😊r</h1>
      <p> You might be confused with your emotions but we know it well!</p>
      <input
        style={{ padding: "0.5rem", minWidth: "80%", margin: "1rem" }}
        onChange={clickHandler}
      ></input>
      <div>{userInput}</div>
      <h3>Emojis We know </h3>
      {emojiWeKnow.map((emoji, index) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            style={{ fontSize: "2rem", margin: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
