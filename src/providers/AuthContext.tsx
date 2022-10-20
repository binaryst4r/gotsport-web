import * as React from "react";
import {User} from 'types/User'
import {useQuery} from '@tanstack/react-query'
import {getUser, setUser, clearUser} from 'utils/user'
import {RequestProps, makeApiRequest} from 'utils/api'

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  email: string;
  password: string;
};

interface AuthContextType {
  user: User | null;
  login: ({ email, password }: LoginProps) => void;
  logout: () => void;
  register: ({ email, password}: RegisterProps) => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: () => null,
  logout: () => null,
  register: () => null,
});

function AuthProvider(props: any) {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  const [currentUser, setCurrentUser] = React.useState(null);
  const userCookie = getUser();
  const { refetch, isFetching } = useQuery(
    ["user"],
    () => makeApiRequest({ path: `/users/${userCookie.id}` }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  React.useEffect(() => {
    if (userCookie && !currentUser) {
      // make api request and set user value john
      console.log(userCookie);
      refetch().then((res) => {
        setCurrentUser(res.data);
      });
    }
  }, []);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  const login = async ({ email, password }: LoginProps) => {
    const SignInArgs: RequestProps = {
      method: "POST",
      params: {
        email,
        password,
      },
      path: "/users/login",
    };

    // make a login request
    return makeApiRequest(SignInArgs)
      .then((res) => {
        // debugger;
        const user = res.data.data;
        const userData = {
          id: user.slug,
          authentication_token: res.headers["access-token"],
          client: res.headers["client"],
          expiry: res.headers["expiry"],
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        };
        setUser(userData);
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  };

  const register = async ({ email, password }: RegisterProps) => {
    const RegisterArgs: RequestProps = {
      method: "POST",
      params: {
        email,
        password
      },
      path: "/users/sign_up",
    };

    // make a login request
    return makeApiRequest(RegisterArgs)
      .then((res) => {
        // debugger;
        const user = res.data.data;
        console.log(res, user)
        const userData = {
          id: user.slug,
          authentication_token: res.headers["access-token"],
          client: res.headers["client"],
          expiry: res.headers["expiry"],
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        };
        setUser(userData);
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }; // register the user
  const logout = () => {
    clearUser();
    setCurrentUser(null);
  }; // clear the token in localStorage and the user data

  return (
    <AuthContext.Provider
      value={{ user: currentUser, login, logout, register }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
