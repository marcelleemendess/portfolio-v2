import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (true) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
        <div className='col-span-12 p-4 text-center bg-white rounded-lg dark:bg-dark-500 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark'>
          <Sidebar/>
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white rounded-lg lg:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default MyApp;
