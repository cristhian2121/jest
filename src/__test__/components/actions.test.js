import actions from '../../actions';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Actions', () => {
  const payload = ProviderMock;
  test('addToCart Action', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
