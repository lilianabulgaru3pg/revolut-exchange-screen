import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

// todo addtheme
const useStyles = makeStyles({
  grid: {
    marginTop: '5%',
  },
  fab: {
    margin: '10%',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
});

// todo create generic btn
const ExchangeButton = ({ onExchange, disabled = false, title }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.grid}>
      <Fab
        variant="extended"
        color="secondary"
        aria-label="exchange"
        className={classes.fab}
        onClick={() => onExchange()}
        disabled={disabled}
      >
        {title}
      </Fab>
    </Grid>
  );
};

ExchangeButton.propTypes = {
  onExchange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default ExchangeButton;
