/*
 *
 * GameInterface reducer
 *
 */

import {
  GAME_LOOP,
  UPGRADE_METAL_MINE,
  UPGRADE_CRYSTAL_MINE,
  UPGRADE_FUEL_SYNTHESIZER,
} from './constants';

export const initialState = {
  metalResources: 1110,
  crystalResources: 11110,
  fuelResources: 1110,

  crystalMine: {
    mineProduction: 10,
    mineLevel: 1,
    upgradeCostMetal: 130,
    upgradeCostCrystal: 70,
    energyConsumption: 8,
    isUpgradeable: false,
  },
  metalMine: {
    mineProduction: 15,
    mineLevel: 1,
    upgradeCostMetal: 150,
    upgradeCostCrystal: 100,
    energyConsumption: 8,
    isUpgradeable: false,
  },
  fuelSynthesizer: {
    mineProduction: 3,
    mineLevel: 1,
    upgradeCostMetal: 80,
    upgradeCostCrystal: 150,
    energyConsumption: 12,
    isUpgradeable: false,
  },
};

function gameInterfaceReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOOP:
      return {
        ...state,
        metalResources: state.metalResources + state.metalMine.mineProduction,
        crystalResources:
          state.crystalResources + state.crystalMine.mineProduction,
        fuelResources:
          state.fuelResources + state.fuelSynthesizer.mineProduction,
      };
    case UPGRADE_METAL_MINE:
      return {
        ...state,
        metalMine: {
          ...state.metalMine,
          mineLevel: state.metalMine.mineLevel + 1,
          mineProduction: Math.round(
            state.metalMine.mineProduction + state.metalMine.mineLevel * 1.1,
          ),
          upgradeCostMetal: Math.round(state.metalMine.upgradeCostMetal * 1.5),
          upgradeCostCrystal: Math.round(
            state.metalMine.upgradeCostCrystal * 1.5,
          ),
          energyConsumption: Math.round(
            9.2 * (state.metalMine.mineLevel * 1.1),
          ),
        },
        metalResources: state.metalResources - state.metalMine.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.metalMine.upgradeCostCrystal,
      };
    case UPGRADE_CRYSTAL_MINE:
      return {
        ...state,
        crystalMine: {
          ...state.crystalMine,
          mineLevel: state.crystalMine.mineLevel + 1,
          mineProduction: Math.round(
            state.crystalMine.mineProduction +
              state.crystalMine.mineLevel * 1.1,
          ),
          upgradeCostMetal: Math.round(
            state.crystalMine.upgradeCostMetal * 1.5,
          ),
          upgradeCostCrystal: Math.round(
            state.crystalMine.upgradeCostCrystal * 1.5,
          ),
          energyConsumption: Math.round(
            9.2 * (state.crystalMine.mineLevel * 1.1),
          ),
        },
        metalResources:
          state.metalResources - state.crystalMine.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.crystalMine.upgradeCostCrystal,
      };
    case UPGRADE_FUEL_SYNTHESIZER:
      return {
        ...state,
        fuelSynthesizer: {
          ...state.fuelSynthesizer,
          mineLevel: state.fuelSynthesizer.mineLevel + 1,
          mineProduction: Math.round(
            state.fuelSynthesizer.mineProduction +
              state.fuelSynthesizer.mineLevel * 1.1,
          ),
          upgradeCostMetal: Math.round(
            state.fuelSynthesizer.upgradeCostMetal * 1.5,
          ),
          upgradeCostCrystal: Math.round(
            state.fuelSynthesizer.upgradeCostCrystal * 1.5,
          ),
          energyConsumption: Math.round(
            9.2 * (state.fuelSynthesizer.mineLevel * 1.6),
          ),
        },
        metalResources:
          state.metalResources - state.fuelSynthesizer.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.fuelSynthesizer.upgradeCostCrystal,
      };
    default:
      return state;
  }
}

export default gameInterfaceReducer;
