import { Container } from "components/layout"
import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const BillingNavigation = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const location = useLocation()
  
  React.useEffect(() => {
    const routes = ['/account/billing/overview', '/account/billing/payments', '/account/billing/billing-info', '/account/billing/invoices']
    setActiveIndex(routes.indexOf(location.pathname))
  }, [location])
  const navOffset = activeIndex*148

  return (
    <Container>
      <div className="h-14 w-full flex text-dark-blue-gray text-sm overflow-x-auto sm:hidden">
        <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${activeIndex === 0 && 'text-mono-700 border-mono-700'}`}>
          <Link to="overview">Overview</Link>
        </div>
        <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${activeIndex === 1 && 'text-mono-700 border-mono-700'}`}>
          <Link to="payments">Payments</Link>
        </div>
        <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${activeIndex === 2 && 'text-mono-700 border-mono-700'}`}>
        <Link to="billing-info">Billing</Link>
        </div>
        <div className={`border-b-2 border-dark-blue-gray px-6 flex justify-center items-center ${activeIndex === 3 && 'text-mono-700 border-mono-700'}`}>
          <Link to="invoices">Invoices</Link>
        </div>
      </div>

      <div className="hidden mt-6 relative h-16 w-full sm:flex border-b-2 border-dark-blue-gray text-dark-blue-gray text-lg">
        <div className={`w-[9.25rem] flex justify-center items-center ${activeIndex === 0 && 'text-mono-700'}`}>
          <Link to="overview">Overview</Link>
        </div>
        <div className={`w-[9.25rem] flex justify-center items-center ${activeIndex === 1 && 'text-mono-700'}`}>
          <Link to="payments">Payments</Link>
        </div>
        <div className={`w-[9.25rem] flex justify-center items-center ${activeIndex === 2 && 'text-mono-700'}`}>
        <Link to="billing-info">Billing</Link>
        </div>
        <div className={`w-[9.25rem] flex justify-center items-center ${activeIndex === 3 && 'text-mono-700'}`}>
          <Link to="invoices">Invoices</Link>
        </div>
        <div style={{
          transform: `translateX(${navOffset}px)`
        }} className={`absolute transition-all bottom-[-2px] h-[2px] bg-mono-700 w-[9.25rem] z-1]`} />
      </div>
    </Container>
  )
}