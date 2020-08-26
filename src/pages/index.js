import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const Container = styled.div`
  border-radius: 20px;
  background: #98ddfc;
  color: white;
  text-align: center;
  margin: 2em auto;
  max-width: 1000px;
  padding: 2rem;
  box-shadow: 3px;
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>Hygiene Doctor Products</h1>
      <p>
        Welcome to your new Dental Hygiene Store powered by Gatsby and Shopify.
      </p>
    </Container>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
