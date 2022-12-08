import { Avatar } from "components/avatars"
import { Heading } from "components/typography/Heading"
import { User } from "types/User"

const TableRow = ({user, type}: {user: User, type: 'Primary' | 'Child'}) => {
  return (
    <div className="flex border-b border-mono-400 py-5">
      <div className="flex grow-0 w-[2.5rem]">
        <Avatar className="h-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </div>
      <div className="pl-2 grow">
        <Heading size={3}>
          {user?.first_name} {user?.last_name} <span className="pl-4 text-mono-500 font-normal"> {`(${type})`}</span>
        </Heading>
        <div className="flex w-full justify-between text-sm font-light leading-7">
          <span className="w-3/4">
            Outstanding Invoices
          </span>
          <span className="w-1/4">
            24
          </span>
        </div>

        <div className="flex w-full justify-between text-sm font-light text-gold leading-7">
          <span className="w-3/4">
            Due Now
          </span>
          <span className="w-1/4">
            $100
          </span>
        </div>

        <div className="flex w-full justify-between text-sm font-light text-error leading-7">
          <span className="w-3/4">
            Outstanding Balance
          </span>
          <span className="w-1/4">
            $500
          </span>
        </div>
      </div>
    </div>
  )
}

export const MobileBillingOverviewTable = ({user}: {user: User | null}) => {
  if (!user) {return null}
  return (
    <div className="flex flex-col mt-3 shadow-md">
      <div className="flex h-24 bg-mono-200 rounded-tl-lg rounded-tr-lg">
        <div className="w-1/3 p-4 flex flex-col justify-between h-full">
          <span className="text-sm text-light leading-4">
            Outstanding Invoices
          </span>

          <span className="text-base font-bold">
            327
          </span>
        </div>

        <div className="w-1/3 p-4 flex flex-col justify-between h-full border-l border-1 border-r border-mono-300 text-gold">
          <span className="text-sm text-light leading-4">
            Due Now
          </span>

          <span className="text-base font-bold">
            $600.00
          </span>
        </div>

        <div className="w-1/3 p-4 flex flex-col justify-between h-full text-error">
          <span className="text-sm text-light leading-4">
            Outstanding Balance
          </span>

          <span className="text-base font-bold">
            $1400.00
          </span>
        </div>
      </div>
      <div className="bg-mono-white p-4">
        <TableRow user={user} type="Primary" />
        {user.children.map((childAccount, i) => (
          <TableRow key={i} user={childAccount} type="Child" />
        ))}
      </div>
    </div>
  )
}