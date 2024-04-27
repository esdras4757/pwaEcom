import { Configure } from 'react-instantsearch-dom'

import { Banner } from '@/components/banner/banner'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'
import BannerImage from '@/public/static/images/home/banner.jpg'
import { product } from '@/TypesProject'


const products:product[] = [
  {
    id: '1',
    title: 'product1',
    price: 100,
    image: '/static/images/home/banner.jpg',
    view: 'grid',
    colors: ['red', 'blue'],
    rating: 4,
    reviews: 10,
    available: true,
    tags: [
      {
        label: 'New',
        theme: 'default',
      },
    ],
    currency: {
      symbol: '$',
      position: 'prefix',
    },
    description:'This is a description of the product',
    label: 'Sale',
    originalPrice: 200,
    url: 'https://www.algolia.com',
    
  },
  {
    id: '2',
    title: 'product2',
    price: 200,
    image:
      'https://res.cloudinary.com/hilnmyskv/image/upload/v1638371242/flagship_sunrise/M0E20000000DSDJ_2.jpg',
  },
  {
    id: '3',
    title: 'product3',
    price: 300,
    image:
      'https://res.cloudinary.com/hilnmyskv/image/upload/v1638371242/flagship_sunrise/M0E20000000DSDJ_2.jpg',
  },
]

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

      <Banner
        size="xl"
        title="Nueva<br />Coleccion"
        subtitle="Call of Duty / Warzone"
        image={BannerImage}
        imageAlt="New Collection - Spring/Summer 2021"
        fullWidth={true}
        overlay={true}
        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />

      <ProductsShowcase
        products={products}
        title="Nuevos"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        products={[
          {
            id: '1',
            title: 'product1',
            price: 100,
            image: '/static/images/home/banner.jpg',
          },
          { id: '2', title: 'product2', price: 200 },
          { id: '3', title: 'product3', price: 300 },
        ]}
        title="Spring/summer 2021"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        products={[
          {
            id: '1',
            title: 'product1',
            price: 100,
            image: '/static/images/home/banner.jpg',
          },
          { id: '2', title: 'product2', price: 200 },
          { id: '3', title: 'product3', price: 300 },
        ]}
        title="Recommended for you"
        indexId="recommended"
        query="jacket"
        hitComponent={ProductCardHitShowcase}
      />
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
