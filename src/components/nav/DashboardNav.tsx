import { UsersIcon } from "@heroicons/react/24/solid"
import { Container } from "components/layout"
import React from "react"

export const NavItem = ({active, children}: {
  active: boolean
  children: React.ReactNode
}) => {
  return (
    <div className={`flex justify-center h-full items-center w-1/2 text-light-blue ${active && 'border-b-[6px] border-light-blue'}`}>
      {children}
    </div>
  )
}

export const DashboardNav = () => {
  const [activeTab, setActiveTab] = React.useState<'accounts' | 'billing'>('accounts')
  const accountsTabActive = activeTab === 'accounts'
  const billingTabActive = activeTab === 'billing'
  return (
    <div className="h-[4.5rem] bg-mono-white">
      <Container className="flex justify-between h-full items-center">
        <NavItem active={accountsTabActive}>
          {accountsTabActive &&
            <UsersIcon className="h-8 pr-2" />
          }
          <span>Accounts</span>
        </NavItem>

        <NavItem active={billingTabActive}>
          <span>Billing</span>
        </NavItem>
      </Container>
    </div>
  )
}