import React from "react";
import "../styles/styles.css";
import InputField from "../Components/InputField";
import AvatarUpload from "../Components/AvatarUpload";
import ActionButton from "../Components/ActionButton";
import { Link } from "react-router-dom";
import animation from "../../img/Messaging.gif";
import { OnSubmit } from "../SignUpHandlers/SignUpHandlers";
import useFormData from "../pages/useFormData";
//https://storyset.com/ animatie ca sa nu uit

const RegistrationForm = ({ handleSubmit, loading, err, type }) => {
  const { register, handleSubmit: formHandleSubmit, errors } = useFormData();

  const handleEnterKeyPress = (e) => {
    if (e && e.key === "Enter") {
      e.preventDefault();
      formHandleSubmit(handleSubmit)();
    }
  };

  return (
    <div className="font-sans bg-grey-lighter flex flex-col w-full">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="w-1/4 md:w-auto text-center text-2xl font-medium">
              logo
            </div>

            <div className="w-1/4 md:w-auto md:flex text-right">
              <div>Home-page</div>
              <div>About us</div>
              <div>Contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-1/2 bg-white">
          <img className="opacity-75 pl-8 md:ml-32" src={animation} alt="" />
        </div>
        <div className="w-full md:w-1/2 bg-white">
          <div className="flex flex-col items-center pt-12">
            <h1 className="text-center">Sign Up</h1>
            <h2 className="text-xl py-4">text</h2>
            {/* <form
              onSubmit={formHandleSubmit(OnSubmit)}
              id="form"
              className="w-full md:w-1/2 bg-white md:border shadow-lg px-8 pt-6 pb-8"
            > */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (Object.keys(errors).length === 0) {
                  formHandleSubmit(OnSubmit)();
                  handleSubmit(e);
                }
              }}
              id="form"
              className="w-full md:w-1/2 bg-white md:border shadow-lg px-8 pt-6 pb-8"
            >
              <InputField register={register} errors={errors} type={type} />

              <div className="mb-6">
                <AvatarUpload
                  register={register}
                  errors={errors}
                  className="rounded bg-grey-lighter border border-grey-lighter w-full py-2 px-3 mb-3 focus:outline-none focus:bg-white focus:border-grey"
                  type="password"
                />
              </div>

              <div className="flex items-center justify-between">
                <ActionButton
                  className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  disabled={loading}
                  text="Sign up"
                  onEnterKeyPress={handleEnterKeyPress}
                />
                <div className="inline-block ">
                  Already have an acount ?
                  <Link
                    className="inline-block "
                    style={{ marginLeft: "10px" }}
                    to="/login"
                  >
                    Signin
                  </Link>
                </div>
                <div>
                  {loading &&
                    "Uploading and compressing the image please wait..."}
                  {err && <span>Something went wrong</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
