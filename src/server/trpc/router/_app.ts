import { followRouter } from 'src/server/trpc/router/follow';
import { router } from 'src/server/trpc/trpc';

export const appRouter = router({
  follow: followRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
