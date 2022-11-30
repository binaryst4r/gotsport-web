import { Disclosure } from "@headlessui/react"
import { Badge } from "components/badges"
import { EyeIcon, UsersIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { MobileAccountListItem } from "./AccountListItem"
import { User } from "types/User"
import { useAuth } from "providers/AuthContext"

export const MobileAccountSelectTable = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div className="bg-mono-white rounded py-3">
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
                    <MobileAccountListItem key={`guardian-${i}`} account={account} />
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
                  <MobileAccountListItem key={`primary-account}`} primary={true} account={user} />
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
                  {user?.children?.map((account, i) => (
                    <MobileAccountListItem key={`child-${i}`} account={account} />
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
  )
}