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

const upgradeCrystalMineActionCreator = crystalMine => ({
  type: UPGRADE_CRYSTAL_MINE,
  payload: crystalMine,
});

export function upgradeCrystalMine() {
  return (dispatch, getState) => {
    const {
      game: {
        crystalMine: {
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
        },
      },
    } = getState();
    const result = {
      mineLevel: mineLevel + 1,
      mineProduction: Math.round(mineProduction + mineLevel * 1.1),
      upgradeCostMetal: Math.round(upgradeCostMetal * 1.5),
      upgradeCostCrystal: Math.round(upgradeCostCrystal * 1.5),
      energyConsumption: Math.round(9.2 * (mineLevel * 1.1)),
    };
    dispatch(upgradeCrystalMineActionCreator(result));
  };
}

const upgradeFuelSynthesizerActionCreator = FuelSynthesizer => ({
  type: UPGRADE_FUEL_SYNTHESIZER,
  payload: FuelSynthesizer,
});

export function upgradeFuelSynthesizer() {
  return (dispatch, getState) => {
    const {
      game: {
        fuelSynthesizer: {
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
        },
      },
    } = getState();
    const result = {
      mineLevel: mineLevel + 1,
      mineProduction: Math.round(mineProduction + mineLevel * 1.1),
      upgradeCostMetal: Math.round(upgradeCostMetal * 1.5),
      upgradeCostCrystal: Math.round(upgradeCostCrystal * 1.5),
      energyConsumption: Math.round(9.2 * (mineLevel * 1.1)),
    };
    dispatch(upgradeFuelSynthesizerActionCreator(result));
  };
}

const upgradePowerPlantActionCreator = powerPlant => ({
  type: UPGRADE_POWER_PLANT,
  payload: powerPlant,
});

export function upgradePowerPlant() {
  return (dispatch, getState) => {
    const {
      game: {
        powerPlant: { plantLevel, energyOutput, fuelConsumptionPerTick },
      },
    } = getState();
    const result = {
      plantLevel: plantLevel + 1,
      energyOutput: energyOutput + 9 * plantLevel,
      fuelConsumptionPerTick: Math.round(fuelConsumptionPerTick * 1.7),
    };
    dispatch(upgradePowerPlantActionCreator(result));
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
