import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon
} from "@heroicons/react/outline"
import { classes } from "../../lib/utils"

function Sidebar() {
  return (
    <nav
      className={classes(
        "mb-5 w-full max-w-xs p-6",
        "rounded-lg border border-zinc-800"
      )}>
      <div
        className={classes(
          "flex h-full w-full flex-col",
          "items-start justify-center gap-5"
        )}>
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <HomeIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Home</p>
        </button>
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <SearchIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Search</p>
        </button>
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <LibraryIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Your Library</p>
        </button>
        <hr className={classes("h-0.5 w-full border-0 bg-zinc-800")} />
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <PlusCircleIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Create Playlist</p>
        </button>
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <HeartIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Liked Songs</p>
        </button>
        <button
          className={classes(
            "flex w-full items-center justify-start gap-5",
            "text-base font-normal text-zinc-500",
            "truncate transition hover:text-white"
          )}>
          <RssIcon
            className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
            strokeWidth={1.5}
          />
          <p>Your Episodes</p>
        </button>
      </div>
    </nav>
  )
}

export default Sidebar
