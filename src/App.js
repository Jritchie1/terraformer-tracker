import logo from './mars.png';
import './App.css';
import {Button} from "@mui/material";
import Expansion from "./data/models/expansion";

const expansions = require("./data/collections/expansions.json");
let expansionCards = [];

expansions.forEach((expansion, index) => {
  let expansionCard = <Expansion
      key={index}
      name={expansion.name}
      id={expansion.id}
      flavour={expansion.flavour}
      gameplay={expansion.gameplay}
      releaseDate={expansion.releaseDate}
      sx={{width: 300}}
  >

  </Expansion>;
  expansionCards.push(expansionCard);
})

console.log(expansionCards);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Terraformer Tracker
        </p>
        <Button>
          New Game
        </Button>
        <Button>
          Corporations
        </Button>
        <Button>
          Preludes
        </Button>
        <Button>
          Expansions
        </Button>
        <Button>
          Cards
        </Button>
        {expansionCards}
      </header>
    </div>
  );
}

export default App;
