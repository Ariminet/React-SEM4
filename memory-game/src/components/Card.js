import React from 'react';
import { Card as MuiCard, CardMedia, Grid } from '@mui/material';

const Card = ({ imgSrc, isOpened, onClick }) => {
  return (
    <Grid item xs={4}>
      <MuiCard
        sx={{
          position: 'relative',
          width: 'calc(100% - 16px)',
          marginBottom: '24px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <CardMedia
          sx={{
            paddingTop: 'calc(100% + 16px)',
            opacity: isOpened ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
          image={imgSrc}
          title="Animal"
        />
      </MuiCard>
    </Grid>
  );
};

export default Card;
