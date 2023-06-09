import Link from "next/link";
import Feedback from "src/icons/Feedback";
import Logo from "src/icons/Logo";

export default function SignInPage() {
  return (
    <div className="h-screen text-white">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Logo />
        </Link>

        <button className="flex items-center text-sm font-medium text-white hover:underline">
          <Feedback />{" "}
          <span className="ml-2 inline-block">Feedback and help</span>
        </button>
      </div>

      <div>
        <div className="mx-auto w-[375px] max-w-[calc(100%-32px)] text-center">
          <h4 className="my-4 text-[32px] font-bold">Log in to EpicReels</h4>
          <p className="mb-[32px] mt-3 text-[15px] font-normal text-[rgba(255,255,255,0.75)]">
            Manage your account, check notifications, comment on videos, and
            more.
          </p>
          <div>
            <button className="relative mb-4 flex w-full items-center justify-center border border-gray-600 px-4 py-2.5 last:mb-0">
              <div className="absolute left-4 top-[50%] translate-y-[-50%]">
                icon
              </div>{" "}
              <span className="text-[15px]">content</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
