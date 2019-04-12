/*
 *
 * GameInterface actions
 *
 */

import {
  UPGRADE_METAL_MINE,
  UPGRADE_CRYSTAL_MINE,
  GAME_LOOP,
  UPGRADE_FUEL_SYNTHESIZER,
  UPGRADE_POWER_PLANT,
  NOT_ENOUGH_ENERGY,
} from './constants';

const upgradeMetalMineActionCreator = metalMine => ({
  type: UPGRADE_METAL_MINE,
  payload: metalMine,
});

export function upgradeMetalMine() {
  return (dispatch, getState) => {
    const {
      game: {
        metalMine: {
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
        },
      },
    } = getState();
    // console.log('getState():::', metalMine);
    const result = {
      mineLevel: mineLevel + 1,
      mineProduction: Math.round(mineProduction + mineLevel * 1.1),
      upgradeCostMetal: Math.round(upgradeCostMetal * 1.5),
      upgradeCostCrystal: Math.round(upgradeCostCrystal * 1.5),
      energyConsumption: Math.round(9.2 * (mineLevel * 1.1)),
    };
    dispatch(upgradeMetalMineActionCreator(result));
  };
}

const upgradeCrystalMineActionCreator = () => ({
  type: UPGRADE_CRYSTAL_MINE,
});

export function upgradeCrystalMine() {
  return dispatch => {
    dispatch(upgradeCrystalMineActionCreator());
  };
}

const upgradeFuelSynthesizerActionCreator = () => ({
  type: UPGRADE_FUEL_SYNTHESIZER,
});

export function upgradeFuelSynthesizer() {
  return dispatch => {
    dispatch(upgradeFuelSynthesizerActionCreator());
  };
}

const upgradePowerPlantActionCreator = () => ({
  type: UPGRADE_POWER_PLANT,
});

export function upgradePowerPlant() {
  return dispatch => {
    dispatch(upgradePowerPlantActionCreator());
  };
}

const gameLoopActionCreator = () => ({
  type: GAME_LOOP,
});

export function gameLoop() {
  return dispatch => {
    dispatch(gameLoopActionCreator());
  };
}
