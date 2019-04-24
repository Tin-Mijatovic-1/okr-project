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
  metalResources: 11111,
  crystalResources: 11111,
  fuelResources: 0,
  totalEnergyRequired: 0,
  productionCoefficient: 1,

  crystalMine: {
    mineProduction: 10,
    mineLevel: 1,
    upgradeCostMetal: 130,
    upgradeCostCrystal: 70,
    energyConsumption: 1,
  },
  metalMine: {
    mineProduction: 15,
    mineLevel: 1,
    upgradeCostMetal: 150,
    upgradeCostCrystal: 100,
    energyConsumption: 1,
  },
  fuelSynthesizer: {
    mineProduction: 4,
    mineLevel: 1,
    upgradeCostMetal: 80,
    upgradeCostCrystal: 150,
    energyConsumption: 1,
  },
  powerPlant: {
    energyOutput: 30,
    plantLevel: 1,
    upgradeCostMetal: 80,
    upgradeCostCrystal: 150,
    fuelConsumptionPerTick: 5,
  },
};

function gameInterfaceReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_LOOP:
      return {
        ...state,
        totalEnergyRequired:
          state.crystalMine.energyConsumption +
          state.metalMine.energyConsumption +
          state.fuelSynthesizer.energyConsumption,
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
              state.powerPlant.fuelConsumptionPerTick *
                state.productionCoefficient),
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
    case UPGRADE_METAL_MINE: {
      const {
        mineLevel,
        mineProduction,
        upgradeCostMetal,
        upgradeCostCrystal,
        energyConsumption,
      } = action.payload;
      return {
        ...state,
        metalMine: {
          ...state.metalMine,
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
          energyConsumption,
        },

        metalResources: state.metalResources - state.metalMine.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.metalMine.upgradeCostCrystal,
      };
    }
    case UPGRADE_CRYSTAL_MINE: {
      const {
        mineLevel,
        mineProduction,
        upgradeCostMetal,
        upgradeCostCrystal,
        energyConsumption,
      } = action.payload;
      return {
        ...state,
        crystalMine: {
          ...state.crystalMine,
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
          energyConsumption,
        },
        metalResources:
          state.metalResources - state.crystalMine.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.crystalMine.upgradeCostCrystal,
      };
    }

    case UPGRADE_FUEL_SYNTHESIZER: {
      const {
        mineLevel,
        mineProduction,
        upgradeCostMetal,
        upgradeCostCrystal,
        energyConsumption,
      } = action.payload;
      return {
        ...state,
        fuelSynthesizer: {
          ...state.fuelSynthesizer,
          mineLevel,
          mineProduction,
          upgradeCostMetal,
          upgradeCostCrystal,
          energyConsumption,
        },
        metalResources:
          state.metalResources - state.fuelSynthesizer.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.fuelSynthesizer.upgradeCostCrystal,
      };
    }
    case UPGRADE_POWER_PLANT: {
      const {
        plantLevel,
        energyOutput,
        fuelConsumptionPerTick,
      } = action.payload;
      return {
        ...state,
        powerPlant: {
          ...state.powerPlant,
          plantLevel,
          energyOutput,
          fuelConsumptionPerTick,
          upgradeCostMetal: Math.round(state.powerPlant.upgradeCostMetal * 1.5),
          upgradeCostCrystal: Math.round(
            state.powerPlant.upgradeCostCrystal * 1.5,
          ),
        },
        metalResources:
          state.metalResources - state.powerPlant.upgradeCostMetal,
        crystalResources:
          state.crystalResources - state.powerPlant.upgradeCostCrystal,
      };
    }
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
  if (
    state.totalEnergyRequired > state.powerPlant.energyOutput ||
    state.fuelResources <= 0
  )
    return 0.2;
  return 1;
}

export default gameInterfaceReducer;
