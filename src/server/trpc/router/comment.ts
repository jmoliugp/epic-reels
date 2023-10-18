import { protectedProcedure, router } from 'src/server/trpc/trpc';
import { z } from 'zod';

export const commentRouter = router({
  createComment: protectedProcedure
    .input(
      z.object({
        comment: z.string().nullable(),
        videoId: z.string().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.prisma.comment.create({
        data: {
          comment: input.comment!,
          userId: ctx.session.user.id,
          videoId: input.videoId!,
        },
        include: {
          user: true,
        },
      });

      return { comment };
    }),
});
