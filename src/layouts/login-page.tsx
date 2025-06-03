import axios from "axios";
import React from "react";
import {enqueueSnackbar} from "notistack";
import {Navigate} from "react-router-dom";
import PatternStyleLoginPage from "../components/pattern-style-login-page";

type PropsErrors = Record<string, string | number | boolean>;
function LoginPage() {
  const access_token = window.localStorage.getItem("access_token");

  const [errors, setErrors] = React.useState<PropsErrors>({});
  const [isLoading, startTransition] = React.useTransition();
  const [values, setValues] = React.useState<{
    username: string;
    password: string;
  }>({username: "", password: ""});

  const handleSubmit = (i: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    i.preventDefault();
    const error: PropsErrors = {};
    for (let index = 0; index < Object.keys(values).length; index++) {
      const element = Object.keys(values)[index];
      if (!(values as PropsErrors)[element]) {
        error[element] = true;
      }
    }
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
    startTransition(async () => {
      try {
        const data = await axios.post(
          "https://dev-portal.gps.id/backend/seen/public/login",
          values
        );
        const {username} = data?.data?.message?.data || {};
        console.log(username);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        enqueueSnackbar(
          error?.response?.data?.message || "Internal server error",
          {
            variant: "error",
            anchorOrigin: {vertical: "top", horizontal: "right"},
          }
        );
      }
    });
  };
  const handleChangeInput = (
    i: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const inputValue = i.target.value;
    setValues((prev) => ({...prev, [field]: inputValue}));
    setErrors((prev) => ({...prev, [field]: inputValue ? false : true}));
  };
  if (access_token) return <Navigate to="/" replace />;
  return (
    <div className="bg-[#43a6ee] min-h-dvh flex justify-center items-center">
      <div className=" md:w-[630px] w-full bg-white rounded-xl md:px-10 md:py-15 px-5 py-7 z-10 md:mx-0 mx-10">
        <p className="text-[32px] font-semibold text-center md:leading-14 leading-9">
          Login to <span className=" text-[#43a6ee]">GPS.ID TMS</span> Account
        </p>
        <p className="text-[#202224] text-center">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSubmit} className=" space-y-8 mt-10">
          <div className="grid gap-2">
            <label className="font-semibold">Email address:</label>
            <input
              onChange={(i) => handleChangeInput(i, "username")}
              value={values.username}
              type="text"
              className="bg-slate-200 outline-0 border-none p-3 rounded-md"
            />
            {errors["username"] && (
              <p className="text-sm leading-1 ml-2 text-red-500">
                email is required !
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <label className="font-semibold">Password</label>
              <label>Forget Password?</label>
            </div>
            <input
              onChange={(i) => handleChangeInput(i, "password")}
              value={values.password}
              type="password"
              className="bg-slate-200 outline-0 border-none p-3 rounded-md"
            />
            {errors["password"] && (
              <p className="text-sm leading-1 ml-2 text-red-500">
                password is required !
              </p>
            )}
            <div className="flex gap-2 mt-2">
              <input
                id="checkbox"
                type="checkbox"
                aria-label="Remember Password"
              />
              <label htmlFor="checkbox">Remember Password</label>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-3">
            <button
              type="submit"
              className={`${
                isLoading
                  ? "bg-[#319EEE]/50 cursor-no-drop"
                  : "bg-[#319EEE] cursor-pointer"
              }  font-semibold md:w-[418px] w-[80%] p-3 rounded-md text-white`}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            <p className="text-center">
              Don’t have an account?
              <span className=" text-[#43a6ee] font-semibold">
                Create Account
              </span>
            </p>
          </div>
        </form>
      </div>
      <PatternStyleLoginPage />
    </div>
  );
}

export default LoginPage;
