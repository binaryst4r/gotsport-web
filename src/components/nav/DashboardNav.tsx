import { UsersIcon } from "@heroicons/react/24/solid"

import React from "react"

export const NavItem = ({active, children}: {
  active: boolean
  children: React.ReactNode
}) => {
  return (
    <div className={`flex justify-center h-full items-center w-1/2 sm:w-[10rem] ${active && 'text-light-blue border-b-[6px] border-light-blue'}`}>
      {children}
    </div>
  )
}

export const DashboardNav = () => {
  const [activeTab, setActiveTab] = React.useState<'accounts' | 'billing'>('accounts')
  const accountsTabActive = activeTab === 'accounts'
  const billingTabActive = activeTab === 'billing'
  return (
    <div className="h-[4.5rem] bg-mono-200 border-1 border-t border-mono-300">
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between sm:justify-start items-center h-full">
          <NavItem active={accountsTabActive}>
            {accountsTabActive &&
              <UsersIcon className="h-8 pr-2" />
            }
            <span>Accounts</span>
          </NavItem>

          <NavItem active={billingTabActive}>
            <span>Billing</span>
          </NavItem>
        </div>
      </div>
    </div>
  )
}