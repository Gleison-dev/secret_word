// CSS
import "./App.css";

// COMPONENTES
import StartScreen from "./components/StartScreen/StartScreen";

// REACT
import { useCallback, useEffect, useState } from "react";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

// DATA
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

export default function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedLetters, setPickedLetters] = useState([]);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickedWordAndCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setPickedLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <section className="App">
        <div>
          {gameStage === "start" && <StartScreen startGame={startGame} />}
          {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
          {gameStage === "end" && <GameOver retry={retry} />}
        </div>
      </section>
    </>
  );
}
