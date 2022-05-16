import '../styles/tailwind.css'
import '../styles/globals.css'
import { ToastContainer, toast } from "react-nextjs-toast";
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {


  return (
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
  )
}

export default MyApp