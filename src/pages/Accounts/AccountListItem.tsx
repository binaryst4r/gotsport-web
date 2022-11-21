import { User } from "types/User";
import { Avatar } from "components/avatars";
import { Heading } from "components/typography/Heading";
import {
  ExclamationTriangleIcon,
  BellIcon,
  InboxIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Button } from "components/buttons";
import { Badge } from "components/badges";
import { UsersIcon } from "@heroicons/react/24/solid";
export const MobileAccountListItem = ({
  account,
  primary = false,
  disabled = false,
}: {
  account: User;
  primary?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="flex px-4 py-3 justify-between border-b border-1 border-mono-300">
      <div className="flex items-start">
        <Avatar
          className={primary ? "border-[3px] border-green" : ""}
          size={10}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="pl-2">
          <Heading className="font-normal" size={4}>
            {account.first_name} {account.last_name}
          </Heading>
          <span className="block font-thin text-green text-xs">
            {account.email}
          </span>
          <div className="flex text-light-blue mt-2 justify-start">
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">
                1
              </span>
              <BellIcon className="h-5 mr-4" />
            </div>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">
                1
              </span>
              <InboxIcon className="h-5 mr-4" />
            </div>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">
                1
              </span>
              <DocumentTextIcon className="h-5 mr-4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className="px-3 py-3" variant="blueOutline">
          <ArrowRightOnRectangleIcon className="h-4" />
        </Button>
      </div>
    </div>
  );
};

type BadgeStyle = {
  Child: {
    variant: string;
    icon: null;
  };
  Primary: {
    variant: string;
    icon: JSX.Element;
  };
  Guardian: {
    variant: string;
    icon: JSX.Element;
  };
};

export const DesktopAccountListItem = ({
  account,
  primary = false,
  disabled = false,
}: {
  account: User;
  primary?: boolean;
  disabled?: boolean;
}) => {
  let accountType: string = "Child";
  if (primary) {
    accountType = "Primary";
  } else if (disabled) {
    accountType = "Guardian";
  }

  const badgeMap = {
    Child: <Badge variant="secondary">Child</Badge>,
    Primary: (
      <Badge variant="primary">
        <UsersIcon className="h-4" /> <span className="ml-2">Primary</span>
      </Badge>
    ),
    Guardian: (
      <Badge variant="muted">
        <EyeIcon className="h-4" /> <span className="ml-2">Guardian</span>
      </Badge>
    ),
  } as { [key: string]: any }; //need this last bit in order to use string as an index on line 87

  return (
    <div className="flex px-8 py-3 justify-between border-b border-1 border-mono-300">
      <div className="w-1/6">{badgeMap[accountType]}</div>
      <div className="flex items-start w-1/6">
        <Avatar
          className={primary ? "border-[3px] border-green" : ""}
          size={10}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="pl-2">
          <Heading className="font-normal" size={4}>
            {account.first_name} {account.last_name}
          </Heading>
          <span className="block font-thin text-green text-xs">
            {account.email}
          </span>
        </div>
      </div>

      <div className="flex text-light-blue mt-2 justify-center w-1/6">
        {!disabled ? (
          <>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">
                1
              </span>
              <BellIcon className="h-5 mr-4" />
            </div>
            <div className="relative">
              <span className="block h-[14px] w-[14px] text-[10px] flex justify-center items-center absolute top-[-3px] right-3 bg-light-blue text-mono-white rounded-full">
                1
              </span>
              <InboxIcon className="h-5 mr-4" />
            </div>
          </>
        ) : null}
      </div>

      <div className="flex mt-2 justify-start w-1/6">
        {!disabled && <span>Orgniazation Avatars</span>}
      </div>
      
      {disabled ? (
        <div className="w-1/3">
          <span className="text-mono-400 text-xs">
            You cannot access a Guardian account. Guardian accounts have access to your account
          </span>
        </div>
      ) : (
        <>  
          <div className="flex mt-2 justify-center w-1/6">
            <ExclamationTriangleIcon className="h-6 text-yellow" />
          </div>

          <div className="w-1/6">
            <Button className="float-right px-8 py-4" variant="blueOutline">
              View Account&nbsp;
              <ArrowRightOnRectangleIcon className="h-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
