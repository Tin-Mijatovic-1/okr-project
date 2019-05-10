/**
 *
 * Shipyard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Factory from '../Factory';
import {
  upgradeShipParts as upgradeShipPartsAction,
  upgradeShipFactory as upgradeShipFactoryAction,
  upgradeShipHangar as upgradeShipHangarAction,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
class Shipyard extends React.Component {
  handelUpgradeFactory = label => {
    const {
      upgradeShipParts,
      upgradeShipFactory,
      upgradeShipHangar,
    } = this.props;
    switch (label) {
      case 'Ship Parts Manufacturer': {
        upgradeShipParts();
        break;
      }
      case 'Ship Factory': {
        upgradeShipFactory();
        break;
      }
      case 'Ship Hangar': {
        upgradeShipHangar();
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    // console.log(this.props.shipyard);
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          align: 'center',
        }}
      >
        <Factory
          label="Ship Parts Manufacturer"
          data={this.props.shipyard.shipPartsFactory}
          handleUpgrade={this.handelUpgradeFactory}
        />
        <Factory
          label="Ship Factory"
          data={this.props.shipyard.shipFactory}
          handleUpgrade={this.handelUpgradeFactory}
        />

        <Factory
          label="Ship Hangar"
          data={this.props.shipyard.shipHangar}
          handleUpgrade={this.handelUpgradeFactory}
        />
      </div>
    );
  }
}

Shipyard.propTypes = {
  shipyard: PropTypes.object,
  upgradeShipParts: PropTypes.func,
  upgradeShipFactory: PropTypes.func,
  upgradeShipHangar: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    shipyard: state.shipyard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    upgradeShipParts: () => dispatch(upgradeShipPartsAction()),
    upgradeShipFactory: () => dispatch(upgradeShipFactoryAction()),
    upgradeShipHangar: () => dispatch(upgradeShipHangarAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Shipyard);
