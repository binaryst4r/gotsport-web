import React from "react";
import { Label } from "components/typography/Label";
import { Body } from "components/typography/Body";
import { Heading } from "components/typography/Heading";
import { Button } from "components/buttons";
import {
  SelectInput,
  TextInput,
  TextArea,
  Toggler,
  InputOption,
} from "components/forms";
import { ShareIcon } from "@heroicons/react/solid";
import { Modal } from "components/layout";
import { Badge } from "components/badges";

const sampleInputOptions: InputOption[] = [
  {
    name: "Hello",
    value: "hello",
    display: "Hello john",
  },
];

export const DesignPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
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

        <Heading>Modal</Heading>
        <Modal onRequestClose={() => setModalOpen(false)} isOpen={modalOpen}>
          This is a modal
        </Modal>
        <Button onClick={() => setModalOpen(true)}>Click Me</Button>

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
            <Badge variant="danger">Danger</Badge>
          </li>
        </ul>
      </div>
    </div>
  );
};
