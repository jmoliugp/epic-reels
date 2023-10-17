import { protectedProcedure, router } from 'src/server/trpc/trpc';
import { z } from 'zod';

export const likeRouter = router({
  likeVideo: protectedProcedure
    .input(
      z.object({
        videoId: z.string().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const likes = await ctx.prisma.likes.findMany({
        where: {
          userId: ctx.session.user.id,
          videoId: input.videoId,
        },
      });

      if (likes.length > 0) {
        return ctx.prisma.likes.delete({
          where: {
            id: likes[0]?.id,
          },
        });
      } else {
        return ctx.prisma.likes.create({
          data: {
            userId: ctx.session.user.id,
            videoId: input.videoId!,
          },
        });
      }
    }),
});
