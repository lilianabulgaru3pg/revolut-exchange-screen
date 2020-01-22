import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  rate: {
    border: `2px solid #E6E6FA`,
    borderRadius: 25,
    width: '30%',
    padding: '5px 8px 4px 8px',
    background: 'white',
  },
});

const RateData = ({ rate }) => {
  const classes = useStyles();
  return (
    <Box className={classes.rate}>
      <Typography color="primary" variant="body2">
        {rate}
      </Typography>
    </Box>
  );
};

RateData.propTypes = {
  rate: PropTypes.string.isRequired,
};

export default RateData;
