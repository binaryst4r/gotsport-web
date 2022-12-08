import { DashboardNav } from "pages/Accounts/DashboardNav"
import AlertBanner from "components/alerts/AlertBanner"
import { DashboardHeader } from "./DashboardHeader"
import { useAuth } from "providers/AuthContext"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AccountSelect } from "./AccountSelect/AccountSelect"
import { Billing } from "./Billing/Billing"

export const Accounts = () => {
  const {user} = useAuth()
  const location = useLocation()
  if (!user) {return null}
  return (
    <div className={`${location.pathname.includes('account-select') && 'bg-account-bg bg-bottom'} bg-mono-300 min-h-screen w-full pb-20`}>
      <div className="absolute w-full top-16">
        <AlertBanner />
      </div>
      <DashboardHeader user={user} />
      <DashboardNav />
      <Routes>
        <Route element={<Billing />} path="billing/*" />
        <Route element={<AccountSelect />} path="account-select" />
        <Route
            path="*"
            element={<Navigate to="account-select" replace />}
          />
      </Routes>
    </div>
  )
}