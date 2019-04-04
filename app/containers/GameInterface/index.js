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
import {
  upgradeCrystalMine,
  upgradeMetalMine,
  upgradeFuelSynthesizer,
  gameLoop,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class GameInterface extends React.Component {
  handleUpgradeMine = label => {
    const {
      metalMine,
      crystalMine,
      fuelSynthesizer,
      crystalResources,
      metalResources,
      fuelResources,
    } = this.props.game;
    if (label === 'metalMine') {
      if (
        metalMine.upgradeCostMetal <= metalResources &&
        metalMine.upgradeCostCrystal <= crystalResources
      ) {
        this.props.upgradeMetalMine();
      }
    } else if (label === 'crystalMine') {
      if (
        crystalMine.upgradeCostCrystal <= crystalResources &&
        crystalMine.upgradeCostMetal <= metalResources
      ) {
        this.props.upgradeCrystalMine();
      }
    } else if (label === 'fuelSynthesizer') {
      if (
        fuelSynthesizer.upgradeCostCrystal <= crystalResources &&
        fuelSynthesizer.upgradeCostMetal <= metalResources
      ) {
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
      crystalResources,
      metalResources,
      fuelResources,
    } = this.props.game;
    return (
      <div>
        <div>
          <strong>Metal: {metalResources}</strong>
        </div>
        <div>
          <strong>Crystal: {crystalResources}</strong>
        </div>
        <div>
          <strong>Fuel: {fuelResources}</strong>
        </div>
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
          <Mine
            name="Power Plant"
            onUpgradeMine={this.handleUpgradeMine}
            label="powerPlant"
            data={crystalMine}
          />
        </div>
      </div>
    );
  }
}

GameInterface.propTypes = {
  game: PropTypes.object,
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
    gameLoop: () => dispatch(gameLoop()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameInterface);
