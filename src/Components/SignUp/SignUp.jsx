/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({title}) => {
  const { createUser, googleSignin } = useContext(AuthContext);
  
  const location = useLocation();
  useEffect(() => {
    document.title = `Job Heaven | ${title}`
  },[location.pathname, title])

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Handling sign-up...");
    const form = e.target;

    console.log(form);

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const newUser = { name, email, password, photo };
    console.log(newUser);

    const hasMinimumLength = password.length >= 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

    if (!hasMinimumLength) {
      toast.error("Password should be at least 6 characters long.", {
        position: "bottom-center",
      });
    } else if (!hasCapitalLetter) {
      toast.error("Password should contain at least one capital letter.", {
        position: "bottom-center",
      });
    } else if (!hasSpecialCharacter) {
      toast.error(
        "Password should contain at least one special character (!@#$%^&*).",
        {
          position: "bottom-center",
        }
      );
    } else {
      try {
        await createUser(email, password, name);

        swal({
          title: "Good job!",
          text: "You have successfully registered.",
          icon: "success",
          customClass: {
            container: "w-96 mx-auto rounded-lg",
            title: "text-3xl font-semibold text-blue-500",
            content: "text-gray-700",
          },
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className:
                "bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] text-white p-2 px-4 rounded-lg",
              closeModal: true,
            },
          },
          closeOnClickOutside: false,
        });

        navigate("/");
        form.reset();
      } catch (error) {
        console.log("Sign-up error:", error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.", {
            position: "top-center",
          });
        } else {
          toast.error("Registration failed. " + error.message, {
            position: "bottom-center",
          });
        }
      }
    }
  };

  // Google Login
  const handleGoogleSingin = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        toast.success("You have successfully logged in", {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("login error", error);
        toast.error("This email is already registered.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="max-w-max mx-auto mb-14">
      <div className="relative flex w-96 mt-16 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] bg-clip-border text-white shadow-lg shadow-pink-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign Up
          </h3>
        </div>
        <div className=" p-6 pt-0">
          <button
            onClick={handleGoogleSingin}
            className="relative block w-full select-none rounded-lg bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <span className="absolute left-20  rounded-full  top-2 flex items-center justify-center">
              <FcGoogle className="w-7 h-7 bg-white rounded-full "></FcGoogle>
            </span>
            <span className="ml-10 text-sm">Login with Google</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Or Sign Up With Email
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6">
          <form onSubmit={handleSignUp} className="bg-white">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name="name"
                placeholder="Full name"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name="photo"
                placeholder="photo url"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                autoComplete="off"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                required
              />
            </div>
            <div className="mt-10">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="-ml-2.5"></div>
        </div>
        <div className="p-6 pt-0">
          <p className="flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
