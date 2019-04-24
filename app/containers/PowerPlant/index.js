/**
 *
 * PowerPlant
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import reducer from './reducer';

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
    background-color: ${props => (props.upgradeable ? '#228B22' : '#E34234')};
    align: center;
    border: 1px solid #696969;
    &:hover {
    background-color: ${props => (props.upgradeable ? '#228B22' : '#E34234')};
    opacity: 0.6;
  },
`;

/* eslint-disable react/prefer-stateless-function */
export class PowerPlant extends React.Component {
  constructor(props) {
    super(props);

    this.state = { upgrading: false, upgradeTime: 3000, countdown: 1000 };
  }

  handleUpgrade = () => {
    const { label, onUpgradePlant } = this.props;
    this.setState(state => ({
      upgrading: true,
      countdown: state.upgradeTime,
    }));

    setTimeout(() => {
      this.setState(state => ({
        upgrading: false,
        upgradeTime: state.upgradeTime * 1.23,
      }));
      onUpgradePlant(label);
    }, this.state.upgradeTime);
    this.startCountdown();
  };

  startCountdown = () => {
    this.counting = setInterval(() => {
      if (this.state.countdown >= 0) {
        this.setState(state => ({ countdown: state.countdown - 1000 }));
      } else {
        clearInterval(this.counting);
      }
    }, 1000);
  };

  render() {
    const { name, data } = this.props;

    return (
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h5">{name}</StyledTypography>{' '}
          <StyledTypography variant="h5">
            Level {data.plantLevel}
          </StyledTypography>
          <StyledTypography variant="h3">
            Energy Output:
            <StyledTypography paragraph>{data.energyOutput}</StyledTypography>
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
            Fuel Consumption
            <StyledTypography paragraph>
              {data.fuelConsumptionPerTick}
            </StyledTypography>
          </StyledTypography>
          <StyledTypography variant="h3">
            Upgrade Time
            <StyledTypography paragraph>
              {Math.round(this.state.upgradeTime / 1000)} sec
            </StyledTypography>
          </StyledTypography>
          <StyledButton
            upgradeable={isUpgradeable(this.props) ? 1 : 0}
            variant="contained"
            onClick={() => this.handleUpgrade()}
            disabled={this.state.upgrading}
          >
            {!this.state.upgrading
              ? 'Upgrade'
              : Math.round(this.state.countdown / 1000)}
          </StyledButton>
        </CardContent>
      </StyledCard>
    );
  }
}

PowerPlant.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onUpgradePlant: PropTypes.func,
  data: PropTypes.object,
};

function isUpgradeable(props) {
  return (
    props.game.metalResources >= props.data.upgradeCostMetal &&
    props.game.crystalResources >= props.data.upgradeCostCrystal
  );
}
function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'powerPlant', reducer });

export default compose(
  withReducer,
  withConnect,
)(PowerPlant);
