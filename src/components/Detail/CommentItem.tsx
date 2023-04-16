import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {}

export default function CommentItem({}: Props) {
  return (
    <div className="border-b border-[#2f2f2f] py-3">
      <div className="flex items-center px-4 lg:px-5">
        <Link href={``} className="block h-10 w-10">
          <LazyLoadImage className="rounded-full" effect="opacity" />
        </Link>
        <div className="ml-3 flex-1">
          <h3 className="text-[15px] font-semibold hover:underline">
            <Link href={``}>name</Link>
          </h3>
          <p className="text-sm font-normal">comment</p>
          <div className="mt-[6px] flex items-center">
            <p className="text-[13px] font-normal text-gray-300">date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
