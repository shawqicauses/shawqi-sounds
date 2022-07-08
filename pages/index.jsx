import { signOut } from "next-auth/react"
import Head from "next/head"
import { classes } from "../lib/utils"

function Home() {
  return (
    <main
      className={classes(
        "min-h-screen py-60",
        "flex items-center justify-center"
      )}>
      <Head>
        <title>Home - @shawqi-sounds</title>
      </Head>
      <div
        className={classes(
          "container mx-auto px-5",
          "flex flex-col items-center justify-center"
        )}>
        <button
          onClick={() => signOut()}
          className={classes("button button-dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes(
              "hidden h-6 w-6 sm:block",
              "fill-transparent stroke-current"
            )}
            viewBox="0 0 24 24"
            strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={[
                "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3",
                "3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ].join(" ")}
            />
          </svg>
          <span>Sign out</span>
        </button>
      </div>
    </main>
  )
}

export default Home
