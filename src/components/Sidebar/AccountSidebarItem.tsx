import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {}

export default function AccountSidebarItem({}: Props) {
  return (
    <>
      <Link href={``} className="flex cursor-pointer items-center p-2">
        <div className="h-8 w-8 lg:mr-3">
          <LazyLoadImage className="rounded-full" effect="opacity" />
        </div>
        <div className="hidden flex-1 lg:block">
          <h3 className="line-clamp-1 mt-[-2px] flex items-center text-[16px] font-bold">
            @username
          </h3>
          <p className="line-clamp-1 text-[12px] text-[rgba(255,255,255,0.75)]">
            name
          </p>
        </div>
      </Link>
    </>
  );
}
