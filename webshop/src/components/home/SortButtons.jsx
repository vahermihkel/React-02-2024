import { Button } from '@mui/material'
import React from 'react'

function SortButtons(props) {

  const sortedAZ = () => {
    props.products.sort((a, b) => a.title.localeCompare(b.title));
    props.setProducts(props.products.slice());
  }

  const sortedZA = () => {
    props.products.sort((b, a) => a.title.localeCompare(b.title));
    props.setProducts(props.products.slice());
  }

  const sortedLowToHigh = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  }

  const sortedHightoLow = () => {
    props.products.sort((b, a) => a.price - b.price);
    props.setProducts(props.products.slice());
  }

  const sortedRatingLowtoHigh = () => {
    props.products.sort((a, b) => a.rating.rate - b.rating.rate);
    props.setProducts(props.products.slice());
  }

  const sortedRatingHightoLow = () => {
    props.products.sort((b, a) => a.rating.rate - b.rating.rate);
    props.setProducts(props.products.slice());
  }

  return (
    <div>
      <Button onClick={sortedAZ}>Sorted A-Z</Button>
      <Button onClick={sortedZA}>Sorted Z-A</Button>
      <Button onClick={sortedLowToHigh}>Sorted low to high</Button>
      <Button onClick={sortedHightoLow}>Sorted high to low</Button>
      <Button onClick={sortedRatingLowtoHigh}>Sorted by rating low to high</Button>
      <Button onClick={sortedRatingHightoLow}>Sorted by rating high to low</Button>
    </div>
  )
}

export default SortButtons