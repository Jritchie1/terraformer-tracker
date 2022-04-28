import logo from './mars.png';
import './App.css';
import {Button} from "@mui/material";
import Expansion from "./data/models/expansion";

const expansions = require("./data/collections/expansions.json");

const dynamoRequest = new XMLHttpRequest();
const getExpansions = 'https://4qwjmss1p1.execute-api.us-east-1.amazonaws.com/getExpansions';
dynamoRequest.open("get", getExpansions);
dynamoRequest.send();

dynamoRequest.onreadystatechange = (e) => {
  console.log(dynamoRequest);
}

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
