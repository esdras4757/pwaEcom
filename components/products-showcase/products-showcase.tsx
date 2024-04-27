import classNames from 'classnames'
import { Configure, Index } from 'react-instantsearch-dom'

import { Container } from '@/components/container/container'
import { indexName as defaultIndexName } from '@/utils/env'
import ProductsList from '../ProductsList'

export type ProductsShowcaseProps = {
  title?: string
  indexName?: string
  indexId?: string
  className?: string
  hitComponent: React.ComponentType<any>
  [index: string]: any
  products: any[]
}

export function ProductsShowcase({
  indexName = defaultIndexName,
  indexId,
  title,
  className,
  hitComponent,
  products,
  ...searchParameters
}: ProductsShowcaseProps) {
  return (
    <Index indexName={indexName} indexId={indexId}>
      <Configure {...searchParameters} />

      <section className={classNames('py-4 laptop:py-16', className)}>
        <Container>
          {title && (
            <h2 className="text-sm font-semibold  tracking-[2px] uppercase mb-3 laptop:mb-6 laptop:ml-3 laptop:heading-3">
              {title}
            </h2>
          )}

          <ProductsList
            products={products}
            onProductClick={(product) => {
              console.log(product)
            }}
          />
        </Container>
      </section>
    </Index>
  )
}
