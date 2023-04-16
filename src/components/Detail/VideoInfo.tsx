import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CommentItem from "src/components/Detail/CommentItem";
import InputComment from "src/components/Detail/InputComment";
import HeartRed from "src/icons/HeartRed";
import Message from "src/icons/Message";
import MusicNote from "src/icons/MusicNote";

interface Props {}

export default function VideoInfo({}: Props) {
  function toggleLike() {}

  function toggleFollow() {}

  function addNewComment() {}

  return (
    <div className="relative w-full border-l border-[#2f2f2f] lg:w-[544px] lg:overflow-y-hidden">
      <div className="px-4 pb-5 pt-4 lg:px-5 lg:pt-[54px]">
        <div className="flex items-center justify-between">
          <>
            <Link href={``} className="flex cursor-pointer items-center">
              <div className="h-[40px] w-[40px]">
                <LazyLoadImage effect="opacity" className="rounded-full" />
              </div>
              <div className="ml-3">
                <h1 className="line-clamp-1 text-[16px] font-semibold hover:underline">
                  name
                </h1>
                <p className="line-clamp-1 text-sm font-normal hover:underline">
                  @username
                </p>
              </div>
            </Link>
          </>
          <button
            className={`rounded-[4px] ${
              true
                ? "bg-[#2f2f2f] text-white"
                : "border border-primary text-primary"
            } px-6 py-1.5 text-sm font-semibold`}
          >
            Following
          </button>
        </div>
        <div className="mt-4">
          <p className="line-clamp-2 mt-2 text-sm font-normal">title</p>
          <p className="mt-2 flex items-center text-sm font-semibold">
            <MusicNote /> <span className="line-clamp-1">Soundtrack name</span>
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#2f2f2f]">
                <HeartRed small />
              </div>
              <p className="ml-2 text-[12px] font-normal text-[#fffffb]">0</p>
            </div>
            <div className="flex items-center">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#2f2f2f]">
                <Message small />
              </div>
              <p className="ml-2 text-[12px] font-normal text-[#fffffb]">0</p>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              href={``}
              target="_blank"
              className="mr-2 h-7 w-7 cursor-pointer last:mr-0"
            >
              <LazyLoadImage effect="opacity" className="rounded-full" />
            </Link>
          </div>
        </div>

        <div className="mt-5 flex items-center rounded-sm bg-[#2f2f2f] px-3 py-2">
          <input
            readOnly
            className="line-clamp-1 mr-4 flex-1 bg-transparent text-sm font-normal"
          />
          <button className="text-sm font-semibold">Copy link</button>
        </div>
      </div>

      <InputComment />

      <div className="h-[calc(100vh-290px)] overflow-y-scroll border-t border-[#2f2f2f] pb-[61px]">
        <p className="flex h-full w-full items-center justify-center text-sm font-semibold">
          No comments yet
        </p>
        <CommentItem />
        <div />
      </div>
    </div>
  );
}
