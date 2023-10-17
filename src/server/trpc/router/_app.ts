import { followRouter } from 'src/server/trpc/router/follow';
import { likeRouter } from 'src/server/trpc/router/like';
import { videoRouter } from 'src/server/trpc/router/video';
import { router } from 'src/server/trpc/trpc';

export const appRouter = router({
  follow: followRouter,
  video: videoRouter,
  like: likeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
