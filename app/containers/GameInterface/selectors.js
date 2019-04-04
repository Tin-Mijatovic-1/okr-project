import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gameInterface state domain
 */

const selectGameInterfaceDomain = state =>
  state.get('gameInterface', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GameInterface
 */

const makeSelectGameInterface = () =>
  createSelector(selectGameInterfaceDomain, substate => substate.toJS());

export default makeSelectGameInterface;
export { selectGameInterfaceDomain };
