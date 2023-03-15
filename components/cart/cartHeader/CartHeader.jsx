import React from 'react'
import { HeaderDiv, HeaderLayout, HeaderTitle } from './Header.styled'

const CartHeader = () => {
  return (
    <HeaderLayout>
        <HeaderDiv>
          <div className='text-left'>Home / Cart</div>
          <HeaderTitle>Your Cart</HeaderTitle>
        </HeaderDiv>
    </HeaderLayout>
  )
}

export default CartHeader