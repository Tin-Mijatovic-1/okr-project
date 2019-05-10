import factoryReducer from '../reducer';

describe('factoryReducer', () => {
  it('returns the initial state', () => {
    expect(factoryReducer(undefined, {})).toEqual({});
  });
});
