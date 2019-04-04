/**
 *
 * Mine
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(({ ...other }) => (
  <Card classes={{ root: 'root' }} {...other} />
))`
  width: 400px;
  margin: 10px;

  &.root {
    background-color: #f0f0f0;
    text-align: center;
    align: center;
  }
`;

const StyledTypography = styled(({ ...other }) => (
  <Typography
    classes={{ h5: 'h5', paragraph: 'paragraph', h3: 'h3' }}
    {...other}
  />
))`
  &.h5 {
    color: #424242;
    margin-bottom: 10px;
    font-size: 24px;
  }
  &.h3 {
    color: #424242;
    font-size: 18px;
  }
  &.paragraph {
    margin-top: 5px;
    color: #006ad1;
    font-size: 25px;
  }
`;

const StyledButton = styled(({ ...other }) => (
  <Button classes={{ root: 'root' }} {...other} />
))`
  &.root {
    color: white;
    background-color: #70b800;
    align: center;
    border: 1px solid #006400;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class Mine extends React.Component {
  render() {
    const { name, label, onUpgradeMine, data } = this.props;
    return (
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h5">{name}</StyledTypography>{' '}
          <StyledTypography variant="h5">
            Level {data.mineLevel}
          </StyledTypography>
          <StyledTypography variant="h3">
            Production:
            <StyledTypography paragraph>{data.mineProduction}</StyledTypography>
          </StyledTypography>
          <StyledTypography variant="h3">
            Upgrade Cost Metal:
            <StyledTypography paragraph>
              {data.upgradeCostMetal}
            </StyledTypography>
          </StyledTypography>
          <StyledTypography variant="h3">
            Upgrade Cost Crystal:
            <StyledTypography paragraph>
              {data.upgradeCostCrystal}
            </StyledTypography>
          </StyledTypography>
          <StyledTypography variant="h3">
            Energy Consumption:
            <StyledTypography paragraph>
              {data.energyConsumption}
            </StyledTypography>
          </StyledTypography>
          <StyledButton
            variant="contained"
            onClick={() => onUpgradeMine(label)}
          >
            Upgrade
          </StyledButton>
        </CardContent>
      </StyledCard>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

Mine.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onUpgradeMine: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default connect(mapStateToProps)(Mine);
