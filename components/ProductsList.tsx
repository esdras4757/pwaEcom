import { product } from '@/TypesProject';
import React from 'react'
import { ProductCard } from './product-card/product-card';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import classNames from 'classnames'
export interface ProductsListProps {
    products: product[];
    onProductClick: (product: product) => void;

    
}

const ProductsList = (props:ProductsListProps) => {
    const { products, onProductClick } = props;
    const viewMode:'grid'|'list' = 'grid'
  return (
    <section className="w-full">


<m.ol
        className={classNames('overflow-hidden', {
          [classNames('grid grid-cols-2 gap-2 grid-cols-2 laptop:grid-cols-5')]:
            viewMode === 'grid',
          [classNames(
            'flex flex-col gap-4 laptop:grid laptop:gap-0',
           ' laptop:grid-cols-1'
          )]: '',
        })}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence>
        {
        products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))
      }
        </AnimatePresence>
      </m.ol>
    </section>

  )
}

export default ProductsList
