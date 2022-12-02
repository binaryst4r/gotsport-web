import { UsersIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import React from "react"
import { Link, useLocation } from "react-router-dom"

export const NavItem = ({active, children}: {
  active: boolean
  children: React.ReactNode
}) => {
  return (
    <div className={`relative flex justify-center h-full items-center w-full ${active && 'text-light-blue'}`}>
      {children}
      {active ? (<div className="absolute bottom-0 h-[6px] bg-light-blue w-full" />) : null}
    </div>
  )
}

export const DashboardNav = () => {
  const location = useLocation()

  return (
    <div className="h-[4.5rem] bg-mono-200 border-1 border-t border-mono-300">
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between sm:justify-start items-center h-full">
          <Link className="block h-full w-1/2 sm:w-[10rem]" to="account-select">
            <NavItem active={location.pathname === '/account/account-select'}>
              <UsersIcon className="h-8 pr-2" />
              <span>Accounts</span>
            </NavItem>
          </Link>

          <Link className="block h-full w-1/2 sm:w-[10rem]" to="billing">
            <NavItem active={location.pathname.includes('/account/billing')}>
              <CurrencyDollarIcon className="h-8 pr-2" />
              <span>Billing</span>
            </NavItem>
          </Link>
        </div>
      </div>
    </div>
  )
}