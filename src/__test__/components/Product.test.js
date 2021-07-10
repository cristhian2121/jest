import React from 'react';
import { mount, shallow } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';

import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product/>', () => {
  test('Render Component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('Add product to shop cart', () => {
    const handleAddToCart = jest.fn(); // simulate function
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    // Validate if when click the function to add to shop cart
    // only dispatch one time
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
