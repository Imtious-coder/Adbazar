import { useEffect } from "react";
import { useRouter } from "next/router";
import { getUserToken } from "../../services/axios.helper";

export default function LoginRequired(Component) {
  return () => {
    const router = useRouter();

    useEffect(() => {
      if (!getUserToken()) {
        router.push(`/login?next=${router.asPath}`);
      }
    }, []);

    return <Component {...arguments} />;
  };
}
