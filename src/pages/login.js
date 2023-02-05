import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <button
        onClick={() => {
          signIn("github");
        }}
      >
        Signin with Github
      </button>
    </div>
  );
};
export default LoginPage;
