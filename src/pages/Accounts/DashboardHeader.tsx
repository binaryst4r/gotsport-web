import { UsersIcon } from "@heroicons/react/24/solid";
import { Avatar } from "components/avatars";
import { Badge } from "components/badges";
import { Container } from "components/layout";
import { Heading } from "components/typography/Heading";
import { User } from "types/User";

export const DashboardHeader = ({ user }: { user: User }) => {
  console.log(user, user.first_name)
  return (
    <div className="hidden sm:block bg-mono-white">
      <Container>
        <div className="flex py-6">
          <div className="flex items-center">
            <Avatar
              className="h-36"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <div className="ml-10">
              <Heading className="text-[1.5rem]" size={2}>
                {user.first_name} {user.last_name}
              </Heading>
              <span className="text-mono-500 block text-[1.25rem] font-light my-2">
                {user.email}
              </span>
              <Badge variant="primary" className="mt-2">
                <UsersIcon className="h-4 mr-2" />
                Primary
              </Badge>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
