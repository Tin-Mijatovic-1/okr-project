import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the powerPlant state domain
 */

const selectPowerPlantDomain = state => state.get('powerPlant', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PowerPlant
 */

const makeSelectPowerPlant = () =>
  createSelector(selectPowerPlantDomain, substate => substate.toJS());

export default makeSelectPowerPlant;
export { selectPowerPlantDomain };
