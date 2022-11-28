import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { Disclosure } from "@headlessui/react"
import { Badge } from "components/badges"
import { DesktopAccountListItem } from "./AccountListItem"
import { User } from "types/User"

const guardianAccounts: User[] = [
  {
    id: 3455,
    first_name: 'Ricky',
    last_name: 'Williams',
    email: 'rickywilliams@mail.com'
  },
  {
    id: 3435,
    first_name: 'Irene',
    last_name: 'Williams',
    email: 'irenewilliams@mail.com'
  }
]

const primaryAccounts: User[] = [
  {
    id: 34522,
    first_name: 'Jamie',
    last_name: 'Williams',
    email: 'jamiewilliams@mail.com'
  }
]

const childAccounts: User[] = [
  {
    id: 345225,
    first_name: 'Jesse',
    last_name: 'Williams',
    email: 'jessewilliams@mail.com'
  },
  {
    id: 345512,
    first_name: 'Alex',
    last_name: 'Williams',
    email: 'alexwilliams@mail.com'
  }
]

export const DesktopAccountSelectTable = () => {
  return (
    <div className="w-full">
      <div className="h-[4.5rem] bg-blue justify-between rounded-tl-md rounded-tr-md flex items-center px-8">
        <div className="w-1/6">
          <span className="text-mono-white font-bold">
            Accounts
          </span>
        </div>

        <div className="w-1/6">
          <span className="text-mono-white font-light">
            User Accounts
          </span>
        </div>

        <div className="w-1/6">
          <span className="text-mono-white invisible">
            Icons
          </span>
        </div>

        <div className="w-1/6">
          <span className="text-mono-white font-light">
            Organizations
          </span>
        </div>

        <div className="w-1/6">
          <span className="text-mono-white font-light">
            Requirements & Mandatory Forms
          </span>
        </div>

        <div className="w-1/6">
          <span className="text-mono-white font-light float-right">
            <EllipsisHorizontalIcon className="h-8" />
          </span>
        </div>
      </div>

      <div className="bg-mono-white pb-4">
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                {guardianAccounts.map((account, i) => (
                  <DesktopAccountListItem key={`guardian-${i}`} disabled={true} account={account} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {primaryAccounts.map((account, i) => (
          <DesktopAccountListItem key={`primary-${i}`} primary={true} account={account} />
        ))}

        {childAccounts.map((account, i) => (
          <DesktopAccountListItem key={`child-${i}`} account={account} />
        ))}
      </div>
    </div>
  )
}