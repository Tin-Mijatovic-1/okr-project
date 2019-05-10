import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the factory state domain
 */

const selectFactoryDomain = state => state.get('factory', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Factory
 */

const makeSelectFactory = () =>
  createSelector(selectFactoryDomain, substate => substate.toJS());

export default makeSelectFactory;
export { selectFactoryDomain };
