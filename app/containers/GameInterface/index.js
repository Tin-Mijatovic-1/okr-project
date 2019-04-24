/**
 *
 * GameInterface
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Mine from '../Mine';
import PowerPlant from '../PowerPlant';
import {
  upgradeCrystalMine,
  upgradeMetalMine,
  upgradeFuelSynthesizer,
  upgradePowerPlant,
  gameLoop,
} from './actions';
import TopNovbar from '../../components/TopNovbar';

/* eslint-disable react/prefer-stateless-function */
export class GameInterface extends React.Component {
  handleUpgradePlant = () => {
    const { powerPlant } = this.props.game;
    if (powerPlant.isUpgradeable) {
      this.props.upgradePowerPlant();
    }
  };

  handleUpgradeMine = label => {
    const { metalMine, crystalMine, fuelSynthesizer } = this.props.game;
    if (label === 'metalMine') {
      if (metalMine.isUpgradeable) {
        this.props.upgradeMetalMine();
      }
    } else if (label === 'crystalMine') {
      if (crystalMine.isUpgradeable) {
        this.props.upgradeCrystalMine();
      }
    } else if (label === 'fuelSynthesizer') {
      if (fuelSynthesizer.isUpgradeable) {
        this.props.upgradeFuelSynthesizer();
      }
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.props.gameLoop();
    }, 1000);
  }

  render() {
    const {
      metalMine,
      crystalMine,
      fuelSynthesizer,
      powerPlant,
      crystalResources,
      metalResources,
      fuelResources,
      totalEnergyRequired,
    } = this.props.game;
    return (
      <div>
        <TopNovbar
          metal={metalResources}
          crystal={crystalResources}
          fuel={fuelResources}
          energyProductin={powerPlant.energyOutput}
          energyRequired={totalEnergyRequired}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            align: 'center',
          }}
        >
          <Mine
            name="Metal Mine"
            onUpgradeMine={this.handleUpgradeMine}
            label="metalMine"
            data={metalMine}
          />
          <Mine
            name="Crystal Mine"
            onUpgradeMine={this.handleUpgradeMine}
            label="crystalMine"
            data={crystalMine}
          />
          <Mine
            name="Fuel Synthesizer"
            onUpgradeMine={this.handleUpgradeMine}
            label="fuelSynthesizer"
            data={fuelSynthesizer}
          />
          <PowerPlant
            name="Power Plant"
            onUpgradePlant={this.handleUpgradePlant}
            label="powerPlant"
            data={powerPlant}
          />
        </div>
      </div>
    );
  }
}

GameInterface.propTypes = {
  game: PropTypes.object,
  upgradePowerPlant: PropTypes.func,
  upgradeMetalMine: PropTypes.func,
  upgradeCrystalMine: PropTypes.func,
  upgradeFuelSynthesizer: PropTypes.func,
  gameLoop: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    upgradeMetalMine: () => dispatch(upgradeMetalMine()),
    upgradeCrystalMine: () => dispatch(upgradeCrystalMine()),
    upgradeFuelSynthesizer: () => dispatch(upgradeFuelSynthesizer()),
    upgradePowerPlant: () => dispatch(upgradePowerPlant()),
    gameLoop: () => dispatch(gameLoop()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameInterface);
