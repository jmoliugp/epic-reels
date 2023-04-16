import Link from "next/link";

interface Props {}

export default function InputComment({}: Props) {
  return (
    <form className="absolute bottom-0 left-0 right-0 flex w-full items-center border-t border-[#2f2f2f] bg-[#111] px-5 py-3">
      <>
        <input
          placeholder="Add comment..."
          className="w-full overflow-hidden rounded-md bg-[#2f2f2f] px-4 py-2 text-sm"
        />
        {/* <CircularProgress className="ml-4" width={30} height={30} /> */}
        <div className="flex items-center">
          <button className="px-4 py-2 text-sm">Post</button>
        </div>
      </>
      <div className="px-4 py-2 text-sm font-semibold text-primary">
        Please{" "}
        <Link href={``} className="underline">
          log in
        </Link>{" "}
        to comment
      </div>
    </form>
  );
}
