# Next.js Auth

This application makes use of the [Next Auth](https://next-auth.js.org/getting-started/example) library to develop a Login with [Github](https://github.com/settings/applications). We can also log out. When logging in, the necessary tokens will be saved in the browser's cookies so that later, through the `getSession` functions or the `useSession` hook of Next Auth, we can validate requests.

I have also created in the lib directory a [next auth configuration](https://next-auth.js.org/adapters/mongodb) that allows connecting to a mongodb database and saving the session data of that user.

![](https://i.ibb.co/rvLtZq6/next-auth.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First you will need to install the node modules packages via the `npm i` command in the main project path.

Create an `.env` file in the main project directory and place the following environment variables:

    NEXTAUTH_SECRET=<Random string>
    NEXTAUTH_URL=<http://localhost:3000>
    GITHUB_ID=<Get it from: https://github.com/settings/applications/new>
    GITHUB_SECRET=<Get it from: https://github.com/settings/applications/new>
    MONGODB_URI=<mongodb://127.0.0.1/next-auth>

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
