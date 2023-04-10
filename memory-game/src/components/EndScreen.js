import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const EndScreen = ({ player1Score, player2Score, attempts, onRestart }) => {
  const winner = player1Score > player2Score ? 1 : player1Score < player2Score ? 2 : 'Tie';

  return (
    <Container className="App" maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        Memory Game
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Game Ended
      </Typography>
      {winner === 'Tie' ? (
        <Typography variant="h5">It's a tie!</Typography>
      ) : (
        <Typography variant="h5">Player {winner} wins!</Typography>
      )}
      <Box mb={3}>
        <Typography variant="body1">Player 1 Score: {player1Score}</Typography>
        <Typography variant="body1">Attempts: {attempts[0]}</Typography>
        <Typography variant="body1">Player 2 Score: {player2Score}</Typography>
        <Typography variant="body1">Attempts: {attempts[1]}</Typography>
        <Button variant="contained" color="primary" onClick={onRestart} style={{ marginTop: 16 }}>
          Restart Game
        </Button>
      </Box>
    </Container>
  );
};

export default EndScreen;
