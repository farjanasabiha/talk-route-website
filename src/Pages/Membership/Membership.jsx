import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div>
      <Helmet>
        <title>TalkRoute | MemberShip</title>
      </Helmet>
      <div className="flex items-center justify-center h-screen">
        <section className="">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="lg:text-5xl text-3xl font-bold leading-none text-center text-[#ff7226]">
              Become Member Now
            </h1>
            <p className="text-xl lg:w-2/3 w-full mx-auto font-medium border border-[#ff7226] rounded-sm py-4  lg:px-12 px-6 ">
              Love to hear your thoughts! Become a member for just $5 a month
              and unlock unlimited posting. Free users get 5 posts, but for
              in-depth discussions and sharing your full story, a membership is
              the way to go!
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 ">
              <Link
                to="/payment"
                className="px-8 py-3 text-lg font-semibold bg-white border rounded-md text-[#ff7226] border-[#ff7226] hover:bg-[#ff7226] hover:text-white "
              >
                Pay Membership Fee
              </Link>
              <Link
                to="/"
                className="px-8 py-3 text-lg font-semibold bg-white border rounded-md text-[#ff7226] border-[#ff7226] hover:bg-[#ff7226] hover:text-white "
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;
