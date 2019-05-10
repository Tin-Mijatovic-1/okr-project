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
import PropTypes from 'prop-types';
import StyledTypography from '../StyledTypography';

function TopNovbar(props) {
  const { metal, crystal, fuel, energyProductin, energyRequired } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar style={{ background: '#1d3245' }}>
          <StyledTypography variant="h3">
            Metal Resources: {metal}
          </StyledTypography>
          <StyledTypography variant="h3">
            Crystal Resources: {crystal}
          </StyledTypography>
          <StyledTypography variant="h3">Fuel: {fuel}</StyledTypography>
          <StyledTypography variant="h3">
            Energy Production: {energyProductin}
          </StyledTypography>
          <StyledTypography variant="h3">
            Energy Required: {energyRequired}
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNovbar.propTypes = {
  metal: PropTypes.string,
  crystal: PropTypes.string,
  fuel: PropTypes.string,
  energyProductin: PropTypes.string,
  energyRequired: PropTypes.string,
};

export default TopNovbar;
