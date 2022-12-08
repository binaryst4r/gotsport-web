import { Container } from "components/layout"
import { Route, Routes, Navigate } from "react-router-dom"
import { BillingNavigation } from "./BillingNavigation"
import { Overview } from "./Overview"
import { Payments } from "./Payments"


export const Billing = () => {
  return (
    <>
        <BillingNavigation />
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="payments" element={<Payments />} />
          <Route path="billing-info" element={<Overview />} />
          <Route path="invoices" element={<Overview />} />
          <Route
            path="*"
            element={<Navigate to="overview" replace />}
          />
        </Routes>
    </>
  )
}