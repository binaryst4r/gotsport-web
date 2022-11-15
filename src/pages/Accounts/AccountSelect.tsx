import React from "react";
import { UsersIcon, CogIcon, EyeIcon, EyeSlashIcon, ArrowRightOnRectangleIcon, BellIcon, InboxIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { DashboardNav } from "components/nav/DashboardNav";
import { Heading } from "components/typography/Heading";
import { Toggler } from "components/forms";
import { Container } from "components/layout";
import { Disclosure } from "@headlessui/react";
import { Badge } from "components/badges";
import { User } from "types/User";
import { Avatar } from "components/avatars";
import { Button } from "components/buttons";

const guardianAccounts: User[] = [
  {
    first_name: 'Ricky',
    last_name: 'Williams',
    email: 'rickywilliams@mail.com'
  },
  {
    first_name: 'Irene',
    last_name: 'Williams',
    email: 'irenewilliams@mail.com'
  }
]

const primaryAccounts: User[] = [
  {
    first_name: 'Jamie',
    last_name: 'Williams',
    email: 'jamiewilliams@mail.com'
  }
]

const childAccounts: User[] = [
  {
    first_name: 'Jesse',
    last_name: 'Williams',
    email: 'jessewilliams@mail.com'
  },
  {
    first_name: 'Alex',
    last_name: 'Williams',
    email: 'alexwilliams@mail.com'
  }
]

export const AccountSelect = () => {
  return (
    <div className="min-h-screen w-full bg-blue pb-20">
      <DashboardNav />
      <div className="flex text-mono-white justify-between px-12 py-6">
        <CogIcon className="h-6" />
        <Heading size={3}>Select Account</Heading>
        <Toggler label="" />
      </div>

      <Container className="bg-mono-white rounded py-3">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between bg-mono-400 px-4 py-2 text-left text-sm font-medium text-mono-600">
                <Badge size="sm" variant="muted">
                  {open ? (
                    <EyeIcon className="h-4" />
                  ) : (
                    <EyeSlashIcon className="h-4" />
                  )}
                  <span className="ml-2">Guardian</span>
                </Badge>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {guardianAccounts.map(account => (
                  <AccountListItem account={account} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between bg-light-green px-4 py-2 text-left text-sm font-medium">
                <Badge size="sm" variant="primary">
                  <UsersIcon className="h-4" />
                  <span className="ml-2">Primary</span>
                </Badge>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {primaryAccounts.map(account => (
                  <AccountListItem primary={true} account={account} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between bg-lightest-blue/50 px-4 py-2 text-left text-sm font-medium">
                <Badge size="sm" variant="secondary">
                  {/* <UsersIcon className="h-4" /> */}
                  <span className="ml-0">Child</span>
                </Badge>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {childAccounts.map(account => (
                  <AccountListItem account={account} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Container>
    </div>
  );
};

export const AccountListItem = ({account, primary = false, disabled = false}: {account: User, primary?: boolean, disabled?: boolean}) => {
  return (
    <div className="flex px-4 py-3 justify-between border-b border-1 border-mono-300">
      <div className="flex items-start">
        <Avatar className={primary ? "border-[3px] border-green" : ""} size={10} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div className="pl-2">
          <Heading className="font-normal" size={4}>{account.first_name} {account.last_name}</Heading>
          <span className="block font-thin text-green text-xs">{account.email}</span>
          <div className="flex text-light-blue mt-2 justify-start">
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">1</span>
              <BellIcon className="h-5 mr-4" />
            </div>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">1</span>
              <InboxIcon className="h-5 mr-4" />
            </div>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">1</span>
              <DocumentTextIcon className="h-5 mr-4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className="px-3 py-3" variant="blueOutline">
          <ArrowRightOnRectangleIcon className="h-4" />
        </Button>
      </div>
    </div>
  )
}
