import type { MouseEvent, MouseEventHandler } from 'react'

type ProductTagType = {
    label: string
    theme?: 'default' | 'eco' | 'on-sale' | 'out-of-stock' | 'popular'
  }
  

  export type ProductPriceCurrency = {
    symbol: string
    position: 'prefix' | 'suffix'
  }
  
  export type ViewMode = 'grid' | 'list'

export interface product{
    id:string
    url?: string
    image?: string
    tags?: ProductTagType[]
    label?: string
    labelHighlighting?: React.ComponentType
    title?: string
    titleHighlighting?: React.ComponentType
    description?: string
    descriptionSnippeting?: React.ComponentType
    colors?: string[]
    price?: number
    originalPrice?: number
    currency?: ProductPriceCurrency
    rating?: number
    reviews?: number
    available?: boolean
    view?: ViewMode
    
    onLinkClick?: MouseEventHandler<HTMLElement>
}