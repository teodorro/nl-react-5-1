import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card";
import "./css/main.css";

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
      imgAlt: "img alt",
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
          <Card key={card.id}>
            <img
              src={card.imgSrc}
              className="card-img-top"
              alt={card.imgAlt}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a
                href="#"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
