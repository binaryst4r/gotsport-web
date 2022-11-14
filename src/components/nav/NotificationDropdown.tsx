import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from '@heroicons/react/24/outline'

type Notification = {
  sender: String
  text: String
  timestamp: String
  read: Boolean
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const notifications: Notification[] = [
  {
    sender: 'FC Boca | Programs',
    text: 'some text',
    timestamp: '10/22/22',
    read: false
  },
  {
    sender: 'John Doe',
    text: 'some more text',
    timestamp: '10/23/22',
    read: false
  },
  {
    sender: 'John Doe',
    text: 'some text you guy',
    timestamp: '11/23/22',
    read: false
  }
]

export const NotificationDropdown = () => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full bg-gray-800 p-1 text-mono-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-mono-800">
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-mono-300 rounded-md bg-mono-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
          <div className="relative rounded-tr-md rounded-tl-md flex items-center truncate text-xs font-medium text-mono-black py-3 px-6 bg-mono-200">
            
            <BellIcon className="h-4 w-4 inline mr-1" aria-hidden="true" />
            <span>Notifications</span>
          </div>
          {/* iterate over notifications */}
          {notifications.map(notification => (
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-mono-100 text-mono-black" : "text-mono-700",
                    "block pl-6 pr-4 py-2 text-xs"
                  )}
                >
                  <span className="text-xs text-mono-500 float-right">{notification.timestamp}</span>
                  <span className="block">{notification.sender}</span>
                  <span className="text-xs text-mono-500">{notification.text}</span>

                </a>
              )}
            </Menu.Item>
          ))}
          <div className="py-1 text-center text-light-blue text-xs py-4">
            <span>View All Notifications</span>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
};
