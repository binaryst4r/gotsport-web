import React, { Fragment, useEffect } from "react";
import { Switch, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export type InputOption = {
  name: string;
  value: string | number | null;
  display: string;
};

export const SelectInput = ({
  options,
  onSelect,
  label,
  initialValue
}: {
  options: InputOption[];
  onSelect: (selected?: InputOption) => void;
  label?: string
  initialValue: InputOption | null
}) => {
  const [currentSelection, setCurrentSelection] = React.useState<InputOption>(initialValue || {
    name: "",
    display: "Select...",
    value: null
  });
  useEffect(() => {
    if (currentSelection && currentSelection.value) {
      onSelect(currentSelection)
    }
  }, [currentSelection])
  const optionsWithNull: InputOption[] = [
    {
      name: "",
      display: "Select...",
      value: null
    },
    ...options
  ]

  return (
    <div className="my-6">

      <Listbox value={currentSelection} onChange={setCurrentSelection}>
        {({ open }) => (
          <>
          {label ? (
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {label}
            </Listbox.Label>
          ) : null}
            <div className="mt-1 relative">
              <Listbox.Button className="bg-mono-white relative w-full border border-mono-500 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-lg">
                <span className="block truncate">{currentSelection?.display}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-mono-white shadow-lg max-h-60 rounded-md py-1 text-lg ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-lg">
                  {optionsWithNull.map((option) => (
                    <Listbox.Option
                      key={option.name}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-lime-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.display}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-lime-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export const Toggler = ({
  label,
  description,
  onToggle,
}: {
  label: string;
  description?: string;
  onToggle?: (enabled: boolean) => void;
}) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (onToggle) {
      onToggle(enabled);
    }
  }, [enabled]);

  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex-grow flex flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
          passive
        >
          {label}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {description}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-lime-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-mono-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
    </Switch.Group>
  );
};

export const TextArea = ({ name, label, ...rest }: TextAreaProps) => {
  return (
    <div className="my-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={name}
          className="shadow-sm focus:ring-lime-500 focus:border-lime-500 block w-full sm:text-sm border-mono-500 rounded-md"
          {...rest}
        />
      </div>
    </div>
  );
};

export const TextInput = ({ name, label, ...rest }: Props) => {
  return (
    <div className="my-6">
      <div>
        <label htmlFor="email" className={!label ? "sr-only" : ""}>
          {label}
        </label>
        <input
          name={name}
          id={name}
          className="py-3 block w-full rounded-md border-mono-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...rest}
        />
      </div>
    </div>
  );
};
