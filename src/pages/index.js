/** Using getSession() - running from backend - with redirection */
import { getSession, signOut } from "next-auth/react";

const HomePage = ({ session }) => {
  return (
    <div>
      <h1>{session.user.name}</h1>
      {/* <p>{session.user.email}</p> */}
      <img src={session.user.image} alt="" />
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default HomePage;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};

/** Using getSession() - running from backend */
// import { getSession } from "next-auth/react";

// const HomePage = ({ session }) => {
//   const { user } = session;

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//       <img src={user.image} alt="" />
//     </div>
//   );
// };

// export default HomePage;

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   return {
//     props: {
//       session: session,
//     },
//   };
// };

/** Using getSession() - running from frontend */
// import { getSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const session = await getSession();
//       setUser(session.user);
//     })();
//   }, []);

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//       <img src={user.image} alt="" />
//     </div>
//   );
// };

// export default HomePage;

/**  Using useSession - Running from frontend - with redirection */
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// const HomePage = () => {

// const router = useRouter();
// const { data: session, status } = useSession();

// if (status === "loading") {
//   return <p>Loading...</p>;
// }

// if (status === "unauthenticated") {
//   router.push("/login");
// }

//   return (
//     <div>
//       {session ? (
//         <div>
//           <h1>{session.user.name}</h1>
//           <p>{session.user.email}</p>
//           <img src={session.user.image} alt="" />
//         </div>
//       ) : (
//         <p>Skeleton</p>
//       )}
//     </div>
//   );
// };
// export default HomePage;
