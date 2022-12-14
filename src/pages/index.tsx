import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Happy Birthday</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="demo-wrap container flex flex-col items-center justify-center min-h-screen p-10 px-0 mx-auto md:py-20 md:p-10 md:px-0">
        <h1
          className="py-10 font-extrabold text-center text-8xl text-green-400"
          style={{ fontFamily: "Great Vibes,cursive" }}
        >
          Happy Birthday <br />
          <span>Winnie</span>
        </h1>

        <main className="grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 ">
          <section className="h-full max-h-72 rounded-10 shadow-2xl">
            <div className="p-5 py-10 flex flex-col justify-center h-full text-center">
              <h2 className="mb-10 text-3xl text-gray-500 font-bold">
                Another trip around the sun, my dear wife
              </h2>
              <p className="message mb-5 text-pink-400 text-2xl">
                My dear wife is celebrating another fabulous trip around the sun
                today. <br />
                May this year be filled with only the greatest bliss for you my
                love.
                <span role="img" aria-hidden>
                  💐💕😘
                </span>
              </p>
            </div>
          </section>
          <h2 className="message text-right text-2xl text-pink-400">
            From your one and only, David
            <span role="img" aria-hidden>
              💐💕😘🎂
            </span>
          </h2>
        </main>
      </div>
    </>
  );
};

export default Home;
