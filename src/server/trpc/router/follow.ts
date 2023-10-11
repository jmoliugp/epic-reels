import { publicProcedure, router } from 'src/server/trpc/trpc';

export const followRouter = router({
  getAccountsSuggestion: publicProcedure.query(async ({ ctx }) => {
    const accounts = await ctx.prisma.user.findMany({
      where: {
        id: {
          not: ctx.session?.user?.id,
        },
      },
      include: {
        _count: {
          select: {
            followers: true,
            followings: true,
          },
        },
      },
      orderBy: {
        followers: {
          _count: 'desc',
        },
      },
      take: 10,
    });

    return { accounts };
  }),
});
