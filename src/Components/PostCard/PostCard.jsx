import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const PostCard = ({ post }) => {
  const {
    _id,
    postTitle,
    authorName,
    authorEmail,
    authorImage,
    postDescription,
    postTag,
    upVote,
    downVote,
    postTime,
    commentCount,
  } = post;
  const navigate = useNavigate();

  // date format
  const formatPostTime = (datetimeStr) => {
    const date = new Date(datetimeStr);
    const options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate.replace(",", "");
  };

  // handle onclick
  const handleClick = () => {
    console.log({ postTitle, _id });
    navigate(`/posts/${_id}`);
  };
  // limiting title length

  const maxLength = 50;
  const ending = "...";

  const limitedTitle =
    postTitle.length > maxLength
      ? postTitle.substring(0, maxLength - ending.length) + ending
      : postTitle;
  return (
    <div>
      <div
        onClick={handleClick}
        className="relative p-6 mx-auto bg-base-100 group hover:bg-[#ff7226] drop-shadow rounded-lg  space-y-8    hover:cursor-pointer mb-4 mr-4 border-b-2  border-b-[#ff7226] "
      >
        <button className="btn btn-sm bg-[#ff7226] hover:bg-blue-600  px-4 text-white text-sm absolute top-2 right-2 ">
          {postTag}
        </button>
        <article className="space-y-8 ">
          <div className="space-y-6">
            {/* post title */}

            <a
              id="my-anchor-element"
              data-tooltip-content={postTitle}
              data-tooltip-variant="info"
            >
              {" "}
              <h1
                className="text-xl font-bold md:text-2xl text-center h-10 group-hover:text-white text-[#ff7226] "
                // title={postTitle}
              >
                {limitedTitle}
              </h1>
            </a>

            <Tooltip
              style={{
                backgroundColor: "#304463",
                color: "#ffff",
                fontWeight: "medium",
              }}
              anchorSelect="#my-anchor-element"
            />
            <div className="mx-auto text-center">
              {/* Author image */}
              <div className="mx-auto text-center">
                <div className="">
                  <img
                    src={authorImage}
                    alt=""
                    className="lg:w-20 lg:h-20 w-6 h-6 rounded-full text-center mx-auto p-1 border-2 border-[#ff7226] group-hover:border-white"
                  />
                </div>
                <div>
                  <h1 className="text-[#ff7226] group-hover:text-white font-semibold text-sm mt-3 underline ">
                    {authorName}
                  </h1>
                </div>
                {/* to do  */}
                {/* Time */}
              </div>
              <div>
                <p className="text-sm text-black group-hover:text-white mt-2">
                  {" "}
                  {formatPostTime(postTime)}
                </p>
              </div>
            </div>
          </div>
        </article>
        <div className="flex items-center  justify-evenly gap-2  p-2 ">
          {/* votes & comments count */}
          <p className="flex-shrink-0 mt-3 group-hover:text-white  md:mt-0">
            {commentCount || 0} comments • {upVote + downVote} votes
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
