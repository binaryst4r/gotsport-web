import {
  CogIcon,
} from "@heroicons/react/24/outline";
import { DashboardNav } from "pages/Accounts/DashboardNav";
import { Heading } from "components/typography/Heading";
import { Toggler } from "components/forms";
import { Container } from "components/layout";
import { MobileAccountSelectTable } from "./MobileAccountSelectTable";
import { useAuth } from "providers/AuthContext";
import { DesktopAccountSelectTable } from "./DesktopAccountSelectTable";
import { useAlertBanner } from "providers/alerts/AlertBannerProvider";

export const AccountSelect = () => {
  const {user} = useAuth()
  const { dispatch } = useAlertBanner();
  if (!user) { return null }
  return (
    <>
      <Container>
        <div className="flex text-mono-white justify-between px-12 py-6 sm:py-16">
          <CogIcon
            className="h-6 sm:invisible"
          />
          <Heading onClick={() => dispatch({ type: "open", payload: {message: 'Yes!', level: 'warning'} })} className="sm:text-[2rem]" size={3}>
            Select Account
          </Heading>
          <div className="invisible">
            <Toggler label="" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="sm:hidden">
          <MobileAccountSelectTable />
        </div>
        <div className="hidden sm:block">
          <DesktopAccountSelectTable />
        </div>
      </Container>
    </>
  );
};
