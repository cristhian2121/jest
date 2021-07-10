import reducer from '../../reducers';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = 'Mercedez';
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: ['Mercedez'],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
