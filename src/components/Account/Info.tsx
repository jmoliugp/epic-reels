import { useSession } from 'next-auth/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Profile } from 'src/types';
import { getUsername } from 'src/utils';

interface Props {
  profile: Profile;
  isFollow: boolean;
}

export default function Info({ isFollow, profile }: Props) {
  const session = useSession().data;
  const isOwnProfile = session?.user?.id === profile.id;

  return (
    <div className='px-4 xl:px-0'>
      <div className='flex items-center'>
        <div className='h-[116px] w-[116px]'>
          <LazyLoadImage
            className='h-[116px] w-[116px] rounded-full'
            effect='opacity'
            src={profile.image}
          />
        </div>
        <div className='ml-5 flex-1'>
          <h1 className='text-[20px] font-semibold'>
            @{getUsername(profile.name)}
          </h1>
          <p className='text-[16px] font-normal'>{profile.name}</p>
          {!isOwnProfile && (
            <button
              className={`mt-4 rounded-md ${
                true ? 'bg-[#2f2f2f]' : 'bg-primary'
              } px-6 py-1 text-[16px] font-semibold`}
            >
              Following
            </button>
          )}
        </div>
      </div>
      <div className='mt-5 flex items-center'>
        <div className='mr-5 flex items-center'>
          <p className='mr-2 text-[16px] font-semibold'>
            {profile._count.followings}
          </p>
          <p className='text-[16px] font-normal text-gray-300'>Following</p>
        </div>
        <div className='flex items-center'>
          <p className='mr-2 text-[16px] font-semibold'>
            {profile._count.followers}
          </p>
          <p className='text-[16px] font-normal text-gray-300'>Followers</p>
        </div>
      </div>
    </div>
  );
}
