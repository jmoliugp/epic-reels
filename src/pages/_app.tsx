import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import NextProgress from "nextjs-progressbar";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "src/styles/globals.css";
import { PRIMARY_COLOR } from "src/utils/constants";
import { trpc } from "src/utils/trpc";

interface Props {
  session: Session | null;
}

function MyApp({ Component, pageProps }: AppProps<Props>) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextProgress color={PRIMARY_COLOR} options={{ showSpinner: false }} />
      <Toaster />
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
