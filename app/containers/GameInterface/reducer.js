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
  UPGRADE_POWER_PLANT,
} from './constants';

export const initialState = {
  metalResources: 1110,
  crystalResources: 1110,
  fuelResources: 1110,
  totalEnergyRequired: 0,
  productionCoefficient: 1,

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
    mineProduction: 4,
    mineLevel: 1,
    upgradeCostMetal: 80,
    upgradeCostCrystal: 150,
    energyConsumption: 12,
    isUpgradeable: false,
  },
  powerPlant: {
    energyOutput: 30,
    plantLevel: 1,
    upgradeCostMetal: 80,
    upgradeCostCrystal: 150,
    fuelConsumptionPerTick: 2,
    isUpgradeable: false,
  },
};

function gameInterfaceReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOOP:
      return {
        ...state,
        productionCoefficient: getProductionCoefficient(state),
        metalResources: Math.round(
          state.metalResources +
            state.metalMine.mineProduction * state.productionCoefficient,
        ),
        crystalResources: Math.round(
          state.crystalResources +
            state.crystalMine.mineProduction * state.productionCoefficient,
        ),
        fuelResources: Math.round(
          state.fuelResources +
            (state.fuelSynthesizer.mineProduction -
              state.powerPlant.fuelConsumptionPerTick) *
              state.productionCoefficient,
        ),
        metalMine: {
          ...state.metalMine,
          isUpgradeable: isUpgradeable(
            state,
            state.metalMine.upgradeCostMetal,
            state.metalMine.upgradeCostCrystal,
          ),
        },
        crystalMine: {
          ...state.crystalMine,
          isUpgradeable: isUpgradeable(
            state,
            state.metalMine.upgradeCostMetal,
            state.metalMine.upgradeCostCrystal,
          ),
        },
        fuelSynthesizer: {
          ...state.fuelSynthesizer,
          isUpgradeable: isUpgradeable(
            state,
            state.metalMine.upgradeCostMetal,
            state.metalMine.upgradeCostCrystal,
          ),
        },
        powerPlant: {
          ...state.powerPlant,
          isUpgradeable: isUpgradeable(
            state,
            state.metalMine.upgradeCostMetal,
            state.metalMine.upgradeCostCrystal,
          ),
        },
      };
    case UPGRADE_METAL_MINE:
      return {
        ...state,
        totalEnergyRequired:
          state.totalEnergyRequired + state.metalMine.energyConsumption,
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
        totalEnergyRequired:
          state.totalEnergyRequired + state.crystalMine.energyConsumption,
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
        totalEnergyRequired:
          state.totalEnergyRequired + state.fuelSynthesizer.energyConsumption,
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
    case UPGRADE_POWER_PLANT:
      return {
        ...state,
        powerPlant: {
          ...state.powerPlant,
          plantLevel: state.powerPlant.plantLevel + 1,
          energyOutput:
            state.powerPlant.energyOutput + 9 * state.powerPlant.plantLevel,
          fuelConsumptionPerTick: Math.round(
            state.powerPlant.fuelConsumptionPerTick * 1.7,
          ),
          upgradeCostMetal: Math.round(state.powerPlant.upgradeCostMetal * 1.5),
          upgradeCostCrystal: Math.round(
            state.powerPlant.upgradeCostCrystal * 1.5,
          ),
        },
        energyAvailable: state.energyAvailable + state.powerPlant.energyOutput,
        metalResources:
          state.metalResources - state.powerPlant.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.powerPlant.upgradeCostCrystal,
      };
    default:
      return state;
  }
}

function isUpgradeable(state, metalCost, crystalCost) {
  return (
    state.metalResources >= metalCost && state.crystalResources >= crystalCost
  );
}

function getProductionCoefficient(state) {
  if (state.totalEnergyRequired > state.powerPlant.energyOutput) return 0.1;
  return 1;
}

export default gameInterfaceReducer;
