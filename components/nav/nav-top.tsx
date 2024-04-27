import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import dynamic from 'next/dynamic'
import { memo } from 'react'

import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
import { Link } from '@ui/link/link'
import { NavAutocomplete } from './nav-autocomplete'

const Logo = dynamic<LogoProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  return (
    <div className="flex flex-col px-4 border-b border-neutral-light laptop:mx-10 laptop:px-0 laptop:pt-4 laptop:pb-0 laptop:mb-6">
      <div className="flex justify-between w-full gap-3 laptop:mb-4">
        <div className="flex items-center" style={{cursor:'pointer'}}>
          <img src="/logo.png" width={50} alt="Logo" /> <span className='mx-2' style={{fontFamily:'impact', fontSize:25}}>Tauri 3D</span>
        </div>

        <div className="flex gap-20">
          <div className="flex items-center gap-2 laptop:gap-3">

            <NavAutocomplete/>

            <Laptop>
              <Button title="Favorites">
                <IconLabel icon={FavoriteIcon} />
              </Button>
            </Laptop>

            <Button title="Account">
              <Tablet>
                <IconLabel icon={PersonIcon} label="Account" />
              </Tablet>
              <Laptop>
                <IconLabel icon={PersonIcon} />
              </Laptop>
            </Button>

            <Button title="Cart">
              <Tablet>
                <IconLabel icon={ShoppingBagIcon} label="Cart" />
              </Tablet>
              <Laptop>
                <IconLabel icon={ShoppingBagIcon} />
              </Laptop>
            </Button>
            
          </div>
        </div>
      </div>

      <nav className="hidden mt-2 laptop:block">
        <ul className="hidden gap-6 uppercase laptop:flex">
          <NavItem label="Marvel" href="/catalog/Marvel" />
          <NavItem label="StarWars" href="/catalog/StarWars" />
          <NavItem label="DC" href="/catalog/DC" />
          <NavItem label="Videojuegos" href="/catalog/Videojuegos" />
          <NavItem label="Accessorios" href="/catalog/Accessorios" />
        </ul>
      </nav>
    </div>
  )
})
