import React from "react";
import { Label } from "components/typography/Label";
import { Body } from "components/typography/Body";
import { Heading } from "components/typography/Heading";
import { Button } from "components/buttons";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import logo from "images/gotsport-lt.png";
import {
  SelectInput,
  TextInput,
  TextArea,
  Toggler,
  InputOption,
} from "components/forms";
import { ShareIcon } from "@heroicons/react/24/solid";
import { Modal } from "components/layout";
import { Badge } from "components/badges";


const sampleInputOptions: InputOption[] = [
  {
    name: "Hello",
    value: "hello",
    display: "Hello john",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Design = () => {
  const location = useLocation()

  return (
    <div className="flex">
      <div className="flex min-h-screen flex-col bg-mono-700 w-1/4">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div>
            <Link className="flex flex-shrink-0 items-center px-4" to="/">
              <img
                className="h-8 w-auto"
                src={logo}
                alt="GotSport"
              />
              <span className="text-light-green block pl-4">Design</span>
            </Link>
          </div>
          <nav className="mt-5 flex-1 space-y-1 bg-mono-700 px-2" aria-label="Sidebar">
            <Link
              key={'typography'}
              to={'/design/typography'}
              className={classNames(
                location.pathname === '/design/typography' ? 'bg-mono-600 text-light-green' : 'text-mono-300 hover:bg-mono-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <span className="flex-1">Typography</span>
            </Link>
            <Link
              key={'buttons'}
              to={'/design/buttons'}
              className={classNames(
                location.pathname === '/design/buttons' ? 'bg-mono-600 text-light-green' : 'text-mono-300 hover:bg-gray-700 hover:text-light-green',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <span className="flex-1">Buttons</span>
            </Link>
            <Link
              key={'badges'}
              to={'/design/badges'}
              className={classNames(
                location.pathname === '/design/badges' ? 'bg-mono-600 text-light-green' : 'text-mono-300 hover:bg-gray-700 hover:text-light-green',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <span className="flex-1">Badges</span>
            </Link>
            <Link
              key={'forms'}
              to={'/design/forms'}
              className={classNames(
                location.pathname === '/design/forms' ? 'bg-mono-600 text-light-green' : 'text-mono-300 hover:bg-gray-700 hover:text-light-green',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <span className="flex-1">Forms</span>
            </Link>
            <Link
              key={'layout'}
              to={'/design/layout'}
              className={classNames(
                location.pathname === '/design/layout' ? 'bg-mono-600 text-light-green' : 'text-mono-300 hover:bg-gray-700 hover:text-light-green',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <span className="flex-1">Layout</span>
            </Link>
          </nav>
        </div>
      </div>
        <div className="w-3/4 p-6">
          <Routes>
            <Route path='/' element={
              <>
                <Heading size={2}>GotSport Design system</Heading>
                <Body>Use navigation on the left to view specific elements.</Body>
              </>
            } />
            <Route path="typography" element={<Typography />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="badges" element={<Badges />} />
            <Route path="forms" element={<Forms />} />
            <Route path="layout" element={<Layout />} />
          </Routes>
        </div>
    </div>

  )
}

const Typography = () => {
  return (
    <>
      <Heading>Typography</Heading>
      <Label className="mt-2 block">Body Paragraph</Label>
      <ul role="list" className="divide-y divide-gray-200">
        <li>
          <Body>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum.
          </Body>
        </li>
      </ul>

      <Label className="mt-2 block">Headings</Label>
      <ul role="list" className="divide-y divide-gray-200">
        <li>
          <Heading size={1}>Size 1</Heading>
        </li>
        <li>
          <Heading size={2}>Size 2</Heading>
        </li>
        <li>
          <Heading size={3}>Size 3</Heading>
        </li>
        <li>
          <Heading size={4}>Size 4</Heading>
        </li>
      </ul>

      <Label className="mt-2 block">Labels</Label>
      <ul role="list" className="divide-y divide-gray-200">
        <li>
          <Label variant="sm">Small Label</Label>
        </li>
        <li>
          <Label variant="md">Medium Label</Label>
        </li>
        <li>
          <Label variant="lg">Large Label</Label>
        </li>
      </ul>
    </>
  )
}

const Buttons = () => {
  return (
    <>
      <Heading>Buttons</Heading>
      <ul role="list" className="divide-y divide-gray-200">
        <li className="py-4">
          <Button variant="blueOutline">Blue Outline</Button>
        </li>

        <li className="py-4">
          <Button variant="white">White</Button>
        </li>

        <li className="py-4">
          <Button variant="gray">Gray</Button>
        </li>

        <li className="py-4">
          <Button variant="link">Link style button.</Button>
        </li>

        <li className="py-4">
          <Button variant="pillPrimary">Pill Primary</Button>
        </li>

        <li className="py-4">
          <Button variant="pillSecondary">Pill Secondary</Button>
        </li>

        <li className="py-4">
          <span className="block my-2">
            Any Buttons can have a trailing or leading icon as well
          </span>
          <Button trailingIcon={ShareIcon} variant="blueOutline">
            Trailing
          </Button>
          <br />
          <br />
          <Button leadingIcon={ShareIcon} variant="blueOutline">
            Leading
          </Button>
        </li>
      </ul>
    </>
  )
}

const Badges = () => {
  return (
    <>
      <Heading>Badges</Heading>
      <ul role="list" className="divide-y divide-gray-200">
        <li className="py-4">
          <Badge>Default / Primary</Badge>
        </li>

        <li className="py-4">
          <Badge variant="secondary">Secondary</Badge>
        </li>

        <li className="py-4">
          <Badge variant="muted">Muted</Badge>
        </li>

        <li className="py-4">
          <Badge variant="gray">Gray</Badge>
        </li>

        <li className="py-4">
          <Badge variant="warning">Warning</Badge>
        </li>

        <li className="py-4">
          <Badge variant="danger">Danger</Badge>
        </li>
      </ul>
    </>
  )
}

const Layout = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <>
      <Heading>Modal</Heading>
      <Modal onRequestClose={() => setModalOpen(false)} isOpen={modalOpen}>
        This is a modal
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Click Me</Button>
    </>
  )
}

const Forms = () => {
  return (
    <>
      <Heading className="mt-10">Form Elements</Heading>
        <Label>Select Input</Label>
        <SelectInput
          initialValue={null}
          options={sampleInputOptions}
          onSelect={(option) => alert(option?.value)}
        />

        <SelectInput
          label="With a label"
          initialValue={null}
          options={sampleInputOptions}
          onSelect={(option) => alert(option?.value)}
        />

        <TextInput
          type="text"
          onChange={() => null}
          name="hello"
          placeholder="Text Input"
        />

        <TextInput
          type="text"
          label="With a label"
          onChange={() => null}
          name="hello with label"
          placeholder="Text Input with a label"
        />
    </>
  )
}

