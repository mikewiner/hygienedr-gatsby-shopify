import React from 'react'

import Cart from '~/components/Cart'
import styled from '@emotion/styled'
//import { Container } from '~/utils/styles'

const Container = styled.div`
  border-radius: 20px;
  background: #98ddfc;
  color: white;
  text-align: center;
  margin: 2em auto;
  max-width: 960px;
  padding: 2rem;
  box-shadow: 3px;
`

const CartPage = () => (
  <Container>
    <h1>Your Cart</h1>
    <Cart />
  </Container>
)

export default CartPage
