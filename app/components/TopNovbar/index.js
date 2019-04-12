/**
 *
 * TopNovbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledTypography = styled(({ ...other }) => (
  <Typography
    classes={{ h5: 'h5', paragraph: 'paragraph', h3: 'h3' }}
    {...other}
  />
))`
  &.h3 {
    color: #424242;
    margin-right: 30px;
    font-size: 18px;
  }
`;

function TopNovbar(props) {
  const { metal, crystal, fuel, energyProductin, energyRequired } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <StyledTypography variant="h3">Metal Resources: {metal}</StyledTypography>
          <StyledTypography variant="h3">Crystal Resources: {crystal}</StyledTypography>
          <StyledTypography variant="h3">Fuel: {fuel}</StyledTypography>
          <StyledTypography variant="h3">Energy Production: {energyProductin}</StyledTypography>
          <StyledTypography variant="h3">Energy Required: {energyRequired}</StyledTypography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNovbar.propTypes = {};

export default TopNovbar;
