import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card";
import './css/main.css';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      imgSrc: viteLogo,
      imgAlt: "viteLogo",
      title: "vite",
      text: "Click on the Vite logo to learn more",
    },
    {
      id: 2,
      imgSrc: reactLogo,
      imgAlt: "reactLogo",
      title: "react",
      text: "Click on the React logo to learn more",
    },
    {
      id: 3,
      imgSrc: null,
      imgAlt: 'img alt',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    },
    {
      id: 3,
      imgSrc: null,
      imgAlt: null,
      title: "Card title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
    },
  ]);

  return (
    <>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            title={card.title}
            text={card.text}
          ></Card>
        ))}
      </div>
      {/* <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
