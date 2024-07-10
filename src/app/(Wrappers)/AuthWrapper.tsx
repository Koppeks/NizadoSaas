"use client";

import useStore from "@/redux/UseStore";
import { ReactNode, createContext, useEffect, useRef } from "react";
import { checkTokenAuthorization } from "@/utils/api_requests/authorizationToken";
import { usePathname, useRouter } from "next/navigation";

const AuthContext = createContext<{ token: string | null }>({ token: null });

export const AuthWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const ref = useRef(false);

  const { getToken, removeToken } = useStore();
  const token = getToken();


  useEffect(() => {
    const verifyToken = async () => {
      if (token !== null) {
        try {
          const response = await checkTokenAuthorization(token);
          console.log(response)
          if(response.status !== 200){
            removeToken();
            router.push("/sign-in");
          }else if(
            response.status == 200 &&
            (pathname == "/sign-in" ||
              pathname == "/sign-up" ||
              pathname == "/forgot-password")
          ) {
            router.push("/hub");
          }
        } catch (error) {
          console.log(error);
          removeToken();
          router.push("/sign-in");
        }
      } else {
        removeToken();
        router.push("/sign-in");
      }
    };
    if (ref.current) {
      verifyToken();
    }
    return () => {
      ref.current = true;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
