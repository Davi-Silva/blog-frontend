import React from 'react';

import {
  CartWrapper,
  EmptyImg,
  EmptyCartSpan,
} from '../../../../../styled-components/components/cart.styled-components';

import EmptyCart from '../../../../../static/img/empty-cart.png';

const Cart = () => (
  <CartWrapper>
    <EmptyImg src={EmptyCart} />
    <EmptyCartSpan>
      Cart is empty
    </EmptyCartSpan>
  </CartWrapper>
);

export default Cart;
