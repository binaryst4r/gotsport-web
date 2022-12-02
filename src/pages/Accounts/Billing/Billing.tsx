import { Container } from "components/layout"
import { Route, Routes, Navigate } from "react-router-dom"
import { BillingNavigation } from "./BillingNavigation"
import { Overview } from "./Overview"

export const Billing = () => {
  return (
    <>
      <Container>
        <BillingNavigation />
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="transactions" element={<Overview />} />
          <Route path="billing-info" element={<Overview />} />
          <Route path="invoices" element={<Overview />} />
          <Route
            path="*"
            element={<Navigate to="overview" replace />}
          />
        </Routes>
      </Container>
    </>
  )
}