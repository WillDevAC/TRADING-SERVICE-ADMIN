import '../styles/tailwind.css'
import '../styles/globals.css'
import { ToastContainer, toast } from "react-nextjs-toast";
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {

  const { pathname, asPath, push, query } = useRouter();
  useEffect(() => {
    if (
      pathname.search("/login") < 0 &&
      typeof window != undefined &&
      pathname.search("/register") < 0 && !!asPath && !!pathname
    ) {
      const value = localStorage.getItem("@token");
      const date = localStorage.getItem("@timestampToken");
      const typeUser = localStorage.getItem('@typeUser')
      const isValid =
        value &&
        dayjs(date).toDate().getDate() === dayjs(new Date()).toDate().getDate();
      if (!isValid) {
        push(`/auth/login?url=${asPath}`);
      }

      if(!!typeUser && typeUser == 'admin' &&  pathname.search("/painel/admin") < 0){
        push(`/auth/login?url=${asPath}`);
      }
      if(!!typeUser && typeUser == 'consultant' &&  pathname.search("/painel/consultant") < 0){
        push(`/auth/login?url=${asPath}`);
      }
    }

    //@ts-ignore
    if (
      typeof window != undefined &&
      pathname.search("/register") >= 0 &&
      !!asPath && !!pathname
    ) {
      if (!query.ref && asPath?.search("ref=") < 0) {
        toast.notify(
          "Consulte o admin, ele lhe enviará um link de cadastro",
          {
            title: "error",
          }
        );
        push("/auth/login");
      }
    }
  }, [typeof window, query, asPath]);

  return (
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
  )
}

export default MyApp