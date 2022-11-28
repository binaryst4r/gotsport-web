import React from "react";
import {
  UsersIcon,
  CogIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  InboxIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { DashboardNav } from "components/nav/DashboardNav";
import { Heading } from "components/typography/Heading";
import { Toggler } from "components/forms";
import { Container } from "components/layout";
import { MobileAccountSelectTable } from "./MobileAccountSelectTable";
import { DashboardHeader } from "./DashboardHeader";
import { useAuth } from "providers/AuthContext";
import { DesktopAccountSelectTable } from "./DesktopAccountSelectTable";
import AlertBanner from "components/alerts/AlertBanner";
import { useAlertBanner } from "providers/alerts/AlertBannerProvider";

export const AccountSelect = () => {
  // const {user} = useAuth()
  const { dispatch } = useAlertBanner();
  const user = {
    id: 42669,
    first_name: "Jamie",
    last_name: "Williams",
    email: "jamiewilliams@mail.com",
  };
  return (
    <div className="min-h-screen w-full bg-dark-blue pb-20">
      <div className="absolute w-full top-16">
        <AlertBanner />
      </div>
      <DashboardHeader user={user} />
      <DashboardNav />
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
    </div>
  );
};
