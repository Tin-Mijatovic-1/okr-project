/**
 *
 * Mine
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import StyledButton from '../../components/StyledButton';
import StyledTypography from '../../components/StyledTypography';
import StyledCard from '../../components/StyledCard';

/* eslint-disable react/prefer-stateless-function */
export class Mine extends React.Component {
  constructor(props) {
    super(props);

    this.state = { upgrading: false, upgradeTime: 3000, countdown: 1000 };
  }

  handleUpgrade = () => {
    const { label, onUpgradeMine } = this.props;
    this.setState(state => ({
      upgrading: true,
      countdown: state.upgradeTime,
    }));

    setTimeout(() => {
      this.setState(state => ({
        upgrading: false,
        upgradeTime: state.upgradeTime * 1.23,
      }));
      onUpgradeMine(label);
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
    const { productionCoefficient } = this.props.game;
    return (
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h5">{name}</StyledTypography>
          <StyledTypography variant="h5">
            Level {data.mineLevel}
          </StyledTypography>
          <StyledTypography variant="h3">
            Production:
            <StyledTypography paragraph>
              {Math.round(data.mineProduction * productionCoefficient)}
            </StyledTypography>
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

Mine.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onUpgradeMine: PropTypes.func.isRequired,
  data: PropTypes.object,
  game: PropTypes.object,
  productionCoefficient: PropTypes.number,
};

export default connect(mapStateToProps)(Mine);
