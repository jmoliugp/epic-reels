import Link from "next/link";
import ArrowBack from "src/icons/ArrowBack";
import LogoSmall from "src/icons/LogoSmall";

interface Props {}

export default function VideoPlayerDetail({}: Props) {
  return (
    <div className="relative z-[9999] h-full w-full lg:flex-1">
      <video loop className="h-full w-full" />

      {/* <div className="absolute inset-0 flex items-center justify-center">
        <CircularProgress color="#fff" />
      </div> */}

      <div className="absolute left-0 top-0 z-[9999] flex items-center p-2 lg:p-5">
        <div className="mr-5 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#2f2f2f]">
          <ArrowBack />
        </div>
        <Link href="/">
          <LogoSmall />
        </Link>
      </div>
      {/* <Controls /> */}
    </div>
  );
}
