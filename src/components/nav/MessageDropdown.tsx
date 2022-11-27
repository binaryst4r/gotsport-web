import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { InboxIcon } from '@heroicons/react/24/outline'
import { Avatar } from "components/avatars";

type Message = {
  sender: string
  text: string
  timestamp: string
  avatar: string
};

const messages: Message[] = [
  {
    sender: 'Jane Doe',
    text: 'This is some message text',
    timestamp: '12/12/2022',
    avatar: 'someurl.jpg'
  },
  {
    sender: 'Roger Williams',
    text: 'This is some more message text fr ya',
    timestamp: '12/10/2022',
    avatar: 'someurl.jpg'
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export const MessageDropdown = () => {
  return (

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full bg-gray-800 p-1 text-mono-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-mono-800">
          <span className="sr-only">View messages</span>
          <InboxIcon className="h-6 w-6" aria-hidden="true" />
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
            
            <InboxIcon className="h-4 w-4 inline mr-1" aria-hidden="true" />
            <span>Messages</span>
          </div>
          {/* iterate over notifications */}
          {messages.map((message, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-mono-100 text-mono-black" : "text-mono-700",
                    "block pl-6 pr-4 py-2 text-xs"
                  )}
                >
                  <Avatar size={2} src="" className="float-left" />
                  <span className="text-xs text-mono-500 float-right">{message.timestamp}</span>
                  <span className="block">{message.sender}</span>
                  <span className="text-xs text-mono-500">{message.text}</span>

                </a>
              )}
            </Menu.Item>
          ))}
          <div className="py-1 text-center text-light-blue text-xs py-4">
            <span>View All Messages</span>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
};
