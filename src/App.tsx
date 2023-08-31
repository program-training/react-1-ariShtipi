import "./App.css";
import Card from "./components/Card/Card";
import Text from "./components/Text/Text";

const cardData = [
  {
    title: "Card 1",
    imageUrl: "https://loremflickr.com/320/240/brazil,rio",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Card 2",
    imageUrl: "https://loremflickr.com/320/240/paris",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Card 3",
    imageUrl: "https://loremflickr.com/320/240/nature",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function App() {
  return (
    <div className="app-container">
      <Text />
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          text={card.text}
        />
      ))}
    </div>
  );
}
export default App;
