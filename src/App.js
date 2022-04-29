import logo from './mars.png';
import './App.css';
import {Button} from "@mui/material";
import Expansion from "./data/models/expansion";
import React, {useState} from 'react';

function App() {
  let expansions = [];
  const [expansionCards, setExpansionCards] = useState([])

  const addExpansions = () => {
    const dynamoRequest = new XMLHttpRequest();
    const setExpansions = 'https://4qwjmss1p1.execute-api.us-east-1.amazonaws.com/addExpansions';
    
    dynamoRequest.open("post", setExpansions);
    dynamoRequest.send();

    getAllExpansions();
  }

  const deleteExpansions = () => {
    const dynamoRequest = new XMLHttpRequest();
    const deleteExpansions = 'https://4qwjmss1p1.execute-api.us-east-1.amazonaws.com/deleteExpansions';
    
    dynamoRequest.open("post", deleteExpansions);
    dynamoRequest.send();

    getAllExpansions();
  }

  const getAllExpansions = () => {
    expansions = [];

    const dynamoRequest = new XMLHttpRequest();
    const getExpansions = 'https://4qwjmss1p1.execute-api.us-east-1.amazonaws.com/getExpansions';
    
    dynamoRequest.open("get", getExpansions);
    dynamoRequest.send();
    
    dynamoRequest.onreadystatechange = (e) => {
      try {
        expansions = JSON.parse(dynamoRequest.responseText);

        let cardArray = []

        expansions.forEach((expansion, index) => {
          let expansionCard = <Expansion
              key={index}
              name={expansion.expansion.name}
              id={expansion.expansion.id}
              flavour={expansion.expansion.flavour}
              gameplay={expansion.expansion.gameplay}
              releaseDate={expansion.expansion.releaseDate}
              sx={{width: 300}}
          />
          cardArray.push(expansionCard);
        })
        
        setExpansionCards(cardArray);
      }
      catch {
        console.log(dynamoRequest.responseText);
      }
    }
  }

  return (
    <div className="App">
      <div className='header-title'>
        <p>Terraformer Tracker</p>
      </div>
      <div className="header-controls">
        <Button onClick={addExpansions}>
          Add Expansions
        </Button>
        <Button onClick={getAllExpansions}>
          Get Expansions
        </Button>
        <Button onClick={deleteExpansions}>
          Clear Expansions
        </Button>
      </div>
      <div className='body-card-display'>
        {expansionCards}
      </div>
    </div>
  );
}

export default App;
