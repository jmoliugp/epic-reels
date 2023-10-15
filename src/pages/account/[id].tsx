import { prisma } from 'src/server/db/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import Info from 'src/components/Account/Info';
import VideoList from 'src/components/Account/VideoList';
import AppLayout from 'src/layouts/AppLayout';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';
import { Profile } from 'src/types';

interface Props {
  profile: Profile;
  isFollow: boolean;
}

export default function ProfilePage({ profile, isFollow }: Props) {
  return (
    <AppLayout>
      <div className='mt-5 w-full'>
        <Info profile={profile} isFollow={isFollow} />
        <div className='mt-5 w-full'>
          <VideoList profile={profile} />
        </div>
      </div>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params?.id as string;
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  let isFollow = false;

  const profile = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      video: true,
      _count: {
        select: {
          followers: true,
          followings: true,
        },
      },
      likes: {
        include: {
          video: true,
        },
      },
    },
  });

  if (session?.user) {
    const isFollowing = await prisma.follow.findFirst({
      where: {
        followerId: session.user.id,
        followingId: profile?.id,
      },
    });

    isFollow = Boolean(isFollowing);
  }

  return {
    props: {
      profile: JSON.parse(JSON.stringify(profile)),
      isFollow,
    },
  };
};
