import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SelectVideo from 'src/components/Upload/SelectVideo';
import SubmitVideo from 'src/components/Upload/SubmitVideo';
import AppLayout from 'src/layouts/AppLayout';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';

export default function UploadPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  function onVideoFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;
    if (!file.type.startsWith('video')) {
      return toast.error('Only video files accepted');
    }
    if (file.size / 1_000_000 > 30) {
      toast.error('Your file cannot exceed 30MB');
    }

    const preview = URL.createObjectURL(file);
    setVideoFile(file);
    setVideoPreview(preview);

    const video = document.createElement('video');
    video.setAttribute('src', preview);
    video.setAttribute('type', 'video/mp4');
    video.addEventListener('loadedmetadata', () => {
      setVideoWidth(video.videoWidth);
      setVideoHeight(video.videoHeight);
    });
  }

  function onDiscardUpload() {}

  async function onUploadVideo() {}

  return (
    <AppLayout>
      <div className='w-full rounded-md bg-[#333] p-6 md:mt-5 md:h-[calc(100vh-100px)]'>
        <div>
          <h1 className='text-[24px] font-bold'>Upload video</h1>
          <p className='text-[16px] font-normal'>
            Post a video to your account
          </p>
        </div>

        <div className='mt-6 flex flex-col items-center md:flex-row'>
          <label
            htmlFor='videoFileInput'
            className={`aspect-[16/9] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed md:flex md:aspect-[9/16] md:w-[260px] ${
              !videoPreview && 'p-[35px]'
            } overflow-hidden text-center hover:border-primary`}
          >
            {!videoPreview ? (
              <SelectVideo onVideoFileChange={onVideoFileChange} />
            ) : (
              <div className='h-full w-full'>
                <video
                  src={videoPreview}
                  muted
                  className='h-full w-full'
                  controls
                  autoPlay
                />
              </div>
            )}
          </label>
          <SubmitVideo />
        </div>
      </div>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (session?.user) return { props: {} };

  return {
    redirect: { destination: '/sign-in?redirect=/upload', permanent: false },
    props: {},
  };
};
