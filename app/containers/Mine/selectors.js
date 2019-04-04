import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mine state domain
 */

const selectMineDomain = state => state.get('mine', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Mine
 */

const makeSelectMine = () =>
  createSelector(selectMineDomain, substate => substate.toJS());

export default makeSelectMine;
export { selectMineDomain };
