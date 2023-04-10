import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';

const GameInfo = ({ score, attempts, onRestart, player }) => {
  return (
    <Box mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6" style={{ fontWeight: player === 1 ? 'bold' : 'normal' }}>
            Player 1
          </Typography>
          <Typography variant="body1">Score: {score[0]}</Typography>
          <Typography variant="body1">Attempts: {attempts[0]}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" style={{ fontWeight: player === 2 ? 'bold' : 'normal' }}>
            Player 2
          </Typography>
          <Typography variant="body1">Score: {score[1]}</Typography>
          <Typography variant="body1">Attempts: {attempts[1]}</Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={onRestart} style={{ marginTop: 16 }}>
        Restart Game
      </Button>
    </Box>
  );
};

export default GameInfo;
