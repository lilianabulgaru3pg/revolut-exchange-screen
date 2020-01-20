import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const CurrentBalance = ({ balance, err = false }) => (
  <Typography variant="subtitle2" color={err ? 'error' : 'initial'}>
    Balance:
    {balance}
  </Typography>
);

CurrentBalance.propTypes = {
  balance: PropTypes.string.isRequired,
  err: PropTypes.bool.isRequired,
};

export default CurrentBalance;
