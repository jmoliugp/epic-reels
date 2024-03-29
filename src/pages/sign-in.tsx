import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Feedback from 'src/icons/Feedback';
import Logo from 'src/icons/Logo';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';
import { signInMethods } from 'src/utils/constants';

export default function SignInPage() {
  return (
    <div className='h-screen text-white'>
      <div className='flex items-center justify-between p-4'>
        <Link href='/'>
          <Logo />
        </Link>

        <button className='flex items-center text-sm font-medium text-white hover:underline'>
          <Feedback />{' '}
          <span className='ml-2 inline-block'>Feedback and help</span>
        </button>
      </div>

      <div>
        <div className='mx-auto w-[375px] max-w-[calc(100%-32px)] text-center'>
          <h4 className='my-4 text-[32px] font-bold'>Log in to EpicReels</h4>
          <p className='mb-[32px] mt-3 text-[15px] font-normal text-[rgba(255,255,255,0.75)]'>
            Manage your account, check notifications, comment on videos, and
            more.
          </p>

          <div>
            {signInMethods.map((item) => {
              return (
                <button
                  key={item.provider}
                  onClick={() => signIn('google')}
                  className='relative mb-4 flex w-full items-center justify-center border border-gray-600 px-4 py-2.5 last:mb-0'
                >
                  <div className='absolute left-4 top-[50%] translate-y-[-50%]'>
                    <item.icons />
                  </div>{' '}
                  <span className='text-[15px]'>{item.content}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const redirect = ctx.query.redirect || '/';

  if (!session?.user) return { props: {} };

  return {
    redirect: {
      permanent: false,
      destination: redirect,
    },
    props: {},
  };
};
