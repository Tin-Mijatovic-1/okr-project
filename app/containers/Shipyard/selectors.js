import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shipyard state domain
 */

const selectShipyardDomain = state => state.get('shipyard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Shipyard
 */

const makeSelectShipyard = () =>
  createSelector(selectShipyardDomain, substate => substate.toJS());

export default makeSelectShipyard;
export { selectShipyardDomain };
