import { router } from "src/server/trpc/trpc";

export const appRouter = router({});

// export type definition of API
export type AppRouter = typeof appRouter;
