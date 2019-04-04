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
} from './constants';

const upgradeMetalMineActionCreator = () => ({
  type: UPGRADE_METAL_MINE,
});

export function upgradeMetalMine() {
  return dispatch => {
    dispatch(upgradeMetalMineActionCreator());
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

const gameLoopActionCreator = () => ({
  type: GAME_LOOP,
});

export function gameLoop() {
  return dispatch => {
    dispatch(gameLoopActionCreator());
  };
}
