import { useAuth } from "providers/AuthContext"
import { MobileBillingOverviewTable } from "./MobileBillingOverviewTable"
export const Overview = () => {
  const {user} = useAuth()
  return (
    <>
      <div className="sm:hidden">
        <MobileBillingOverviewTable user={user} />
      </div>
      <div className="hidden sm:block">

      </div>
    </>
  )
}