import { Avatar } from "components/avatars"
import { Heading } from "components/typography/Heading"
import { User } from "types/User"

const TableRow = ({user, type}: {user: User, type: 'Primary' | 'Child'}) => {
  return (
    <div className="flex py-6 border-b border-mono-300">
      <div className="flex items-center w-1/4">
        <Avatar size={8} />
        <div className="pl-2">
          <span className="font-bold block text-lg">{user.first_name} {user.last_name}</span>
          <span className="text-mono-400 text-base font-light">
            {type}
          </span>
        </div>
      </div>
      <div className="w-1/4">
        <span>
          3
        </span>
      </div>

      <div className="w-1/4">
        <span className="text-gold">
          $100
        </span>
      </div>

      <div className="w-1/4">
        <span className="text-error">
          $149.00
        </span>
      </div>
    </div>
  )
}

export const DesktopBillingOverviewTable = ({user}: {user: User | null}) => {
  if (!user) {return null}
  return (
    <div className="rounded-lg flex flex-col bg-mono-white mt-10">
      <div className="px-[2.5rem] flex items-center w-full py-6">
        <Heading size={2}>
          Account Overview
        </Heading>
      </div>

      <div className="flex w-full bg-mono-200 h-40 border border-mono-300">
        <div className="w-1/4 py-8 h-full px-[2.5rem] border-r border-mono-300">
          <span className="block h-16 font-light text-lg">Total Invoices</span>
          <span className="block text-2xl font-bold">234</span>
        </div>

        <div className="w-1/4 py-8 h-full px-[2.5rem] border-r border-mono-300">
          <span className="block h-16 font-light text-lg">Outstanding Invoices</span>
          <span className="block text-2xl font-bold">14</span>
        </div>

        <div className="w-1/4 py-8 h-full px-[2.5rem] text-gold border-r border-mono-300">
          <span className="block h-16 font-light text-lg">Total Due Now</span>
          <span className="block text-2xl font-bold">$1140.00</span>
        </div>

        <div className="w-1/4 py-8 h-full px-[2.5rem] text-error">
          <span className="block h-16 font-light text-lg">Total Outstanding Balance</span>
          <span className="block text-2xl font-bold">$3240.00</span>
        </div>
      </div>
      <div className="px-[2.5rem] py-12">
        <div className="flex text-sm mb-6">
          <span className="w-1/4 uppercase text-mono-400">User</span>
          <span className="w-1/4 uppercase text-mono-400">Outstanding Invoices</span>
          <span className="w-1/4 uppercase text-mono-400">Due Now</span>
          <span className="w-1/4 uppercase text-mono-400">Total Outstanding Balance</span>
        </div>

        <TableRow user={user} type="Primary" />
        {user.children.map(child => (
          <TableRow user={child} type="Child" />
        ))}
      </div>
    </div>
  )
}