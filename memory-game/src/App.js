import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { getAnimalImages } from './services/animalServices';
import Card from './components/Card';
import GameInfo from './components/GameInfo';
import EndScreen from './components/EndScreen';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([[], []]);

  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState([0, 0]);
  const [attempts, setAttempts] = useState([0, 0]);
  const [player, setPlayer] = useState(1);

  const [disabledCards, setDisabledCards] = useState([]);

  useEffect(() => {
    if (gameStarted) {
      startGame();
    }
  }, [gameStarted]);

  const startGame = async () => {
    const images = await getAnimalImages(6);
    const doubledImages = images.concat(images);
    const shuffledCards = doubledImages.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setMatchedCards([]);
    setOpenedCards([]);
    setDisabledCards([]);
    setScore([0, 0]);
    setAttempts([0, 0]);
    setPlayer(1);
  };

  const handleClick = (index) => {
    if (disabledCards.includes(index)) return;
  
    if (openedCards.length < 2) {
      setOpenedCards((prevState) => [...prevState, index]);
      setDisabledCards((prevState) => [...prevState, index]);
    }
  };

  useEffect(() => {
    if (openedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = openedCards;
      setAttempts((prevAttempts) => {
        const newAttempts = [...prevAttempts];
        newAttempts[player - 1] += 1;
        return newAttempts;
      });

      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        setScore((prevScore) => {
          const newScore = [...prevScore];
          newScore[player - 1] += 1;
          return newScore;
        });
        setMatchedCards((prevState) => [...prevState, ...openedCards]);
        console.log(matchedCards)

      } else {
        setTimeout(() => {
          setDisabledCards((prevState) => prevState.filter((i) => !openedCards.includes(i)));
        }, 1000);
      }
      setTimeout(() => {
        setOpenedCards([]);
        setPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
      }, 1000);
    }
  }, [openedCards]);

  const isCardOpened = (index) => openedCards.includes(index) || matchedCards.includes(index);
  const isGameFinished = () => {
    console.log(cards.length + " cards : matched " + matchedCards.length)
    return matchedCards.length === cards.length 
  };



  if (!gameStarted) {
    return (
      <Container className="App" maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
          Memory Game
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setGameStarted(true)}>
          Start Game
        </Button>
      </Container>
    );
  } else if (isGameFinished()) {
    return (
      <EndScreen
        player1Score={score[0]}
        player2Score={score[1]}
        attempts={attempts}
        onRestart={startGame}
      />
    );
  } else {
    return (
      <Container className="App" maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
          Memory Game
        </Typography>
        <GameInfo
          score={score}
          attempts={attempts}
          player={player}
          onRestart={startGame}
        />
        <Box className="game-board">
          {cards.map((card, index) => (
            <Card
              key={index}
              imgSrc={card}
              isOpened={isCardOpened(index)}
              onClick={() => handleClick(index)}
            />
          ))}
        </Box>
      </Container>
    );

  }
};

export default App;
