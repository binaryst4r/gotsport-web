import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const activeClass = () => {

}

export const BillingNavigation = () => {
  const location = useLocation()
  const overviewActive = location.pathname === '/account/billing/overview'
  const transactionsActive = location.pathname === '/account/billing/transactions'
  const billingActive = location.pathname === '/account/billing/billing-info'
  const invoicesActive = location.pathname === '/account/billing/invoices'

  return (
    <div className="h-14 w-full flex text-dark-blue-gray text-sm overflow-x-auto">
      <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${overviewActive && 'text-mono-700 border-mono-700'}`}>
        <Link to="overview">Overview</Link>
      </div>
      <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${transactionsActive && 'text-mono-700 border-mono-700'}`}>
        <Link to="transactions">Transactions</Link>
      </div>
      <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${billingActive && 'text-mono-700 border-mono-700'}`}>
      <Link to="billing-info">Billing</Link>
      </div>
      <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${invoicesActive && 'text-mono-700 border-mono-700'}`}>
        <Link to="invoices">Invoices</Link>
      </div>
    </div>
  )
}