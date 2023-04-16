import VideoSmall from "src/components/Video/VideoSmall";

interface Props {}

export default function VideoList({}: Props) {
  return (
    <>
      <ul className="flex w-full items-center">
        <li
          className={`w-[50%] cursor-pointer px-14 py-2 text-center lg:w-auto ${
            true && "border-b-[2px] border-primary font-bold text-primary"
          }`}
        >
          Videos
        </li>
        <li
          className={`w-[50%] cursor-pointer px-14 py-2 text-center lg:w-auto ${
            true && "border-b-[2px] border-primary font-bold text-primary"
          }`}
        >
          Likes
        </li>
      </ul>
      <h3 className="mt-5 w-full text-center">No videos have been shared.</h3>
      <div className="grid grid-cols-3 gap-1 pb-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:px-0">
        <VideoSmall />
      </div>
    </>
  );
}
