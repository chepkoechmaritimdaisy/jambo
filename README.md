This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Follow these steps to get your development environment set up.

### 1. Install Dependencies

First, install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

This project requires environment variables to run. Copy the example file to a new local file:

```bash
cp .env.example .env.local
```

Now, open `.env.local` and fill in the required values for your local database, authentication, and payment provider.

### 3. Run the Development Server

Once your environment variables are set, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Environment Variables

Before deploying, you'll need to set up the same environment variables from your `.env.local` file in your Vercel project settings.

Go to your project's **Settings > Environment Variables** on Vercel and add the following:

-   `POSTGRES_URL`
-   `NEXTAUTH_SECRET`
-   `NEXTAUTH_URL` (This should be your production URL)
-   `STRIPE_SECRET_KEY`
-   `STRIPE_PUBLIC_KEY`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
