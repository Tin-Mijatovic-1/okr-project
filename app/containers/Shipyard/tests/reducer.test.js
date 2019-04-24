import shipyardReducer from '../reducer';

describe('shipyardReducer', () => {
  it('returns the initial state', () => {
    expect(shipyardReducer(undefined, {})).toEqual({});
  });
});
