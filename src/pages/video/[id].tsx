import VideoInfo from 'src/components/Detail/VideoInfo';
import VideoPlayerDetail from 'src/components/Detail/VideoPlayerDetail';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';
import { prisma } from 'src/server/db/client';
import { Account, Video } from 'src/types';

interface Props {
  video: Video<Account>;
}

export default function VideoPage({ video }: Props) {
  return (
    <div className='flex h-screen flex-col text-white lg:flex-row'>
      <VideoPlayerDetail />
      <VideoInfo />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params?.id as string;
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  let isFollow = false;
  let isLike = false;

  try {
    const video = await prisma.video.findFirst({
      where: {
        id,
      },
      include: {
        user: {
          include: {
            _count: {
              select: {
                followers: true,
                followings: true,
              },
            },
          },
        },
        _count: {
          select: {
            likes: true,
            comment: true,
          },
        },
        comment: {
          include: {
            user: true,
          },
        },
      },
    });

    if (session?.user) {
      const [likedByMe, followedByMe] = await Promise.all([
        prisma.likes.findFirst({
          where: {
            userId: session.user.id,
            videoId: video?.id,
          },
        }),
        prisma.follow.findFirst({
          where: {
            followerId: session.user.id,
            followingId: video?.user?.id,
          },
        }),
      ]);
      isLike = Boolean(likedByMe);
      isFollow = Boolean(followedByMe);
    }

    return {
      props: {
        video: {
          ...JSON.parse(JSON.stringify(video)),
          isLike,
          isFollow,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      notFound: true,
    };
  }
};
