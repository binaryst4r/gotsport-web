import { Container } from "components/layout"
import { useAuth } from "providers/AuthContext"
import { DesktopBillingOverviewTable } from "./DesktopBillingOverviewTable"
import { MobileBillingOverviewTable } from "./MobileBillingOverviewTable"
export const Overview = () => {
  const {user} = useAuth()
  return (
    <Container>
      <div className="sm:hidden">
        <MobileBillingOverviewTable user={user} />
      </div>
      <div className="hidden sm:block">
        <DesktopBillingOverviewTable user={user} />
      </div>
    </Container>
  )
}