import SpotifyWebApi from "spotify-web-api-node"

export const scopes = [
  "user-follow-read",
  "user-library-read",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-email",
  "user-read-playback-state",
  "user-read-private",
  "user-read-recently-played",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "streaming"
].join(",")

export const params = { scope: scopes }
export const queryParamString = new URLSearchParams(params).toString()

export const login = [
  "https://accounts.spotify.com/authorize",
  queryParamString
].join("?")

const spotifyWebApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

export default spotifyWebApi
