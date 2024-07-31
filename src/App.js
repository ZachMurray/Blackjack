import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { Container, ImageList, ImageListItem } from '@mui/material';
import DrawCard from './components/DrawCard';

async function newDeck() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  // return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //     return result;
  //   })
  //   .catch((error) => console.error(error));
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", requestOptions);
  return await response.json();
}

class App extends React.Component {
  // constructor () {
  //   this.state = {};
  // }

  async componentDidMount () {
    fetch('/some/async/data')
      .then(resp => resp.json())
      .then(data => this.setState({data}));
  }

  render() {
    let cards = [
      // {
      //   "code": "9S",
      //   "image": "https://deckofcardsapi.com/static/img/9S.png",
      //   "images": {
      //     "svg": "https://deckofcardsapi.com/static/img/9S.svg",
      //     "png": "https://deckofcardsapi.com/static/img/9S.png"
      //   },
      //   "value": "9",
      //   "suit": "SPADES"
      // }
    ];
    let deck = newDeck();
    console.log("deck: " + deck);
    cards.push(DrawCard)
    return (
      <Container>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {cards.map((card => (<ImageListItem><img src={card.image} alt="" /></ImageListItem>)))}
        </ImageList>
        <Buttons />
      </Container>
    );
  }
}

export default App;