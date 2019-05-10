/*
 *
 * Shipyard reducer
 *
 */

import {
  UPGRADE_SHIP_PARTS,
  UPGRADE_SHIP_FACTORY,
  UPGRADE_SHIP_HANGAR,
} from './constants';

export const initialState = {
  shipPartsFactory: {
    level: 1,
  },
  shipFactory: {
    level: 1,
  },
  shipHangar: {
    level: 1,
  },
};

function shipyardReducer(state = initialState, action) {
  switch (action.type) {
    case UPGRADE_SHIP_PARTS: {
      const { level } = action.payload;
      return {
        ...state,
        shipPartsFactory: {
          ...state.shipPartsFactory,
          level,
        },
      };
    }
    case UPGRADE_SHIP_FACTORY: {
      const { level } = action.payload;
      return {
        ...state,
        shipFactory: {
          ...state.shipFactory,
          level,
        },
      };
    }
    case UPGRADE_SHIP_HANGAR: {
      const { level } = action.payload;
      return {
        ...state,
        shipHangar: {
          ...state.shipHangar,
          level,
        },
      };
    }
    default:
      return state;
  }
}

export default shipyardReducer;
