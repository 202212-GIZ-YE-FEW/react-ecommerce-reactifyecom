
import { CartDiv } from '@/components/cart/Cart.styled'
import CartContent from '@/components/cart/cartContent/CartTable'
import CartHeader from '@/components/cart/cartHeader/CartHeader'
import React from 'react'

const Cart = () => {
  return (
    <CartDiv>
      <CartHeader/>
      <CartContent/>
    </CartDiv>
  )
}

export default Cart