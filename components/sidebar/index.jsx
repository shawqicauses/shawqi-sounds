import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon
} from "@heroicons/react/outline"
import { Fragment } from "react"
import { classes } from "../../lib/utils"

function Sidebar() {
  const data = [
    {
      name: "Home",
      icon: (
        <HomeIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Search",
      icon: (
        <SearchIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Your Library",
      icon: (
        <LibraryIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Create Playlist",
      icon: (
        <PlusCircleIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Liked Songs",
      icon: (
        <HeartIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    },
    {
      name: "Your Episodes",
      icon: (
        <RssIcon
          className={classes("h-6 w-6 stroke-current", "hidden sm:block")}
          strokeWidth={1.5}
        />
      )
    }
  ]

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
        {data.map(({ name, icon }, index) => {
          return (
            <Fragment key={index}>
              <button
                className={classes(
                  "flex w-full items-center justify-start gap-5",
                  "text-base font-normal text-zinc-500",
                  "truncate transition hover:text-white"
                )}>
                {icon}
                <p>{name}</p>
              </button>
              {index === 2 ? (
                <hr className={classes("h-0.5 w-full border-0 bg-zinc-800")} />
              ) : null}
            </Fragment>
          )
        })}
      </div>
    </nav>
  )
}

export default Sidebar
