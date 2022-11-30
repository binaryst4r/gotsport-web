import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { Disclosure } from "@headlessui/react"
import { Badge } from "components/badges"
import { DesktopAccountListItem } from "./AccountListItem"
import { useAuth } from "providers/AuthContext"

export const DesktopAccountSelectTable = () => {
  const {user} = useAuth()

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
                {user?.parents?.map((account, i) => (
                  <DesktopAccountListItem key={`guardian-${i}`} disabled={true} account={account} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <DesktopAccountListItem key={`primary-account`} primary={true} account={user} />

        {user?.children?.map((account, i) => (
          <DesktopAccountListItem key={`child-${i}`} account={account} />
        ))}
      </div>
    </div>
  )
}