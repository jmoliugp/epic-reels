import { followRouter } from 'src/server/trpc/router/follow';
import { videoRouter } from 'src/server/trpc/router/video';
import { router } from 'src/server/trpc/trpc';

export const appRouter = router({
  follow: followRouter,
  video: videoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
