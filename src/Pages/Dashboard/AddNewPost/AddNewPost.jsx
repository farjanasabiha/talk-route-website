import { Helmet } from "react-helmet-async";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddNewPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //   console.log(user);
  const handleAddPost = async (e) => {
    e.preventDefault();
    const form = e.target;

    const authorName = user.displayName;
    const authorEmail = user.email;
    const authorImage = user.photoURL;
    const postTitle = form.postTitle.value;
    const postDescription = form.postDescription.value;
    const postTag = form.postTag.value;
    const upVote = parseInt(form.upVote.value);
    const downVote = parseInt(form.downVote.value);

    const post = {
      postTitle,
      authorName,
      authorImage,
      authorEmail,
      postDescription,
      postTag,
      upVote,
      downVote,
      commentCount: 0,
    };
    console.log(post);
    form.reset();

    // send post data to database
    const postRes = await axiosSecure.post("/posts", post);
    console.log(postRes);
    if (postRes.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Post added successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <Helmet>
        <title>TalkRoute | Add Post</title>
      </Helmet>
      <div className="">
        <div className="my-12">
          <form
            onSubmit={handleAddPost}
            className="p-8 my-6 max-w-screen-sm mx-auto shadow-lg rounded-lg"
          >
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/K6n8jh8/Profile-Male-PNG.png"
                }
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <label className="form-control w-full my-4 ">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226]">
                  Post Title
                </span>

                <input
                  type="text"
                  placeholder="Post Title"
                  className="input input-bordered w-full border border-[#ff7226]"
                  name="postTitle"
                />
              </label>
              {/* tag option  */}
              <label className="form-control w-full my-4 ">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226]">
                  Tags*
                </span>

                <select
                  name="postTag"
                  defaultValue="default"
                  className="select select-bordered w-full border border-[#ff7226]"
                >
                  <option disabled value="default">
                    Choose a Tag
                  </option>
                  <option>Tech</option>
                  <option>LifeStyle</option>
                  <option>Sports</option>
                  <option>Politics</option>
                  <option>Miscellaneous</option>
                </select>
              </label>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 ">
              {/* Name */}
              <label className="form-control w-full">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226]">
                  Author Name
                </span>

                <input
                  defaultValue={user?.displayName}
                  disabled
                  type="text"
                  className="input input-bordered w-full border border-[#ff7226]"
                  name="authorName"
                />
              </label>

              {/*  */}
              <label className="form-control w-full ">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226] ">
                  Author Email
                </span>

                <input
                  defaultValue={user?.email}
                  disabled
                  type="text"
                  className="input input-bordered w-full"
                  name="authorEmail"
                />
              </label>
            </div>
            {/* text area */}

            <label className="form-control w-full my-4 ">
              <span className="label-text my-4 text-xl font-semibold text-[#ff7226] ">
                Post Description
              </span>

              <textarea
                placeholder="description"
                className="textarea  textarea-bordered textarea-lg w-full border border-[#ff7226]"
                name="postDescription"
              ></textarea>
            </label>

            {/* upvote & down vote  */}
            <div className="flex lg:flex-row flex-col gap-4 ">
              <label className="form-control w-full">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226]">
                  Up Vote
                </span>

                <input
                  defaultValue={0}
                  disabled
                  type="number"
                  className="input input-bordered w-full "
                  name="upVote"
                />
              </label>

              {/*  */}
              <label className="form-control w-full">
                <span className="label-text my-4 text-xl font-semibold text-[#ff7226]">
                  Down vote
                </span>

                <input
                  name="downVote"
                  defaultValue={0}
                  disabled
                  type="number"
                  className="input input-bordered w-full border border-[#ff7226]"
                />
              </label>
            </div>
            <button className="btn w-full mt-6 uppercase bg-[#ff7226] hover:bg-gray-700 text-white">
              Add Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
