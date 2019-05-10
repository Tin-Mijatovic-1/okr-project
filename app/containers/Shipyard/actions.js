/*
 *
 * Shipyard actions
 *
 */

import {
  UPGRADE_SHIP_PARTS,
  UPGRADE_SHIP_FACTORY,
  UPGRADE_SHIP_HANGAR,
} from './constants';

const upgradeShipPartsActionCreator = shipParts => ({
  type: UPGRADE_SHIP_PARTS,
  payload: shipParts,
});
export function upgradeShipParts() {
  return (dispatch, getState) => {
    const {
      shipyard: {
        shipPartsFactory: { level },
      },
    } = getState();
    const result = {
      level: level + 1,
    };
    dispatch(upgradeShipPartsActionCreator(result));
  };
}

const upgradeShipFactoryActionCreator = shipFactory => ({
  type: UPGRADE_SHIP_FACTORY,
  payload: shipFactory,
});
export function upgradeShipFactory() {
  return (dispatch, getState) => {
    const {
      shipyard: {
        shipFactory: { level },
      },
    } = getState();
    const result = {
      level: level + 1,
    };
    dispatch(upgradeShipFactoryActionCreator(result));
  };
}

const upgradeShipHangarActionCreator = shipHangar => ({
  type: UPGRADE_SHIP_HANGAR,
  payload: shipHangar,
});
export function upgradeShipHangar() {
  return (dispatch, getState) => {
    const {
      shipyard: {
        shipHangar: { level },
      },
    } = getState();

    const result = {
      level: level + 1,
    };
    dispatch(upgradeShipHangarActionCreator(result));
  };
}
