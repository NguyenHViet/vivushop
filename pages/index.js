import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/button/Button'
import { ProductCard } from '../components/product-card/ProductCard'
import styles from '../styles/Home.module.css'

const item = {
  name: 'ProductCard',
  imgSrc: '/images/no-image.png',
  basePrice: 15000,
  currentPrice: 10000,
  rating: 5,
  selledCount: 100,
  shop: 'ABCDEFGHIJKLM',
  country: 'VN',
  sale: 33.3
}

export default function Home() {
  return (
    <>
      <ProductCard item={item} />
    </>
  )
}
