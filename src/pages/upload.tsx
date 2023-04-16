import SelectVideo from "src/components/Upload/SelectVideo";
import SubmitVideo from "src/components/Upload/SubmitVideo";
import AppLayout from "src/layouts/AppLayout";

export default function UploadPage() {
  const videoPreview = false;

  function onVideoFileChange() {}

  function onDiscardUpload() {}

  async function onUploadVideo() {}

  return (
    <AppLayout>
      <div className="w-full rounded-md bg-[#333] p-6 md:mt-5 md:h-[calc(100vh-100px)]">
        <div>
          <h1 className="text-[24px] font-bold">Upload video</h1>
          <p className="text-[16px] font-normal">
            Post a video to your account
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center md:flex-row">
          <label
            htmlFor="videoFileInput"
            className={`aspect-[16/9] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed md:flex md:aspect-[9/16] md:w-[260px] ${
              !videoPreview && "p-[35px]"
            } overflow-hidden text-center hover:border-primary`}
          >
            <SelectVideo />
            {/* <div className="h-full w-full">
                <video
                  muted
                  className="h-full w-full"
                  controls
                  autoPlay
                />
              </div> */}
          </label>
          <SubmitVideo />
        </div>
      </div>
    </AppLayout>
  );
}
