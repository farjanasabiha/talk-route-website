// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic"; 
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      // Create user
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      if (loggedUser) {
        // Update user profile
        await updateUserProfile(data.name, data.photoURL);
        const userInfo = {
          name: data.name,
          email: data.email,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            toast.success("User created successfully");
            navigate("/");
          }
        });
      } else {
        throw new Error("User creation failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create user or update profile");
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userINfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userINfo).then((res) => {
        console.log(res.data);
        navigate("/");
        toast.success("Login Successful!");
      });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Discussion Zone | Register</title>
      </Helmet>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex items-center justify-center flex-col lg:flex-row lg:gap-24 gap-4  ">
          <div className="text-center lg:text-left  ">
            <img
              src="https://i.ibb.co/gT0DFxD/online-registration-23-2148001209-ezgif-com-avif-to-jpg-converter-removebg-preview.png"
              className="w-[900px] h-[700px] mt-20"
              alt=""
            />
          </div>
          <div className="card shrink-0 lg:w-1/2 w-full shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg">
                    User Name
                  </span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered border border-[#5bc4b6]"
                />
                {errors.name && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg">
                    Photo Url
                  </span>
                </label>
                <input
                  {...register("photoURL")}
                  type="text"
                  placeholder="Enter Your PhotoUrl"
                  className="input input-bordered border border-[#5bc4b6]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border border-[#5bc4b6]"
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered border border-[#5bc4b6]"
                />
                {errors.password?.type === "required" && (
                  <span className="mt-2 text-[12px] text-red-500">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="mt-2 text-[12px] text-red-500">
                    Password must have atleast 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="mt-2 text-[12px] text-red-500">
                    Password must have atleast one UpperCase letter,LowerCase
                    letter,Number,Special character
                  </span>
                )}
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-active bg-[#5bc4b6] uppercase text-lg text-white">
                  Register
                </button>
              </div>
            </form>

            <div className="mb-7 text-black flex items-center justify-center gap-3">
              <div>
                <p>Existing User? </p>
              </div>
              <div>
                <Link
                  to="/login"
                  className="hover:underline text-[#5bc4b6] font-semibold text-base hover:text-green-700"
                >
                  Back to Login
                </Link>
              </div>
            </div>
            <div
              onClick={handleGoogleLogin}
              className="flex justify-center items-center gap-4 bg-gray-600 text-white  hover:bg-white hover:text-black border border-gray-600 w-full mx-auto p-1 cursor-pointer mt-4 "
            >
              <h1 className="text-xl bg-white p-2">
                <FcGoogle />
              </h1>
              <h1 className="text-[18px] font-medium pr-6">
                Login With Google.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
