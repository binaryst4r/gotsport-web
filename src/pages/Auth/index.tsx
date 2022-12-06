import { LockClosedIcon } from "@heroicons/react/24/solid";
import logo from "../../images/gotsport-lt.png";
import { TextInput } from "components/forms";
import { Button } from "components/buttons";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAuth } from "providers/AuthContext";
import { Field, Form, Formik, FormikProps } from "formik";

type LoginInputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const { login } = useAuth();
  
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="GotSport" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-mono-700">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            console.log(actions)
            login(values)
          }}
        >
          <Form>
            <div className="rounded-md shadow-sm -space-y-px">
              <Field name="email">
                {({ field, form, meta }: { field: any; form: any; meta: any}) => (
                  <TextInput placeholder="Email address" {...field} type="email" />
                )}
              </Field>

              <Field name="password">
                {({ field, form, meta }: { field: any; form: any; meta: any}) => (
                  <TextInput placeholder="Password" {...field} type="password" />
                )}
              </Field>
            </div>
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Button variant="link">
                  Forgot your password?
                </Button>
              </div>
            </div>
            <div>
              <Button type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
