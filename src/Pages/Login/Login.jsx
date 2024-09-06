import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// const from = location.state?.from?.pathname || "/";
console.log("state in the location:", location.state);

const Login = () => {
  // const { signInWithGoogle, signIn } = useAuth();
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    // console.log(user);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      toast.success("Signin Successful");
      navigate(location?.state ? location?.state : "/");
    });
  };

  //
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userINfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userINfo).then((res) => {
        console.log(res.data);
        navigate(location?.pathname ? location?.pathname : "/");
        toast.success("Login Successful!");
      });
    });
  };
  const handleGithubLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userINfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userINfo).then((res) => {
        console.log(res.data);
        navigate(location?.pathname ? location?.pathname : "/");
        toast.success("Login Successful!");
      });
    });
  };
  return (
    <div>
      <Helmet>
        <title>TalkRoute | Login</title>
      </Helmet>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex items-center justify-center  flex-col lg:flex-row gap-24  ">
          <div className="text-center lg:text-left w-full h-full ">
            <img
              src="https://i.ibb.co/fpSkh4X/Group9473.png"
              className="h-[500px] w-[800px]"
              alt=""
            />
          </div>
          <div className="card shrink-0 lg:w-1/2 w-full  shadow-xl  bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Enter Your Email *
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered bg-transparent border-[#583896]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg">
                    Enter Your Password *
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-[#583896]"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-active bg-[#583896] text-white uppercase font-semibold text-base">
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div
                  onClick={handleGithubLogin}
                  className="flex justify-center items-center py-2 gap-4 border-[#f1563a] border rounded-md w-full mx-auto p-1 cursor-pointer mt-4 "
                >
                  <h1 className="text-xl">
                    <FaGoogle className="text-[#f1563a]" />
                  </h1>
                  <h1 className="text-[16px] font-bold tracking-wide	 pr-6 text-[#f1563a]">
                    Google
                  </h1>
                </div>

                <div
                  onClick={handleGithubLogin}
                  className="flex justify-center items-center py-2 gap-4 border-blue-500 border rounded-md w-full mx-auto p-1 cursor-pointer mt-4 "
                >
                  <h1 className="text-xl">
                    <FaGithub className="text-blue-500" />
                  </h1>
                  <h1 className="text-[16px] font-bold tracking-wide	 pr-6 text-blue-500">
                    Github
                  </h1>
                </div>
              </div>
              <div className="mb-4 text-black flex items-center justify-center gap-3 mt-4">
                <div>
                  <p>New User? </p>
                </div>
                <div>
                  <Link
                    to="/register"
                    className="hover:underline text-[#583896] font-semibold text-base hover:text-green-700"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
