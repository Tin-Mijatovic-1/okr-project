import powerPlantReducer from '../reducer';

describe('powerPlantReducer', () => {
  it('returns the initial state', () => {
    expect(powerPlantReducer(undefined, {})).toEqual({});
  });
});
